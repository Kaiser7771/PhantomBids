import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiHome, FiTrendingUp, FiLock } from "react-icons/fi";
import { GiCrystalBall, GiCastle, GiGhost } from "react-icons/gi";

const MOCK_HOUSES = [
  {
    id: 1,
    name: "Mansión de las Sombras",
    location: "Siniestro Pico, Salem",
    objectsCount: 14,
    reputation: "Alta Severidad",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=600",
    isVIP: true,
  },
  {
    id: 2,
    name: "Cripta Ancestral Blackwood",
    location: "Catacumbas de Edimburgo",
    objectsCount: 8,
    reputation: "Extrema",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600",
    isVIP: false,
  },
  {
    id: 3,
    name: "Sanatorio Abandonado Raven",
    location: "Bosque Oscuro, Alemania",
    objectsCount: 22,
    reputation: "Peligro Espectral",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
    isVIP: false,
  },
];

export function HousesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredHouses = MOCK_HOUSES.filter((house) =>
    house.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEnterHouse = (houseId) => {
    // Redirige a la vista de detalles de la subasta con el ID correspondiente
    navigate(`/auction/${houseId}`);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 bg-clip-text text-transparent flex items-center gap-3">
            <GiCastle className="text-purple-400 text-3xl" /> Casas de Subastas Ocultas
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Explora los recintos paranormales y accede a los lotes de relicarios embrujados.
          </p>
        </div>

        <div className="relative w-full md:w-80">
          <FiSearch className="absolute left-3 top-3 text-slate-500 text-lg" />
          <input
            type="text"
            placeholder="Buscar por recinto o ubicación..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHouses.map((house) => (
          <div
            key={house.id}
            className="group bg-slate-900/80 border border-slate-800 hover:border-purple-800/60 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-950/30 flex flex-col"
          >
            <div className="relative h-48 overflow-hidden bg-slate-950">
              <img
                src={house.image}
                alt={house.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              {house.isVIP && (
                <span className="absolute top-3 right-3 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 backdrop-blur-md">
                  <FiLock className="text-xs" /> Sala VIP
                </span>
              )}
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-100 group-hover:text-purple-400 transition-colors">
                  {house.name}
                </h3>
                <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                  <FiHome className="text-purple-500" /> {house.location}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-slate-950/60 p-3 rounded-xl border border-slate-800/60">
                <div className="flex items-center gap-2">
                  <GiCrystalBall className="text-purple-400 text-lg" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Lotes</p>
                    <p className="text-xs font-semibold text-slate-200">{house.objectsCount} Objetos</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <GiGhost className="text-indigo-400 text-lg" />
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Aura</p>
                    <p className="text-xs font-semibold text-slate-200">{house.reputation}</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => handleEnterHouse(house.id)}
                className="w-full bg-purple-950/80 hover:bg-purple-900 border border-purple-800/50 hover:border-purple-600 text-purple-300 font-medium py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm group-hover:shadow-md group-hover:shadow-purple-950/50 cursor-pointer"
              >
                <span>Ingresar al Recinto</span>
                <FiTrendingUp className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}