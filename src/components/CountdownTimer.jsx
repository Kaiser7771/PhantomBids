import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

export const CountdownTimer = ({ initialSeconds = 120 }) => {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const isCritical = timeLeft < 30;

  return (
    <div
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold border transition-colors ${
        isCritical
          ? 'bg-rose-950/80 border-rose-600 text-rose-400 animate-pulse'
          : 'bg-slate-900 border-slate-700 text-amber-400'
      }`}
    >
      <FiClock className={isCritical ? 'animate-spin' : ''} />
      <span>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </span>
    </div>
  );
};