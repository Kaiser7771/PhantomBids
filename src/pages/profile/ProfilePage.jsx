import { useState } from "react";
import { FiUser, FiShield, FiClock, FiAward, FiEyeOff } from "react-icons/fi";
import { GiWizardStaff, GiCrystalBall, GiSkullShield } from "react-icons/gi";

const MOCK_USER = {
  alias: "Apostador_Espectral",
  reputation: "Invocador Veterano",
  reputationLevel: 4,
  joinedDate: "Marzo 2026",
  completedBids: 18,
  activeBids: 3,
  relicsWon: 7,
};

const MOCK_USER_BIDS = [
  {
    id: 101,
    title: "Espejo Curvo de Almas Perdidas",
    myLastBid: "$450 USD",
    status: "Liderando",
    timeLeft: "02h 15m",
  },
  {
    id: 102,
    title: "Diario de Rituales Edición 1892",
    myLastBid: "$120 USD",
    status: "Superada",
    timeLeft: "05h 40m",
  },
  {
    id: 103,
    title: "Amuleto de Obsidiana Sellado",
    myLastBid: "$890 USD",
    status: "Ganada",
    timeLeft: "Finalizada",
  },
];

export function ProfilePage() {
  const [user] = useState(MOCK_USER);
  const [myBids] = useState(MOCK_USER_BIDS);

  return (
    <div className="space-y-8">
      {/* Header del Perfil / Banner de Identidad */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
          {/* Avatar Espectral */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-slate-950 border-2 border-purple-600/50 flex items-center justify-center text-purple-400 text-4xl shadow-inner shadow-purple-950/50">
              <GiWizardStaff />
            </div>
            <span className="absolute -bottom-2 -right-2 bg-purple-950 text-purple-300 border border-purple-700/60 p-1.5 rounded-lg text-xs" title="Modo Anónimo Activo">
              <FiEyeOff />
            </span>
          </div>

          {/* Información Principal */}
          <div className="flex-1 text-center md:text-left space-y-2">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center justify-center md:justify-start gap-2">
                <FiUser className="text-purple-400" /> {user.alias}
              </h1>
              
              {/* Insignia de Reputación */}
              <span className="inline-flex items-center gap-1.5 bg-purple-950/80 text-purple-300 border border-purple-700/50 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md self-center md:self-auto">
                <FiAward className="text-amber-400 text-sm" /> {user.reputation}
              </span>
            </div>

            <p className="text-slate-400 text-sm flex items-center justify-center md:justify-start gap-2">
              <FiShield className="text-indigo-400" /> Identidad protegida bajo cifrado anónimo espectral.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Miembro de la red desde: <span className="text-slate-400 font-mono">{user.joinedDate}</span>
            </div>
          </div>
        </div>

        {/* Métricas Rápidas */}
        <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-slate-800/80 text-center">
          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">Subastas Activas</p>
            <p className="text-lg font-bold text-purple-300 mt-0.5">{user.activeBids}</p>
          </div>
          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">Lotes Adquiridos</p>
            <p className="text-lg font-bold text-indigo-300 mt-0.5">{user.relicsWon}</p>
          </div>
          <div className="bg-slate-950/50 p-3 rounded-xl border border-slate-800/50">
            <p className="text-[10px] text-slate-500 uppercase tracking-wider">Pujas Realizadas</p>
            <p className="text-lg font-bold text-slate-200 mt-0.5">{user.completedBids}</p>
          </div>
        </div>
      </div>

      {/* Historial de Pujas Recientes */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-200 flex items-center gap-2">
          <GiCrystalBall className="text-purple-400" /> Actividad Reciente de Ofertas
        </h2>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="divide-y divide-slate-800/80">
            {myBids.map((bid) => (
              <div key={bid.id} className="p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-slate-200">{bid.title}</h3>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <FiClock className="text-slate-500" /> {bid.timeLeft}
                    </span>
                    <span>•</span>
                    <span>Mi puja: <strong className="text-purple-300">{bid.myLastBid}</strong></span>
                  </div>
                </div>

                <div className="self-start sm:self-auto">
                  {bid.status === "Liderando" && (
                    <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800/50 text-xs px-3 py-1 rounded-full font-medium">
                      Liderando
                    </span>
                  )}
                  {bid.status === "Superada" && (
                    <span className="bg-amber-950/80 text-amber-300 border border-amber-800/50 text-xs px-3 py-1 rounded-full font-medium">
                      Superada
                    </span>
                  )}
                  {bid.status === "Ganada" && (
                    <span className="bg-purple-950/80 text-purple-300 border border-purple-800/50 text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
                      <GiSkullShield className="text-xs" /> Adquirido
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}