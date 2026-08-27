import { useState } from 'react';
import { FiMinus, FiPlus, FiLock } from 'react-icons/fi';
import { CountdownTimer } from '../components/CountdownTimer';
import { BettingWidget } from '../components/BettingWidget';
import { AlertBanner } from '../components/AlertBanner';

export const AuctionDetail = () => {
  const minBid = 10;
  const maxBid = 500;
  const [bidAmount, setBidAmount] = useState(minBid);
  const [showPenalty, setShowPenalty] = useState(false);

  const handleIncrement = () => setBidAmount((prev) => Math.min(prev + 5, maxBid));
  const handleDecrement = () => setBidAmount((prev) => Math.max(prev - 5, minBid));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 flex flex-col lg:flex-row gap-8">
      {/* Columna Izquierda: Detalle del Objeto */}
      <div className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between">
        <div>
          <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-slate-950 border border-slate-800 flex items-center justify-center">
            <span className="text-slate-600 font-mono text-sm">[ Preview Objeto Embrujado ]</span>
            <div className="absolute top-4 right-4">
              <CountdownTimer initialSeconds={90} />
            </div>
          </div>
          <h1 className="text-3xl font-extrabold text-purple-400 mb-2">
            Espejo del Susurro Absoluto
          </h1>
          <p className="text-slate-400 mb-4">
            Maldición asociada: <span className="text-amber-400 font-semibold">Eco del Silencio</span>
          </p>
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 text-sm">
            <span className="text-slate-400">Rango permitido de puja: </span>
            <span className="font-mono text-emerald-400 font-bold">${minBid} - ${maxBid}</span>
          </div>

          {showPenalty && (
            <div className="mt-4">
              <AlertBanner
                type="penalty"
                message="¡Atención! Tu puja ha coincidido con otro participante. Se aplica bajada de reputación."
              />
            </div>
          )}
        </div>
      </div>

      {/* Columna Derecha: Formulario de Puja Secreta y Apuestas */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-200">
            <FiLock className="text-purple-400" /> Puja Secreta
          </h2>
          
          <div className="flex items-center justify-between bg-slate-950 border border-slate-800 rounded-xl p-2 mb-4">
            <button
              type="button"
              onClick={handleDecrement}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <FiMinus />
            </button>
            <span className="font-mono text-2xl font-bold text-emerald-400">${bidAmount}</span>
            <button
              type="button"
              onClick={handleIncrement}
              className="p-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>

          <p className="text-xs text-slate-500 mb-4 text-center">
            Tu puja permanece oculta hasta el cierre oficial de la subasta.
          </p>

          <button
            type="button"
            onClick={() => setShowPenalty(!showPenalty)}
            className="w-full py-3 bg-purple-700 hover:bg-purple-600 text-white font-bold rounded-xl transition-colors shadow-lg cursor-pointer"
          >
            Confirmar Oferta Oculta
          </button>
        </div>

        <BettingWidget />
      </div>
    </div>
  );
};