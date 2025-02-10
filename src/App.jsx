import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import './index.css';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Home />
     <About/>
     <Skills/>
     <Experience/>
     <Contact/>
     <SocialLinks/>
    </>
  )
}

export default App
