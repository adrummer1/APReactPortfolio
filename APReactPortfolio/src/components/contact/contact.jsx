import { useState } from 'react';
import '../contact/contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] =useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'message') {
        setMessage(inputValue);
      }
    };

    const handleFormSubmit = (e) => {
      e.preventDefault();

      if (!validateEmail(email) || !userName) {
        setErrorMessage('Email or username is invalid');
        return;
      }

      setUserName('');
      setEmail('');
      setMessage('');
      alert(`Got it! Thanks ${userName}!`)
    };

    return (
      <div className="container text-center">
      <h1 id="contact" className="form-title">Contact Me {userName}</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="message"
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>{errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
    );
  }

export default Contact;
