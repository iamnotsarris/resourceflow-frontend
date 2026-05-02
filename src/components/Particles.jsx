// src/components/Particles.jsx
import { useEffect, useState, memo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import particlesConfig from "../services/particles-config";

const ParticlesBackground = memo(() => {
  const [init, setInit] = useState(false);

  // Inicializa a engine das partículas apenas uma vez
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Carrega todas as funcionalidades necessárias
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={particlesConfig}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
      />
    );
  }

  return <></>;
});

export default ParticlesBackground;