
import { useMemo } from "react";

export function NeoCalendar() {
  const weekDays = ["LUNES", "MARTES", "MIÉRCOLES", "JUEVES", "VIERNES"];
  const timeSlots = ["16H"];

  const events = useMemo(
    () => ({
      "LUNES": [
        { time: "16H", title: "Derecho Constitucional" },
        { time: "18H", title: "Derechos Humanos" },
      ],
      "MARTES": [
        { time: "16H", title: "Inglés" },
        { time: "18H", title: "Inglés" },
      ],
      "MIÉRCOLES": [
        { time: "16H", title: "Derecho Constitucional" },
        { time: "18H", title: "Derechos Humanos" },
      ],
      "JUEVES": [
        { time: "16H", title: "Inglés" },
        { time: "18H", title: "Inglés" },
      ],
      "VIERNES": [
        { time: "16H", title: "Derecho Constitucional" },
        { time: "18H", title: "Derechos Humanos" },
      ],
    }),
    []
  );

  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-8 neon-text">NOVIEMBRE</h2>
      <div className="grid grid-cols-5 gap-4">
        {weekDays.map((day) => (
          <div key={day} className="space-y-4">
            <h3 className="text-center text-lg font-semibold text-neon-cyan mb-4">
              {day}
            </h3>
            <div className="space-y-4">
              {events[day].map((event, index) => (
                <div
                  key={index}
                  className="cyber-card p-4 text-center hover:scale-105 transition-transform"
                >
                  <p className="text-neon-cyan text-sm">{event.time}</p>
                  <p className="text-white text-sm mt-1">{event.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
