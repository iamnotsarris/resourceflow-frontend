import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import {
  IoSave,
  IoPencil,
  IoCamera,
  IoPerson,
  IoMail,
  IoCall,
} from "react-icons/io5";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    phone: "",
    bio: "",
    avatar: "https://github.com/Victor-Sarris.png",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userObj = JSON.parse(storedUser);
      const userId = userObj.id;

      fetch(`http://localhost:3000/api/users/${userId}`)
        .then((response) => {
          if (!response.ok) throw new Error("Erro ao buscar perfil");
          return response.json();
        })
        .then((data) => {
          setFormData((prev) => ({
            ...prev,
            name: data.nome,
            email: data.email,
            role: data.cargo || "Estudante",
            phone: data.telefone,
          }));
        })
        .catch((error) => console.error("Erro:", error));
    }
  }, []);

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Salvar alterações do perfil
  const handleSave = async () => {
    const storedUser = localStorage.getItem("user");

    if (!storedUser) {
      setIsEditing(false);
      return;
    }

    try {
      const userObj = JSON.parse(storedUser);
      const userId = userObj.id;

      const response = await fetch(
        `http://localhost:3000/api/users/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: formData.name,
            email: formData.email,
            telefone: formData.phone,
          }),
        }
      );

      if (response.ok) {
        alert("Perfil atualizado com sucesso!");
      } else {
        console.error("Erro ao atualizar perfil:", response.status);
        alert("Não foi possível salvar as alterações.");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro de conexão com o servidor.");
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="flex min-h-screen app-aurora">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <div className="relative mb-24 pt-4">
          <div className="h-48 w-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg"></div>
          <div className="absolute -bottom-16 left-6 sm:left-8 flex items-end">
            <div className="relative group">
              <img
                src={formData.avatar}
                alt="Foto de Perfil"
                className="w-32 h-32 rounded-full border-4 border-app object-cover bg-elevated"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 rounded-full text-white hover:bg-blue-700 shadow-lg cursor-pointer transition-transform hover:scale-110">
                <IoCamera size={20} />
              </button>
            </div>
            <div className="mb-4 ml-4">
              <h1 className="text-2xl sm:text-3xl font-bold text-fg">
                {formData.name || "Seu Nome"}
              </h1>
              <p className="text-muted">{formData.role}</p>
            </div>
          </div>
          <div className="absolute bottom-4 right-2 md:bottom-15 md:right-0">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2.5 rounded-xl shadow-lg transition-all cursor-pointer font-semibold"
              >
                <IoSave size={20} /> Salvar Alterações
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-surface hover:bg-elevated text-fg px-6 py-2.5 rounded-xl border border-line transition-all cursor-pointer font-semibold"
              >
                <IoPencil size={20} /> Editar Perfil
              </button>
            )}
          </div>
        </div>

        <div className="glass border border-line rounded-2xl p-6 sm:p-8 shadow-2xl max-w-4xl">
          <h2 className="text-xl font-bold text-fg mb-6 border-b border-line pb-4">
            Informações Pessoais
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <InputGroup
              label="Nome Completo"
              name="name"
              icon={<IoPerson />}
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <InputGroup
              label="Email Corporativo"
              name="email"
              icon={<IoMail />}
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <div className="flex flex-col gap-2">
              <label className="text-muted text-sm font-medium ml-1">
                Cargo / Função
              </label>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-field border border-line text-faint cursor-not-allowed">
                <IoBriefcaseIcon />
                <span>{formData.role}</span>
              </div>
              <p className="text-xs text-faint ml-1">
                O cargo não pode ser alterado por aqui.
              </p>
            </div>
            <InputGroup
              label="Telefone / Celular"
              name="phone"
              icon={<IoCall />}
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-muted text-sm font-medium ml-1">
                Sobre Mim
              </label>
              <textarea
                name="bio"
                rows="4"
                value={formData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder={isEditing ? "Conte um pouco sobre você..." : ""}
                className={`
                  w-full px-4 py-3 rounded-xl bg-field border outline-none transition-all resize-none placeholder-faint
                  ${
                    !isEditing
                      ? "border-line text-muted"
                      : "border-blue-500/50 text-fg focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  }
                `}
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

function InputGroup({ label, name, value, onChange, disabled, icon }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-muted text-sm font-medium ml-1">
        {label}
      </label>

      <div
        className={`
          flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300
          ${
            disabled
              ? "bg-field border-line text-muted"
              : "bg-field border-blue-500/50 text-fg shadow-lg shadow-blue-500/10"
          }
        `}
      >
        <span className={`${disabled ? "text-faint" : "text-blue-500"}`}>
          {icon}
        </span>

        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          className="bg-transparent outline-none w-full font-medium disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}

const IoBriefcaseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M336 288H176v-32H16v196a12 12 0 0012 12h456a12 12 0 0012-12V256H336zM176 176v-64h160v64h48v-64a48 48 0 00-48-48H176a48 48 0 00-48 48v64z" />
  </svg>
);

export default Profile;
