import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

// Importacoes de particulas
import ParticlesBackground from "../components/Particles.jsx";

// Importacoes de icones da bibioteca
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

function Login() {
  const navigate = useNavigate();
  const handleReturnPage = () => {
    navigate("/");
  };

  // funcao para o "exibir senha"
  const passwordRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login realizado com sucesso!");
        navigate("/dashboard");
      } else {
        alert(data.message || "Email ou senha incorretos.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden app-aurora text-white">
      <ParticlesBackground />

      {/* Configurações Gerais da página */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-5xl animate-fade-in-up">
          {/* botao de retorno */}
          <button
            title="Voltar para a página anterior"
            onClick={handleReturnPage}
            className="mb-4 inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <FaArrowLeft size={16} />
            Voltar
          </button>

          {/* Container Principal */}
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 glass shadow-2xl">
            {/* Conteudo secundario (marca) */}
            <div className="hidden lg:flex flex-col items-center justify-center gap-6 p-10 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-r border-white/10 text-center">
              <img
                src={Logo}
                alt="Resource Flow"
                title="Esse é meu gatinho :)"
                className="h-44 w-44 object-contain drop-shadow-[0_0_35px_rgba(96,165,250,0.35)]"
              />
              <h3 className="text-lg font-semibold text-slate-200 max-w-xs leading-relaxed">
                Como aquele velho ditado... Falta um pouquinho pra daqui a
                pouco.
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

              <h2 className="text-2xl font-bold text-white text-center">
                Bem-vindo de volta 👋
              </h2>
              <p className="text-sm text-slate-400 text-center mt-1">
                Para continuar, coloque seus dados abaixo.
              </p>

              {/* botoes de login social */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-3 border border-white/15 bg-white/5 text-slate-100 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                  <FcGoogle size={22} />
                  Google
                </button>
                <button className="flex items-center justify-center gap-3 border border-white/15 bg-white/5 text-slate-100 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:bg-white/10 hover:border-white/30">
                  <FaGithub size={22} />
                  GitHub
                </button>
              </div>

              {/* divisor */}
              <div className="flex items-center gap-4 my-6">
                <span className="h-px flex-1 bg-white/10" />
                <span className="text-xs text-slate-500 font-medium">OU</span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              {/* Campos de registro */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  title="Insira seu Email aqui"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950/60 text-white p-3.5 border border-white/10 rounded-xl outline-none transition-all placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                />

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
                    className="w-full bg-slate-950/60 text-white p-3.5 pr-12 border border-white/10 rounded-xl outline-none transition-all placeholder-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Ocultar senha" : "Mostrar senha"}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer bg-transparent border-none transition-colors"
                  >
                    {showPassword ? (
                      <VscEye size={20} />
                    ) : (
                      <VscEyeClosed size={20} />
                    )}
                  </button>
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white p-3.5 cursor-pointer rounded-xl font-semibold shadow-lg shadow-blue-900/40 hover:shadow-blue-500/30 transition-all duration-300"
                >
                  Entrar
                </button>
              </form>

              <p className="text-center text-sm text-slate-400 mt-6">
                Não tem uma conta?{" "}
                <button
                  onClick={() => navigate("/cadastro")}
                  className="text-blue-400 hover:text-blue-300 font-medium cursor-pointer transition-colors"
                >
                  Cadastre-se
                </button>
              </p>

              <p className="text-[12px] text-slate-500 text-center mt-6">
                Resource Flow 2025 | 🔱🪽
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
