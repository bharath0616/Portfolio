import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './components/config/particles-config';


const ParticleComponent = () => {
  return (
    
      <Particles id= "particles" options={particlesConfig} />
    
  );
};

export default ParticleComponent;
