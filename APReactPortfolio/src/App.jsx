import Navbar from './components/navbar/navbar';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';

function App() {
    return (
        <div className="App">
            <Navbar />
            <About />
            <Projects />
            <Resume />
        </div>
    )
}

export default App;


