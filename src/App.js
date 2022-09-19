import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Description from './Components/Description';


import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About';
import { Box, Stack } from '@chakra-ui/react';
import Footer from './Components/Footer';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
   
    <Navbar  />
    <br />
    <About />
    <Description />
    <br />
    <br />
    <br />
    <Projects />
    <Skills />
    <br />
    <br />
  <br />
  <br />
  <br /><br />
 

    <br />
    <Contact />
    <Footer />
  

     
    </div>
  );
}

export default App;
