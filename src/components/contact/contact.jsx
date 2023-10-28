import { useState } from 'react';
import '../contact/contact.css';
import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userNameTouched, setUserNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userName') {
      setUserName(inputValue);
      setUserNameTouched(true);
    } else if (inputType === 'email') {
      setEmail(inputValue);
      setEmailTouched(true);
    } else if (inputType === 'message') {
      setMessage(inputValue);
      setMessageTouched(true);
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
      <h1 id="contact" className="form-title">Contact Me</h1>
      <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          onBlur={() => setUserNameTouched(true)}
          type="text"
          placeholder="username"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={() => setEmailTouched(true)}
          type="email"
          placeholder="email"
        />
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          onBlur={() => setMessageTouched(true)}
          type="text"
          placeholder="message"
        />
        {userNameTouched && !userName && (
          <p className="required-field-notification">Username is required</p>
        )}
        {emailTouched && !email && (
          <p className="required-field-notification">Email is required</p>
        )}
        {messageTouched && !message && (
          <p className="required-field-notification">Message is required</p>
        )}
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
