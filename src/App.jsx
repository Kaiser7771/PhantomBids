import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { AuthPage } from "./pages/auth/AuthPage";
import { HousesPage } from "./pages/houses/HousePage";
import { ProfilePage } from "./pages/profile/ProfilePage";
import { CreateObjectPage } from "./pages/objects/CreateObjectPage";
import { AuctionDetail } from "./pages/AuctionDetail";
import { CurseLog } from "./pages/CurseLog";git 
import { RankingsDashboard } from "./pages/RankingsDashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
        <Navbar />
        <main className="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6">
          <Routes>
            {/* Rutas tuyas */}
            <Route path="/" element={<Navigate to="/houses" replace />} />
            <Route path="/login" element={<AuthPage />} />
            <Route path="/register" element={<AuthPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/objects/new" element={<CreateObjectPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Rutas de tu compañero */}
            <Route path="/auction/:id" element={<AuctionDetail />} />
            <Route path="/profile/curses" element={<CurseLog />} />
            <Route path="/rankings" element={<RankingsDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}