import React, { useState } from "react";
import { X, MapPin, Tag, Type, AlignLeft, Plus, Calendar } from "lucide-react";

export default function AddEventModal() {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do evento:", formData);
    setIsOpen(false);
    setFormData({ title: "", description: "", category: "Aula", location: "" }); // Reset
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full mt-4 py-4 border-2 border-dashed border-slate-700/60 rounded-xl 
                   flex items-center justify-center gap-2 text-slate-400 hover:text-white 
                   hover:border-blue-500/50 hover:bg-slate-800/50 transition-all duration-300 group"
      >
        <Plus
          size={20}
          className="group-hover:scale-110 transition-transform"
        />
        <span>Adicionar novo evento para hoje</span>
      </button>

      {/* --- O Modal --- */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop (Fundo escuro com blur) */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Conteúdo do Modal */}
          <div className="relative w-full max-w-lg bg-[#0f172a] border border-slate-700/50 rounded-2xl shadow-2xl transform transition-all">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <div>
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Calendar className="text-blue-500" size={20} />
                  Novo Evento
                </h2>
                <p className="text-sm text-slate-400 mt-1">
                  Adicione os detalhes para a agenda de hoje.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Formulário */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Nome do Evento */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <Type size={16} /> Nome do Evento
                </label>
                <input
                  type="text"
                  name="title"
                  required
                  placeholder="Ex: Aula de Desenvolvimento Web"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                           placeholder-slate-600 transition-all"
                />
              </div>

              {/* Categoria e Localização (Grid lado a lado) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Categoria */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Tag size={16} /> Categoria
                  </label>
                  <div className="relative">
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 
                               appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all cursor-pointer"
                    >
                      <option value="Aula">Aula</option>
                      <option value="Reunião">Reunião</option>
                      <option value="Manutenção">Manutenção</option>
                      <option value="Trabalho">Trabalho</option>
                      <option value="Pessoal">Pessoal</option>
                    </select>
                    {/* Seta customizada para o select */}
                    <div className="absolute right-4 top-3.5 pointer-events-none text-slate-500">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Localização */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <MapPin size={16} /> Localização
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="Ex: Sala 302"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 
                             focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                             placeholder-slate-600 transition-all"
                  />
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <AlignLeft size={16} /> Descrição
                </label>
                <textarea
                  name="description"
                  rows="3"
                  placeholder="Detalhes adicionais sobre o evento..."
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-200 
                           focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 
                           placeholder-slate-600 transition-all resize-none"
                ></textarea>
              </div>

              {/* Botões de Ação */}
              <div className="flex justify-end gap-3 pt-4 border-t border-slate-800 mt-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg text-sm font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 transition-all transform hover:scale-[1.02]"
                >
                  Salvar Evento
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
