import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '/style.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/about/about';
import Projects from './components/projects/projects';
import Resume from './components/resume/resume';
import Contact from './components/contact/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />, 
      },
      {
        path: "/resume",
        element: <Resume />, 
      },
      {
        path: "/contact",
        element: <Contact />, 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
