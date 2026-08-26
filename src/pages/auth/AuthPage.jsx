import { useState } from "react";
import { Input } from "../../components/ui/Input";
import { FiMail, FiLock, FiUser, FiShield } from "react-icons/fi";
import { GiGhost } from "react-icons/gi";

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <div className="flex flex-col items-center text-center mb-8">
          <GiGhost className="text-3xl text-purple-400 animate-bounce mb-3" />
          <h1 className="text-2xl font-bold text-purple-400">PhantomBids</h1>
          <p className="text-sm text-slate-400 mt-1">{isLogin ? "Accede" : "Únete"}</p>
        </div>
        
        <div className="flex bg-slate-950 p-1 rounded-xl mb-6">
          <button onClick={() => setIsLogin(true)} className={`flex-1 py-2 text-sm rounded-lg ${isLogin ? "bg-purple-900/50 text-purple-300" : "text-slate-400"}`}>Login</button>
          <button onClick={() => setIsLogin(false)} className={`flex-1 py-2 text-sm rounded-lg ${!isLogin ? "bg-purple-900/50 text-purple-300" : "text-slate-400"}`}>Registro</button>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {!isLogin && <Input label="Alias" icon={FiUser} />}
          <Input label="Correo" type="email" icon={FiMail} />
          <Input label="Contraseña" type={showPassword ? "text" : "password"} icon={FiLock} />
          
          <button type="submit" className="w-full mt-6 bg-purple-600 text-white py-3 rounded-xl flex justify-center items-center gap-2">
            <FiShield /> {isLogin ? "Entrar" : "Crear Cuenta"}
          </button>
        </form>
      </div>
    </div>
  );
}