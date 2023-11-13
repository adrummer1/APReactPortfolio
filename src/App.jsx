import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';

// Displaying all six components
function App() {

    return (
        <div className="App">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;


