import { GiGhost } from "react-icons/gi";

export const CurseLog = () => {
  const curses = [
    { id: 1, name: 'Silencio Absoluto', remainingMinutes: 15, totalMinutes: 60, status: 'Activa' },
    { id: 2, name: 'Doble Sanción por Puja Duplicada', remainingMinutes: 40, totalMinutes: 120, status: 'Sancionado' },
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-slate-100">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <GiGhostSlime className="text-rose-500" /> Curse Log / Historial de Maldiciones
      </h2>
      <div className="grid gap-4 md:grid-cols-2">
        {curses.map((curse) => {
          const progress = ((curse.totalMinutes - curse.remainingMinutes) / curse.totalMinutes) * 100;

          return (
            <div key={curse.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-rose-400">{curse.name}</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-rose-950 border border-rose-800 text-rose-300 font-semibold">
                  {curse.status}
                </span>
              </div>
              <p className="text-xs text-slate-400 mb-2">
                Tiempo de pena restante: {curse.remainingMinutes} min
              </p>
              <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-slate-800">
                <div
                  className="bg-rose-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};