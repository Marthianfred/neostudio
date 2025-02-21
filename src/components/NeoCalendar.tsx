import {useEffect, useMemo} from "react";
import useGetScheduleStore from "@/stores/getScheduleStore.ts";
import {cn} from "@/lib/utils.ts";

export function NeoCalendar() {
    const {schedule, fetchSchedule} = useGetScheduleStore();

    const weekDays = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];

    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    const dayMapping: Record<string, string> = {
        Mon: "LUNES",
        Tue: "MARTES",
        Wed: "MIÉRCOLES",
        Thu: "JUEVES",
        Fri: "VIERNES",
    };

    useEffect(() => {
        fetchSchedule(9007, currentMonth).then();
    }, [fetchSchedule, currentMonth]);

    const getMonthDays = (month: number, year: number) => {
        const lastDay = new Date(year, month, 0);
        const daysInMonth = [];

        for (let day = 1; day <= lastDay.getDate(); day++) {
            daysInMonth.push(new Date(year, month - 1, day));
        }

        return daysInMonth;
    };

    const events = useMemo(() => {
        const groupedEvents: Record<string, { date: string, title: string }[]> = {
            LUNES: [],
            MARTES: [],
            MIÉRCOLES: [],
            JUEVES: [],
            VIERNES: [],
        };

        schedule.forEach(event => {
            const eventDate = new Date(event.Date);
            if (eventDate.getMonth() + 1 === currentMonth && eventDate.getFullYear() === currentYear) {
                const dayOfWeek = dayMapping[event.Day];
                groupedEvents[dayOfWeek]?.push({
                    date: event.Date.split(" ")[0],
                    title: event.Task,
                });
            }
        });

        return groupedEvents;
    }, [schedule, currentMonth, currentYear]);

    const monthDays = getMonthDays(currentMonth, currentYear);

    const firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    const firstDayIndex = firstDayOfMonth.getDay();

    const emptyCells = new Array(firstDayIndex === 0 ? 6 : firstDayIndex - 1).fill(null);

    const totalCells = emptyCells.concat(monthDays);

    return (
        <div className="p-0 md:p-8">

            <h2 className="text-4xl font-bold text-center mb-8 neon-text">
                {`${new Date().toLocaleString("es-ES", {month: "long"}).toUpperCase()}`}
            </h2>
            <div className="container cyber-card clip-path-hex-corners-large py-10">
                <div className="grid grid-cols-5">
                    {weekDays.map((day, colIndex) => (
                        <div key={colIndex} className={cn(
                            "space-y-4 cursor-pointer",
                            colIndex !== weekDays.length - 1 ? "border-r border-teal-100 px-6" : "px-6"
                        )}>
                            <h3 className="text-center text-lg font-semibold text-neon-cyan mb-4 truncate">
                                {day}
                            </h3>
                            <>
                                {totalCells.map((date, index) => {
                                    if (date === null) return null;

                                    const dayOfWeek = date.getDay() === 0 ? 6 : date.getDay() - 1;
                                    if (weekDays[dayOfWeek] === day) {
                                        const formattedDate = date.toISOString().split('T')[0];
                                        const eventsForTheDay = events[day]?.filter(e => new Date(e.date).toISOString().split('T')[0] === formattedDate);

                                        return (
                                            <div key={index}>
                                                <div
                                                    className={cn(
                                                        "cyber-border-4 p-4 text-center hover:scale-105",
                                                        "transition-transform h-36 max-w-xs w-full"
                                                    )}>
                                                    <div id="top-right" className="absolute h-[50%] w-[50%]"></div>
                                                    <div id="bottom-left" className="absolute h-[50%] w-[50%]"></div>
                                                    <p className="text-white text-sm">{date.getDate()}</p>

                                                    {eventsForTheDay && eventsForTheDay.length > 0 ? (
                                                        eventsForTheDay.map((event, eventIndex) => (
                                                            <p key={eventIndex}
                                                               className="text-neon-cyan text-sm truncate max-w-full text-left"
                                                               style={{
                                                                   whiteSpace: 'nowrap',
                                                                   overflow: 'hidden',
                                                                   textOverflow: 'ellipsis'
                                                               }}
                                                               title={event.title}>
                                                                {event.title}
                                                            </p>
                                                        ))
                                                    ) : (
                                                        <p className="text-gray-500 text-sm mt-1 truncate">Sin
                                                            evento</p>
                                                    )}
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
