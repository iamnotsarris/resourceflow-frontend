import Sidebar from "../components/Sidebar.jsx";
import Calendar from "../components/Calendar.jsx";
import {
  IoAdd,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoHammerOutline,
  IoFilter,
} from "react-icons/io5";

function DashBoard() {
  return (
    <div className="flex min-h-screen app-aurora">
      <Sidebar />

      <main className="flex-1 p-6 md:p-10 transition-all duration-300">
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pl-16 md:pl-16">
          <div>
            <h1 className="text-3xl font-bold text-white">
              Agenda Institucional
            </h1>
            <p className="text-slate-400 mt-1">
              Gerencie eventos e horários da instituição.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg shadow-blue-900/30 hover:shadow-blue-500/30 transition-all font-medium cursor-pointer">
            <IoAdd size={22} />
            Novo Evento
          </button>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 xl:gap-8 xl:h-[calc(100vh-180px)]">
          <div className="xl:col-span-1 flex flex-col gap-6">
            <div className="glass border border-slate-800 p-6 rounded-2xl">
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <IoFilter className="text-blue-400" /> Categorias
              </h3>
              <div className="flex flex-col gap-3">
                <EventTypeButton
                  icon={<IoSchoolOutline />}
                  label="Aulas"
                  color="border-blue-500/60 text-blue-400"
                />
                <EventTypeButton
                  icon={<IoBriefcaseOutline />}
                  label="Reuniões"
                  color="border-purple-500/60 text-purple-400"
                />
                <EventTypeButton
                  icon={<IoHammerOutline />}
                  label="Manutenção"
                  color="border-emerald-500/60 text-emerald-400"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl flex-1">
              <h3 className="text-slate-300 text-sm font-medium mb-2">
                Próximo Evento
              </h3>
              <p className="text-2xl font-bold text-white">Reunião Geral</p>
              <p className="text-slate-400 text-sm mb-4">Amanhã, 14:00</p>
              <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3 bg-slate-900/60 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden xl:h-full">
            <Calendar />
          </div>
        </div>
      </main>
    </div>
  );
}

// Componente auxiliar para os botões de categoria
function EventTypeButton({ icon, label, color }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border ${color} bg-slate-800/50 hover:bg-slate-800 transition-all cursor-pointer group`}
    >
      <span className="text-xl group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <span className="text-slate-200 font-medium">{label}</span>
    </button>
  );
}

export default DashBoard;
