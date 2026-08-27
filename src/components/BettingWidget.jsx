import { useState } from 'react';
import { GiDiceTarget } from 'react-icons/gi';

export const BettingWidget = () => {
  const chips = [5, 10, 25, 50];
  const [selectedChip, setSelectedChip] = useState(10);
  const [targetAlias, setTargetAlias] = useState('');

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
      <div className="flex items-center gap-2 mb-4">
        <GiDiceTarget className="text-2xl text-emerald-400" />
        <h3 className="text-lg font-bold text-slate-100">Apuesta Paralela (3x)</h3>
      </div>

      <label className="block text-xs text-slate-400 mb-2">Fichas de Reputación:</label>
      <div className="grid grid-cols-4 gap-2 mb-4">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => setSelectedChip(chip)}
            className={`py-2 rounded-lg font-mono font-bold text-sm border transition-colors cursor-pointer ${
              selectedChip === chip
                ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
            }`}
          >
            +{chip}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Alias anónimo objetivo (ej: Sombra_42)"
        value={targetAlias}
        onChange={(e) => setTargetAlias(e.target.value)}
        className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-slate-200 mb-4 focus:outline-none focus:border-purple-500"
      />

      <button
        type="button"
        className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer"
      >
        Apostar Reputación
      </button>
    </div>
  );
};