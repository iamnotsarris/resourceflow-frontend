import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { IoChatbubbles, IoEllipse, IoClose } from "react-icons/io5"; // Ícones compatíveis

function Support() {
  // 1. Estado para controlar o chat
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // 2. Função para alternar o chat
  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  // CSS Customizado (Animações que não existem no Tailwind padrão)
  const customStyles = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fadeInUp 0.5s ease-out forwards;
    }
    .hover-lift {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .hover-lift:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    `;

  return (
    <div className="flex min-h-screen bg-slate-950">
      <style>{customStyles}</style>
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 transition-all duration-300">
        <section className="bg-linear-to-r from-blue-900 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden rounded-2xl shadow-2xl">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="lg:w-2/3 text-center lg:text-left animate-fade-in-up">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Como podemos ajudá-lo hoje?
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Obtenha suporte instantâneo para suas necessidades na plataforma
                Resource Flow.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 flex items-center space-x-2 hover-lift cursor-default">
                  <IoEllipse className="text-green-400 text-xs" />
                  <span className="font-medium">Suporte 24/7 Disponível</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-3 flex items-center space-x-2 hover-lift cursor-default">
                  <IoEllipse className="text-green-400 text-xs" />
                  <span className="font-medium">Tempo Médio: 5min</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 mt-12 lg:mt-0 flex justify-center">
              <div className="relative w-64 h-64 flex items-center justify-center">
                <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-white/5 rounded-full animate-ping opacity-20"></div>
                <div className="absolute inset-8 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <IoChatbubbles className="text-white text-7xl drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-slate-800 w-full text-white border border-slate-600 p-6 flex flex-col gap-6 rounded-3xl mt-6 shadow-2xl overflow-hidden px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-3xl text-red-600 font-bold">ATENÇÃO</h1>
          <p>
            Todas as respostas são dadas por uma IA especializada no contexto
            geral da plataforma. Caso queira uma resposta mais específica, entre
            em contato com:{" "}
            <a
              href="https://mail.google.com/mail/u/0/#drafts?compose=CllgCJNsvFMVbsLZPCknDKDCPbphhzgfXLFWhZpVDRwLbGVrRRrRgNFsptcxmdKCNRBkGFDdLqB"
              className="text-blue-600"
            >
              devvictorsarris@gmail.com
            </a>
          </p>
        </div>
        {!isChatbotOpen && (
          <button
            onClick={toggleChatbot}
            aria-label="Abrir suporte por chat"
            className="fixed bottom-8 right-8 w-16 h-16 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center cursor-pointer shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-300 z-50 group"
          >
            <IoChatbubbles className="text-2xl group-hover:rotate-12 transition-transform" />
            <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-600"></div>
          </button>
        )}
        {isChatbotOpen && (
          <div className="fixed bottom-24 right-8 w-80 md:w-96 bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-fade-in-up">
            {/* Header do Chat */}
            <div className="bg-linear-to-r from-purple-800 to-indigo-800 p-4 flex justify-between items-center">
              <h3 className="text-white font-bold flex items-center gap-2">
                <IoChatbubbles /> Suporte Resource Flow
              </h3>
              <button
                onClick={toggleChatbot}
                className="text-white/80 hover:text-white hover:bg-white/10 rounded-full p-1 transition-colors"
              >
                <IoClose size={20} />
              </button>
            </div>
            <div className="h-64 p-4 bg-slate-900 text-slate-300 text-sm flex flex-col gap-3 overflow-y-auto">
              <div className="self-start bg-slate-800 p-3 rounded-2xl rounded-tl-none max-w-[85%]">
                Olá! Sou o assistente virtual. Como posso ajudar você hoje?
              </div>
            </div>
            <div className="p-3 bg-slate-800 border-t border-slate-700">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="w-full bg-slate-900 text-white px-4 py-2 rounded-full border border-slate-700 focus:outline-none focus:border-purple-500 text-sm"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Support;
