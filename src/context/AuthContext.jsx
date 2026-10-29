import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Estado global del usuario autenticado
  const [user, setUser] = useState({
    alias: "Apostador_Espectral",
    email: "espectro@phantombids.com",
    role: "user", // "user" o "admin"
    isAuthenticated: true,
  });

  const login = (userData) => {
    setUser({ ...userData, isAuthenticated: true });
  };

  const logout = () => {
    setUser({ alias: "", email: "", role: "guest", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return context;
}