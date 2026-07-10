import { useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home as HomeIcon, User, FolderOpen, Award } from "lucide-react";

// Import  Komponen UI
import DotGrid from "./components/DotGrid";
import GooeyNav from "./components/GooeyNav";
import Dock from "./components/Dock";

// Import seluruh pages 
import Home from "./pages/Home";
import Background from "./pages/Background";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";

// Komponen Konten Utama
function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

// State untuk Swipe Konten 
  const [previewData, setPreviewData] = useState(null);

// Array khusus buat ngisi Dock React Bits
  const dockItems = [
    {
      icon: (
        <HomeIcon
          size={24}
          className={currentPath === "/" ? "text-[#00bcff]" : "text-gray-400"}
        />
      ),
      label: "Home",
      onClick: () => navigate("/"),
    },
    {
      icon: (
        <User
          size={24}
          className={
            currentPath === "/background" ? "text-[#00bcff]" : "text-gray-400"
          }
        />
      ),
      label: "Background",
      onClick: () => navigate("/background"),
    },
    {
      icon: (
        <FolderOpen
          size={24}
          className={
            currentPath === "/projects" ? "text-[#00bcff]" : "text-gray-400"
          }
        />
      ),
      label: "Projects",
      onClick: () => navigate("/projects"),
    },
    {
      icon: (
        <Award
          size={24}
          className={
            currentPath === "/certificates" ? "text-[#00bcff]" : "text-gray-400"
          }
        />
      ),
      label: "Certificates",
      onClick: () => navigate("/certificates"),
    },
  ];

  let activeIndex = 0;
  if (currentPath === "/background") activeIndex = 1;
  else if (currentPath === "/projects") activeIndex = 2;
  else if (currentPath === "/certificates") activeIndex = 3;

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Background", href: "/background" },
    { label: "Projects", href: "/projects" },
    { label: "Certificates", href: "/certificates" },
  ];

  return (
    <div className=" bg-halaman-utama relative min-h-screen bg-black pb-24 md:pb-10">
      <div className="inset-0 z-0 fixed">
        <DotGrid backgroundColor="transparent" color="#00bcff" />
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-screen text-white pt-4 md:pt-10">
        {/*Navbar Desktop*/}
        <div className="hidden md:flex justify-center w-full z-50">
          <GooeyNav
            key={activeIndex}
            items={menuItems}
            particleCount={47}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={activeIndex}
            animationTime={600}
            timeVariance={2000}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/*Area Router Halaman*/}
        <div className="mt-8 md:mt-32 w-full max-w-7xl px-4">
          <Routes>
            <Route
              path="/"
              element={<Home setPreviewData={setPreviewData} />}
            />

            <Route path="/background" element={<Background />} />

            <Route
              path="/projects"
              element={<Projects setPreviewData={setPreviewData} />}
            />

            <Route path="/certificates" element={<Certificates />} />
          </Routes>
        </div>
      </div>

      {/* Modal Preview dengan Fitur Swipe Content) */}
      {previewData && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setPreviewData(null)}
        >
          {/* Tombol Close di Pojok - Naik kasta ke z-[10002] */}
          <button className="absolute top-6 right-6 md:top-8 md:right-8 text-white text-4xl hover:text-[#00bcff] transition-colors z-[10002]">
            ×
          </button>

          {/* Panah Kiri - Naik kasta ke z-[10002] */}
          {previewData.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreviewData((prev) => ({
                  ...prev,
                  index:
                    prev.index === 0 ? prev.images.length - 1 : prev.index - 1,
                }));
              }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-[10002] p-3 md:p-4 bg-black/60 hover:bg-[#00bcff] text-white hover:text-black rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,188,255,0.3)] backdrop-blur-sm hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}

          {/* Gambar Utama yang Lagi Dilihat - Tetap di z-[10001] */}
          {(() => {
            const currentItem = previewData.images[previewData.index];
            const isYouTube =
              typeof currentItem === "string" &&
              (currentItem.includes("youtube.com") ||
                currentItem.includes("youtu.be"));
            const isLocalVideo =
              typeof currentItem === "string"
                ? currentItem.match(/\.(mp4|webm|ogg)$/i)
                : (currentItem && currentItem.default) ||
                  typeof currentItem === "object";

            return isYouTube ? (
              // Kalau yang diklik Youtube, mainkan videonya
              <iframe
                className="max-w-[90vw] max-h-[85vh] w-full aspect-video rounded-xl shadow-2xl"
                src={`${currentItem}?autoplay=1`} // otomatis play
                title="YouTube Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            ) : isLocalVideo ? (
              // Kalau yang diklik video MP4 lokal, mainkan pakai video tag
              <video
                className="max-w-[90vw] max-h-[85vh] rounded-xl shadow-2xl"
                src={
                  typeof currentItem === "object"
                    ? currentItem.default || currentItem
                    : currentItem
                }
                controls // Munculin tombol play, pause, volume
                autoPlay // otomatis play
              ></video>
            ) : (
              // Kalau foto, ya nampilin foto membesar biasa kayak sebelumnya
              <img
                src={currentItem}
                alt="Enlarged preview"
                className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            );
          })()}

          {/* Panah Kanan - Naik kasta ke z-[10002] */}
          {previewData.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreviewData((prev) => ({
                  ...prev,
                  index:
                    prev.index === prev.images.length - 1 ? 0 : prev.index + 1,
                }));
              }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-[10002] p-3 md:p-4 bg-black/60 hover:bg-[#00bcff] text-white hover:text-black rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(0,188,255,0.3)] backdrop-blur-sm hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}

          {/* Indikator Titik-titik di Bawah Gambar - Naik kasta ke z-[10002] */}
          {previewData.images.length > 1 && (
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-[10002]">
              {previewData.images.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-2 rounded-full transition-all duration-300 shadow-md ${
                    idx === previewData.index
                      ? "w-8 bg-[#00bcff]"
                      : "w-2 bg-white/50 hover:bg-white cursor-pointer"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setPreviewData((prev) => ({ ...prev, index: idx }));
                  }}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Navbar Mobile */}
      <div className="md:hidden fixed bottom-10 left-0 right-0 w-full flex justify-center mx-auto z-50">
        <Dock items={dockItems} />
      </div>
    </div>
  );
}

// --- FUNGSI APP UTAMA ---
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
