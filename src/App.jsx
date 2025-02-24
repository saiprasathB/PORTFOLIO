import './App.css'
import React from "react";
import Home from './/Components/FunctionalComponents/Home'
import NavBar from './Components/FunctionalComponents/NavBar'
import About from './Components/FunctionalComponents/About';
import Skills from './Components/FunctionalComponents/Skills';
import Projects from './Components/FunctionalComponents/Projects';
import Internship from './Components/FunctionalComponents/Internship';
import Contact from './Components/FunctionalComponents/Contact';
import Achivements from './Components/FunctionalComponents/Achivements';
import StarryBackground from './Components/FunctionalComponents/StarAnimation';
import Education from './Components/FunctionalComponents/Education';
function App() {

  return (
    <><div>
     <StarryBackground></StarryBackground>
     <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Projects></Projects>
      <Internship></Internship>
      <Achivements></Achivements>
      <Contact></Contact>
      
      
      </div>
    </>
  )
}

export default App
