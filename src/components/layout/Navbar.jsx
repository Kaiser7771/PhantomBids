import { Link, NavLink } from "react-router-dom";
import { FiHome, FiLogOut, FiPlusCircle, FiAward } from "react-icons/fi";
import { GiGhost, GiWizardStaff } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";

export function Navbar() {
  const { user, logout } = useAuth();

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
          <NavLink to="/rankings" className={getLinkStyle}>
            <FiAward /> Rankings
          </NavLink>
          {user.isAuthenticated && (
            <NavLink to="/objects/new" className={getLinkStyle}>
              <FiPlusCircle /> Crear Objeto
            </NavLink>
          )}
        </nav>

        {/* Info del Perfil / Status */}
        <div className="flex items-center gap-4">
          {user.isAuthenticated ? (
            <>
              <Link to="/profile" className="flex items-center gap-2.5 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-full hover:border-purple-800 transition-colors">
                <GiWizardStaff className="text-amber-400 text-lg" />
                <span className="text-xs font-mono text-slate-300">{user.alias || "Apostador"}</span>
              </Link>
              <button 
                onClick={logout}
                title="Cerrar Sesión" 
                className="text-slate-400 hover:text-rose-400 transition-colors p-2 cursor-pointer"
              >
                <FiLogOut className="text-lg" />
              </button>
            </>
          ) : (
            <Link to="/login" className="text-xs font-semibold bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl transition-colors">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}