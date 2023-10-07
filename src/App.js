import React from 'react';
import './App.scss';
import {  Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import ParticleComponent from './ParticlesBackground';
import About from './components/About';
import Project from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <ParticleComponent />
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='projects' element={<Project />} />
            <Route path='resume' element={<Resume />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
        </>
      
  )
}

export default App
