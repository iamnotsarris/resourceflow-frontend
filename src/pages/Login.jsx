import Logo from "../assets/Resource-Flow.png";
import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from "react";

// Importacoes de particulas
import ParticlesBackground from "../components/Particles.jsx";

// Importacoes de icones da bibioteca
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
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
    <div>
      <>
        <ParticlesBackground />
      </>

      {/* Configurações Gerais da página */}
      <div className="min-h-screen bg-[rgba(58,37,193,0.388)] text-white text-center flex flex-col items-center bg relative z-10">
        {/* Container Principal */}
        <div className="bg-transparent border-2 border-white rounded-2xl w-315 h-190 items-center justify-center m-3">
          {/* Container Content */}
          <div className="flex">
            {/* Conteudo secundario */}
            <div className="flex flex-col w-max items-center justify-center">
              {/* botao de retorno */}
              <button
                title="Voltar para a página anterior"
                className="flex gap-5 cursor-pointer ml-100 hover:text-purple-400 transition-all duration-300"
                onClick={handleReturnPage}
              >
                <FaArrowLeft size={24} />
              </button>
              <img
                src={Logo}
                alt=""
                title="Esse é meu gatinho :)"
                className="h-150 w-150 object-contain"
              />
              <h3 className="font-bold m-10 mt-17.5">
                Como aquele velho ditado... Falta um pouquinho pra daqui a
                pouco.
              </h3>
            </div>
            {/* Conteudo principal */}
            <div className="bg-white rounded-[10px] rounded-tl-none rounded-bl-none w-215 h-190">
              <h2 className="text-xl font-bold text-gray-800 text-center  mt-20">
                Para continuar, coloque seus dados a baixo
              </h2>
              {/* botoes de login */}
              <div className="m-20 flex gap-10 justify-center mb-3.75">
                <button className="text-black border-2 border-black p-3 w-70 rounded-xl flex gap-3 mb-10 cursor-pointer transition-all duration-300 hover:bg-black/10">
                  <FcGoogle size={24} />
                  Fazer login com o Google
                </button>
                <button className="text-black border-2 border-black p-3 w-70 rounded-xl flex gap-3 mb-10 cursor-pointer transition-all duration-300 hover:bg-black/10">
                  <FaGithub size={24} />
                  Fazer login com o GitHub
                </button>
              </div>

              <h3 className="text-black font-bold">Ou</h3>
              {/* Campos de registro */}
              <div className="flex flex-col h-100% m-10">
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    title="Insira seu Email aqui"
                    value={formData.email}
                    onChange={handleChange}
                    className="text-black p-3 border-2 border-b-slate-700 rounded-2xl"
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
                      className="text-black p-3  border-2 border-b-slate-700 rounded-2xl w-full pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black cursor-pointer bg-transparent border-none"
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5 text-gray-300"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.243 4.243l-4.243-4.243"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-500 text-white p-4 w-50 m-10 cursor-pointer border-2 rounded-[7px] border-transparent hover:bg-purple-400 transition-all duration-300"
                  >
                    Entrar
                  </button>
                </form>
              </div>

              <p className="text-[12px] text-black mt-22.5">
                Resource Flow 2025 |🔱🪽
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
