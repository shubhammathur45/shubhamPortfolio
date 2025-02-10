import { useState } from 'react'
import NavBar from './components/NavBar.jsx'
import Home from './components/Home.jsx'
import './index.css';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
     <Home />
     <About/>
     <SocialLinks/>
    </>
  )
}

export default App
