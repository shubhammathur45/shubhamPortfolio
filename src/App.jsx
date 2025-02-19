import NavBar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import './index.css';
import SocialLinks from './components/SocialLinks.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import MiniCircle from './components/MiniCircle.jsx';

function App() {

  return (
    <>
     <MiniCircle/>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default App;