export default function BottomNav({ items, activeIndex }) {
  const navItems = items || [];

  return (
    <div className="fixed bottom-6 inset-x-4 md:hidden z-50 pointer-events-none">
      <div className="rounded-full bg-white/10 backdrop-blur-sm backdrop-saturate-200 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] pointer-events-auto p-1.5">
        <ul className="relative flex w-full items-center">
          {/* === PIL KACA BERJALAN === */}
          <div
            className="absolute left-0 top-0 bottom-0 transition-transform duration-500 ease-out z-0 flex items-center justify-center"
            style={{
              width: `${100 / navItems.length}%`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          >
            {/* Ini rahasia efek air/lensanya:
              - bg-white/5 : Hampir bening
              - backdrop-blur-3xl : Blur tingkat dewa biar background di belakangnya kepelintir
              - shadow-[inset...] : Bikin pantulan cahaya di atas (putih tipis) dan bayangan gelap di bawah biar kerasa 3D melayang
            */}
            <div className="w-[90%] h-full rounded-full bg-white/5 backdrop-blur-3xl backdrop-brightness-125 border border-white/10 shadow-[inset_0_1px_3px_rgba(255,255,255,0.3),_0_4px_15px_rgba(0,0,0,0.5)]"></div>
          </div>

          {/* Looping item */}
          {navItems.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <li
                key={item.label}
                onClick={item.onClick}
                className="relative z-10 flex flex-col items-center justify-center w-full py-1.5 cursor-pointer"
              >
                {/* Wadah Ikon */}
                <div
                  className={`mb-1 transition-all duration-300 ${isActive ? "scale-110" : "[&_svg]:!text-white"}`}
                >
                  {item.icon}
                </div>

                {/* Teks Label */}
                <span
                  className={`text-[10px] font-semibold transition-colors duration-300 ${isActive ? "text-[#00bcff]" : "text-white"}`}
                >
                  {item.label}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}