import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  IoArrowBackSharp,
  IoHomeOutline,
  IoCalendarOutline,
  IoHelpCircleOutline,
  IoLogOutOutline,
  IoMenu,
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-6 left-6 z-40 p-3 bg-slate-900 text-white rounded-xl shadow-lg hover:bg-slate-800 transition-all border border-gray-500"
        >
          <IoMenu size={24} />
        </button>
      )}

      <div
        className={`
                fixed left-0 top-0 h-full w-64 bg-slate-900 text-white 
                rounded-r-3xl flex flex-col shadow-2xl z-50 border border-gray-500
                transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full"}
            `}
      >
        <div className="p-8 flex flex-col gap-4">
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-slate-700 transition-colors text-slate-300 cursor-pointer"
          >
            <IoArrowBackSharp size={20} />
          </button>

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Resource Flow
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Gerenciamento de Eventos
            </p>
          </div>
        </div>

        <nav className="flex-1 px-4 flex flex-col gap-2">
          <MenuButton
            icon={<IoHomeOutline size={20} />}
            text="Home"
            onClick={() => handleNavigation("/dashboard")}
            active={location.pathname === "/dashboard"}
          />
          <MenuButton
            icon={<IoCalendarOutline size={20} />}
            text="Agenda"
            onClick={() => handleNavigation("/diary")}
            active={location.pathname === "/diary"}
          />
          <MenuButton
            icon={<IoHelpCircleOutline size={20} />}
            text="Suporte"
            onClick={() => handleNavigation("/support")}
            active={location.pathname === "/support"}
          />
          <MenuButton
            icon={<CgProfile size={20} />}
            text="Perfil"
            onClick={() => handleNavigation("/profile")}
            active={location.pathname === "/profile"}
          />
        </nav>

        <div className="p-4 mb-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all duration-300 group cursor-pointer">
            <IoLogOutOutline
              size={22}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">Sair</span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        />
      )}
    </>
  );
}

function MenuButton({ icon, text, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
                w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer
                ${
                  active
                    ? "bg-blue-600 shadow-lg shadow-blue-500/30 text-white"
                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                }
            `}
    >
      {icon}
      <span className="font-medium text-sm tracking-wide">{text}</span>
    </button>
  );
}

export default Sidebar;
