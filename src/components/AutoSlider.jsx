import { useState, useEffect } from "react";


export default function AutoSlider({
  images,
  interval = 5000,
  onPreviewClick,
  projectLink,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // State baru khusus buat ngakalin klik di layar sentuh Android/iOS
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, interval);
    return () => clearInterval(timer);
  }, [images, interval, currentIndex]);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (!images || images.length === 0)
    return (
      <div className="w-full h-full bg-gray-900 flex items-center justify-center text-[#00bcff] font-medium">
        No Images Found
      </div>
    );

  return (
    // Tambahin event onClick di kotak paling luar buat deteksi tap di HP
    <div
      className="relative w-full h-full overflow-hidden rounded-xl group cursor-pointer"
      onClick={() => setShowOverlay(!showOverlay)}
      onMouseLeave={() => setShowOverlay(false)} // Biar pas kursor geser di PC, overlay-nya otomatis nutup
    >
      {/* Trek Foto Utama */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Screenshot ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Indikator Titik-titik di bawah */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? "w-4 bg-[#00bcff]" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Overlay Tengah (Tombol Preview & Link) */}
      {/* Perhatiin class opacity-nya udah digabung sama logic showOverlay */}
      <div
        className={`absolute inset-0 bg-black/70 transition-all duration-300 flex flex-col items-center justify-center gap-4 z-20 ${showOverlay ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPreviewClick && onPreviewClick(currentIndex);
          }}
          className="w-40 py-2.5 bg-[#00bcff] text-black font-bold rounded-full hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,188,255,0.6)]"
        >
          Preview
        </button>

        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-40 py-2.5 bg-transparent border-2 border-[#00bcff] text-[#00bcff] font-bold text-center rounded-full hover:bg-[#00bcff]/20 hover:scale-105 transition-all"
          >
            Open Link
          </a>
        )}
      </div>

      {/* TOMBOL PANAH NAVIGASI */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={`absolute left-3 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-black/60 hover:bg-[#00bcff] text-white hover:text-black rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-110 ${showOverlay ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className={`absolute right-3 top-1/2 -translate-y-1/2 z-30 p-2.5 bg-black/60 hover:bg-[#00bcff] text-white hover:text-black rounded-full transition-all duration-300 shadow-lg backdrop-blur-sm hover:scale-110 ${showOverlay ? "opacity-100" : "opacity-0 lg:group-hover:opacity-100"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
