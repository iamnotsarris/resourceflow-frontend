import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptBr from '@fullcalendar/core/locales/pt-br'; 

function CalendarWidget() {
    // const eventos = [
    //     { title: 'Reunião de Equipe', date: '2025-01-20', backgroundColor: '#3b82f6' }, 
    //     { title: 'Entrega de Projeto', date: '2025-01-25', backgroundColor: '#ef4444' },
    //     { title: 'Manutenção', date: '2025-01-28', backgroundColor: '#10b981' } 
    // ];

    return (
        <div className="bg-[#29178d09] p-6 rounded-2xl shadow-xl border border-slate-700 w-full h-full">
            <style>{`
                .fc {
                    color: #e2e8f0; /* Texto */
                }
                .fc-theme-standard .fc-scrollgrid {
                    border-color: #475569; /* Bordas da grade */
                }
                .fc-theme-standard td, .fc-theme-standard th {
                    border-color: #475569;
                }
                .fc-day-today {
                    background-color: #1e293b !important; /* Destaque dia atual */
                }
                .fc-button-primary {
                    background-color: #3b82f6 !important;
                    border-color: #3b82f6 !important;
                }
                .fc-button-active {
                    background-color: #2563eb !important;
                }
            `}</style>

            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                locale={ptBr} 
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
                }}
                // events={eventos}
                height="auto" 
                contentHeight="600px"
            />
        </div>
    );
}

export default CalendarWidget;