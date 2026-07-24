import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";
import ParticlesBackground from "../components/Particles.jsx";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function Cadastro() {
  const navigate = useNavigate();
  const handleReturnPage = () => {
    navigate("/");
  };

  // === comunicacao do back com front ===
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telefone: "",
    cpf: "",
    password: "",
  });

  // funcao para o checkbox
  const [isChecked, setIsChecked] = useState(false);

  // funcao para o "exibir senha"
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que a página recarregue

    if (!isChecked) {
      alert("É necessário aceitar os termos e serviços para continuar.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Usuário cadastrado com sucesso!");
        navigate("/login"); // Volta para o login
      } else {
        alert("Erro ao cadastrar.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden app-aurora text-fg">
      <ParticlesBackground />

      {/* Configurações Gerais da página */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-5xl animate-fade-in-up">
          {/* botao de retorno */}
          <button
            title="Voltar para a página anterior"
            onClick={handleReturnPage}
            className="mb-4 inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors cursor-pointer"
          >
            <FaArrowLeft size={16} />
            Voltar
          </button>

          {/* Container Principal */}
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-line glass shadow-2xl">
            {/* Conteudo secundario (marca) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-r border-line text-center">
              <img
                src={Logo}
                alt="Resource Flow"
                title="Esse é meu gatinho :)"
                className="h-44 w-44 object-contain drop-shadow-[0_0_35px_rgba(96,165,250,0.35)]"
              />
              <h3 className="text-lg font-semibold text-fg max-w-xs leading-relaxed">
                Como minha avó sempre dizia... Vamos começar pelo começo.
              </h3>
            </div>

            {/* Conteudo principal (formulario) */}
            <div className="p-8 sm:p-10 flex flex-col justify-center">
              <div className="lg:hidden flex justify-center mb-6">
                <img
                  src={Logo}
                  alt="Resource Flow"
                  title="Esse é meu gatinho :)"
                  className="h-20 w-20 object-contain"
                />
              </div>

              <h2 className="text-2xl font-bold text-fg text-center">
                Crie sua conta ✨
              </h2>
              <p className="text-sm text-muted text-center mt-1">
                Para continuar, coloque seus dados abaixo.
              </p>

              {/* botoes de cadastro social */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-3 border border-line bg-field text-fg p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-elevated hover:border-blue-500/40">
                  <FcGoogle size={22} />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 border border-line bg-field text-fg p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-elevated hover:border-blue-500/40">
                  <FaGithub size={22} />
                  GitHub
                </button>
              </div>

              {/* divisor */}
              <div className="flex items-center gap-4 my-6">
                <span className="h-px flex-1 bg-line" />
                <span className="text-xs text-faint font-medium">OU</span>
                <span className="h-px flex-1 bg-line" />
              </div>

              {/* Campos de registro */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nome completo"
                  title="Insira seu Nome aqui"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-field text-fg p-3.5 border border-line rounded-xl outline-none transition-all placeholder-faint focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  title="Insira seu Email aqui"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-field text-fg p-3.5 border border-line rounded-xl outline-none transition-all placeholder-faint focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="telefone"
                    id="telefone"
                    placeholder="Telefone"
                    title="Insira seu Número aqui"
                    value={formData.telefone}
                    onChange={handleChange}
                    className="w-full bg-field text-fg p-3.5 border border-line rounded-xl outline-none transition-all placeholder-faint focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                  <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    placeholder="CPF"
                    title="Insira seu CPF aqui"
                    value={formData.cpf}
                    onChange={handleChange}
                    className="w-full bg-field text-fg p-3.5 border border-line rounded-xl outline-none transition-all placeholder-faint focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                </div>

                {/* Campo de senha com botão de "ver senha" */}
                <div className="relative w-full">
                  <input
                    ref={passwordRef}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Senha"
                    title="Insira sua senha aqui"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full bg-field text-fg p-3.5 pr-12 border border-line rounded-xl outline-none transition-all placeholder-faint focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-fg cursor-pointer bg-transparent border-none transition-colors"
                  >
                    {showPassword ? (
                      <VscEye size={20} />
                    ) : (
                      <VscEyeClosed size={20} />
                    )}
                  </button>
                </div>

                {/* Botao de checkbox */}
                <label className="flex items-start gap-3 text-sm text-muted cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)}
                    className="mt-0.5 h-4 w-4 accent-blue-500 cursor-pointer"
                  />
                  <span>
                    Eu concordo com os{" "}
                    <span className="text-blue-500 cursor-pointer hover:underline">
                      termos e serviços
                    </span>{" "}
                    da plataforma.
                  </span>
                </label>

                <button
                  type="submit"
                  className="mt-1 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white p-3.5 cursor-pointer rounded-xl font-semibold shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Registrar-se
                </button>
              </form>

              <p className="text-center text-sm text-muted mt-6">
                Já tem uma conta?{" "}
                <button
                  onClick={() => navigate("/login")}
                  className="text-blue-500 hover:text-blue-400 font-medium cursor-pointer transition-colors"
                >
                  Entrar
                </button>
              </p>

              <p className="text-[12px] text-faint text-center mt-6">
                Resource Flow 2025 | 🔱🪽
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cadastro;
