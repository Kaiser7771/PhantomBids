import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuctionDetail } from './pages/AuctionDetail';
import { CurseLog } from './pages/CurseLog';
import { RankingsDashboard } from './pages/RankingsDashboard';

function App() {
  return (
    <BrowserRouter>
      {/* Navegación básica temporal para probar las rutas */}
      <nav className="bg-slate-900 border-b border-slate-800 p-4 flex gap-4 text-sm font-semibold text-slate-300">
        <Link to="/auction/1" className="hover:text-purple-400">Subasta (/auction/1)</Link>
        <Link to="/profile/curses" className="hover:text-purple-400">Maldiciones (/profile/curses)</Link>
        <Link to="/rankings" className="hover:text-purple-400">Rankings (/rankings)</Link>
      </nav>

      <Routes>
        <Route path="/auction/:id" element={<AuctionDetail />} />
        <Route path="/profile/curses" element={<CurseLog />} />
        <Route path="/rankings" element={<RankingsDashboard />} />
        {/* Ruta por defecto */}
        <Route path="*" element={<AuctionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;