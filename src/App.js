import './App.css';

// Import Components
import Nav from './components/Nav/Nav'
import AboutMe from './components/AboutMe/AboutMe'
import ContactMe from './components/ContactMe/ContactMe'
import Projects from './components/Projects/Projects'
import Hero from './components/Hero/Hero'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
    </div>
  );
}

export default App;
