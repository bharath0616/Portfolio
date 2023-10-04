import React from 'react';
import Particles from "react-tsparticles";
import particlesConfig from "./config/particlesConfig";

const ParticlesBackground = () => {
  return(
    <div id="particles-background" style={{ position: "absolute", zIndex: 0 }}>
      <Particles params={particlesConfig} />
    </div>
  )
}

export default ParticlesBackground;