import React from 'react';
import './App.scss';
import {  Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import Home from './components/Home';
import ParticlesBackground from './components/ParticlesBackground';


function App() {
  return (
    <>
    <ParticlesBackground />
        <Routes>
        
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        </>
      
  )
}

export default App
