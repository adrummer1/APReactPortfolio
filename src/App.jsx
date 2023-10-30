import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

// Displaying all six components
function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Resume />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;


