import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import './components/css/Global.css'
import Skill from './components/Skill';
import Header from './components/Header';
import Project from './components/Project';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Skill/>
    <Project/>
    <Education/>
    <Contact/>
    <Footer/>
    
    </>
  );
}

export default App;
