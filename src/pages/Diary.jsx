import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoLocationOutline,
  IoChevronBack,
  IoChevronForward,
  IoAdd,
  IoSaveOutline,
} from "react-icons/io5";
import AddEventModal from "../components/AddEventModal";

function Diary() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dailyNote, setDailyNote] = useState("");

  const dailyEvents = [
    {
      id: 1,
      time: "08:00 - 09:30",
      title: "Aula de Desenvolvimento Web",
      location: "Lab. Informática 3",
      type: "Aula",
      color: "border-blue-500",
    },
    {
      id: 2,
      time: "10:00 - 11:00",
      title: "Reunião Pedagógica",
      location: "Sala de Reuniões 1",
      type: "Reunião",
      color: "border-purple-500",
    },
    {
      id: 3,
      time: "13:30 - 15:00",
      title: "Manutenção dos Servidores",
      location: "Data Center",
      type: "Manutenção",
      color: "border-emerald-500",
    },
  ];

  const formatDate = (date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "numeric",
      month: "long",
      weekday: "long",
    }).format(date);
  };

  return (
    <div className="flex min-h-screen bg-slate-950">
      <Sidebar />

      <main className="flex-1 lg:ml-64 p-8 transition-all duration-300">
        <header className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              Diário de Atividades
            </h1>
            <p className="text-slate-400">
              Organize sua rotina diária detalhada.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-900 p-2 rounded-2xl border border-slate-800 shadow-lg">
            <button className="p-2 hover:bg-slate-800 rounded-xl text-white transition-colors">
              <IoChevronBack size={20} />
            </button>

            <div className="flex items-center gap-2 px-4">
              <IoCalendarOutline className="text-blue-500" />
              <span className="text-white font-medium capitalize">
                {formatDate(selectedDate)}
              </span>
            </div>

            <button className="p-2 hover:bg-slate-800 rounded-xl text-white transition-colors">
              <IoChevronForward size={20} />
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 flex flex-col gap-6">
            <div className="relative border-l-2 border-slate-800 ml-3 space-y-8 pb-10">
              {dailyEvents.map((event) => (
                <div key={event.id} className="relative pl-8 group">
                  <div
                    className={`absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-slate-950 border-2 ${event.color} group-hover:scale-125 transition-transform`}
                  ></div>

                  <div className="bg-slate-900/50 hover:bg-slate-900 border border-slate-800 p-5 rounded-2xl transition-all hover:shadow-xl hover:translate-x-1 cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-md border bg-opacity-10 ${event.color
                          .replace("border", "text")
                          .replace("border", "bg")}`}
                      >
                        {event.type}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-sm">
                        <IoTimeOutline />
                        {event.time}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h3>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <IoLocationOutline />
                      {event.location}
                    </div>
                  </div>
                </div>
              ))}

              <div className="relative pl-8">
                <div className="absolute -left-2.25 top-2 w-4 h-4 rounded-full bg-slate-800"></div>
                <AddEventModal />
              </div>
            </div>
          </div>

          <div className="xl:col-span-1">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-8 shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-white font-bold text-lg">
                  Anotações do Dia
                </h3>
                <button
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                  title="Salvar"
                >
                  <IoSaveOutline size={22} />
                </button>
              </div>

              <textarea
                className="w-full h-100 bg-slate-950 rounded-xl p-4 text-slate-300 resize-none outline-none focus:ring-2 focus:ring-blue-500/50 border border-slate-800"
                placeholder="Escreva lembretes, observações ou ocorrências importantes deste dia..."
                value={dailyNote}
                onChange={(e) => setDailyNote(e.target.value)}
              ></textarea>

              <p className="text-xs text-slate-500 mt-3 text-right">
                Última alteração: Hoje às 14:30
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Diary;
