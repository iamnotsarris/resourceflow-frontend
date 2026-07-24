import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";

// Importacoes de particulas
import ParticlesBackground from "../components/Particles";

// Icones
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import { IoArrowForward, IoPersonAddOutline } from "react-icons/io5";

function DefaultPage() {
  const navigate = useNavigate();
  const handleSelectLogin = () => navigate("/login");
  const handleSelectSingUp = () => navigate("/cadastro");

  return (
    <div className="relative min-h-screen overflow-hidden app-aurora text-white">
      {/* Inicializacao de particulas */}
      <ParticlesBackground />

      {/* Configurações gerais da página */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-between px-6 py-10">
        {/* Conteudo principal */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto animate-fade-in-up">
          <img
            src={Logo}
            alt="Resource Flow"
            className="h-28 w-28 sm:h-40 sm:w-40 object-contain drop-shadow-[0_0_35px_rgba(96,165,250,0.35)]"
          />

          <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Agendamento inteligente para instituições de ensino
          </span>

          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Bem-vindo(a) ao{" "}
            <span className="text-gradient">Resource Flow</span>!
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-xl">
            Uma plataforma intuitiva e simples para o agendamento de eventos em
            uma instituição de ensino.
          </p>
          <p className="mt-2 text-slate-400">
            Comece fazendo o login na plataforma 🙂👇
          </p>

          {/* Botoes */}
          <div className="mt-9 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={handleSelectLogin}
              className="group inline-flex items-center justify-center gap-2 w-64 sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
            >
              Fazer Login
              <IoArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleSelectSingUp}
              className="inline-flex items-center justify-center gap-2 w-64 sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-100 border border-white/15 bg-white/5 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 cursor-pointer"
            >
              <IoPersonAddOutline size={20} />
              Cadastrar-se
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-3xl mx-auto text-center pt-10">
          <div className="border-t border-white/10 pt-6">
            <p className="text-sm text-slate-400">
              &copy; Victor S. | 🔱🪽 — todos os direitos reservados.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <a
                href="https://victorsarris.netlify.app/"
                target="_blank"
                rel="noreferrer noopener"
                title="Meu portfólio"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <FaGlobe /> Portfólio
              </a>
              <a
                href="https://www.linkedin.com/in/victorsarris/"
                target="_blank"
                rel="noreferrer noopener"
                title="LinkedIn"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://github.com/Victor-Sarris"
                target="_blank"
                rel="noreferrer noopener"
                title="GitHub"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default DefaultPage;
