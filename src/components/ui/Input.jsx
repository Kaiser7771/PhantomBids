export function Input({ label, icon: Icon, type = "text", ...props }) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-slate-300">{label}</label>}
      <div className="relative flex items-center">
        {Icon && <Icon className="absolute left-3 text-slate-400 text-lg" />}
        <input
          type={type}
          className={`w-full bg-slate-950 border border-slate-800 rounded-lg py-2.5 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors ${
            Icon ? "pl-10 pr-4" : "px-4"
          }`}
          {...props}
        />
      </div>
    </div>
  );
}