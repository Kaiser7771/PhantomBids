import { Link, NavLink } from "react-router-dom";
import { FiHome, FiUser, FiLogOut, FiPlusCircle } from "react-icons/fi";
import { GiGhost, GiWizardStaff } from "react-icons/gi";

export function Navbar() {
  const getLinkStyle = ({ isActive }) =>
    `flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
      isActive ? "bg-purple-950/60 text-purple-400 border border-purple-800/50" : "text-slate-400 hover:text-slate-100 hover:bg-slate-900"
    }`;

  return (
    <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 text-purple-500 font-bold text-xl tracking-wider">
          <GiGhost className="text-2xl animate-pulse" />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            PhantomBids
          </span>
        </Link>

        {/* Enlaces de navegación */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/houses" className={getLinkStyle}>
            <FiHome /> Casas
          </NavLink>
          <NavLink to="/objects/new" className={getLinkStyle}>
            <FiPlusCircle /> Crear Objeto
          </NavLink>
        </nav>

        {/* Info del Perfil / Status */}
        <div className="flex items-center gap-4">
          <Link to="/profile" className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full hover:border-purple-800 transition-colors">
            <GiWizardStaff className="text-amber-400 text-lg" />
            <span className="text-xs font-mono text-slate-300">Apostador_Espectral</span>
          </Link>
          <button title="Cerrar Sesión" className="text-slate-400 hover:text-rose-400 transition-colors p-2">
            <FiLogOut className="text-lg" />
          </button>
        </div>
      </div>
    </header>
  );
}