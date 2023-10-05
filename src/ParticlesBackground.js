import React from 'react';
import Particles from 'react-tsparticles';
import particlesConfig from './components/config/particles-config';
import { loadFull } from "tsparticles";

const ParticleComponent = () => {
  const particlesInit = async (main) => {
		console.log(main);
		await loadFull(main);
	};
	const particlesLoaded = (container) => {
		console.log(container);
	};
	return (
		<Particles
			options={particlesConfig}
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
		/>
	);
}
;

export default ParticleComponent;
