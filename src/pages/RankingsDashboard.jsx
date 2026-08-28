import { useState } from 'react';
import { GiDaemonSkull, GiFlame, GiTrophy } from 'react-icons/gi';

export const RankingsDashboard = () => {
  const [activeTab, setActiveTab] = useState('worst');

  const tabs = [
    { id: 'worst', label: 'Worst Bidder', icon: GiDaemonSkull },
    { id: 'cursed', label: 'Total Cursed', icon: GiFlame },
    { id: 'prophet', label: 'Betting Prophet', icon: GiTrophy },
  ];

  return (
    <div className="p-6 bg-slate-950 min-h-screen text-slate-100">
      <h1 className="text-3xl font-extrabold mb-6 text-purple-400">Tableros de Ranking</h1>

      {/* Navegación por Tabs */}
      <div className="flex gap-2 border-b border-slate-800 mb-6 overflow-x-auto pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-purple-950 border border-purple-700 text-purple-300'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Icon className="text-lg" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tabla Responsiva */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950 text-slate-400 font-mono text-xs uppercase border-b border-slate-800">
            <tr>
              <th className="p-4">Posición</th>
              <th className="p-4">Alias Anónimo</th>
              <th className="p-4">Métrica</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="hover:bg-slate-800/50">
              <td className="p-4 font-bold text-amber-400">#1</td>
              <td className="p-4 font-mono">Espectro_99</td>
              <td className="p-4 font-mono text-rose-400">14 Pujas Repetidas</td>
            </tr>
            <tr className="hover:bg-slate-800/50">
              <td className="p-4 font-bold text-slate-400">#2</td>
              <td className="p-4 font-mono">Sombra_12</td>
              <td className="p-4 font-mono text-rose-400">9 Pujas Repetidas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};