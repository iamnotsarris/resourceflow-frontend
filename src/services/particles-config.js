// Ficou curioso sobre as particulas? A documentação está aqui: https://vincentgarreau.com/particles.js/
// aproveite! 
// 2005 | Victor S. 🔱🪽

const particlesConfig = {
  background: {
    color: {
      value: "#0F172E", // Cor de fundo 
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff" // cor das particulas,
    },
    links: {
      color: "#ffffff", // cor do "link" das particulas
      distance: 75,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: 'true',
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 100, // Numero de particulas na tela
    },
    opacity: {
      value: 0.6, // Opacidade da particula
    },
    shape: {
      type: "star", // formato da particula
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;