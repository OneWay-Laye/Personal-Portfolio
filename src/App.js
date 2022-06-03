import './App.css';

// Import Components
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <AboutMe/>
      <ContactMe/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
