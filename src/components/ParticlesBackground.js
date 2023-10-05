import React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";

const ParticlesBackground = () => {
  return (
    <Particles id="particles" options={particlesConfig} />
  );
}       

export default ParticlesBackground;