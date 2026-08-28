import { FiAlertTriangle, FiShieldOff } from 'react-icons/fi';

export const AlertBanner = ({ type = 'warning', message }) => {
  const isPenalty = type === 'penalty';

  return (
    <div
      className={`flex items-center gap-3 p-4 rounded-xl border ${
        isPenalty
          ? 'bg-rose-950/60 border-rose-800 text-rose-300'
          : 'bg-amber-950/60 border-amber-800 text-amber-300'
      }`}
    >
      {isPenalty ? (
        <FiShieldOff className="text-2xl shrink-0" />
      ) : (
        <FiAlertTriangle className="text-2xl shrink-0" />
      )}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};