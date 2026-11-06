import React from "react";
import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";
import ParticlesBackground from "../components/Particles.jsx";
import { IoHomeOutline, IoArrowBack } from "react-icons/io5";

function Found404() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden app-aurora text-fg">
      <ParticlesBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-2xl animate-fade-in-up">
          <div className="flex flex-col items-center justify-center p-10 rounded-3xl border border-line glass shadow-2xl text-center">
            {/* Logo em tons de cinza para dar a ideia de "desativado/perdido" */}
            <img
              src={Logo}
              alt="Resource Flow"
              className="h-32 w-32 object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-6 grayscale opacity-80"
            />

            <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight text-gradient mb-2">
              404
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold text-fg mb-4">
              Página não encontrada
            </h2>

            <p className="text-base sm:text-lg text-muted max-w-md mb-8">
              Ops! Parece que você se perdeu no fluxo. O recurso que você está
              procurando não existe ou foi movido para outro lugar.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-fg border border-line bg-field hover:bg-elevated hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
              >
                <IoArrowBack size={20} />
                Voltar
              </button>

              <button
                onClick={() => navigate("/")}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30 transition-all duration-300 cursor-pointer"
              >
                <IoHomeOutline size={20} />
                Página Inicial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Found404;
