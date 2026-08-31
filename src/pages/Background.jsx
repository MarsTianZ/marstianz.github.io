import BorderGlow from "../components/BorderGlow";

// export dari app.jsx
export default function Background() {
  return (
    <div className="flex flex-col items-center mt-10 md:mt-16 w-full max-w-5xl mx-auto px-4 md:px-8 animate-fade-in pb-24">
      <div className="w-full mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-gray-800 pb-4">
          My <span className="text-[#00bcff]">Education</span>
        </h2>
        <div className="relative border-l-2 border-[#00bcff]/30 ml-4 md:ml-0">
          <div className="mb-10 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  STIKOM Dinamika University
                </h3>
                <p className="text-[#00bcff] font-medium mb-1">
                  Bachelor of Information Systems | Faculty of Technology and
                  Informatics
                </p>
                <p className="text-gray-400 text-sm">
                  August 2021 - August 2026
                </p>
              </div>
            </BorderGlow>
          </div>
          <div className="mb-10 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Karitas 3 Catholic Senior High School
                </h3>
                <p className="text-[#00bcff] font-medium mb-1">Science Major</p>
                <p className="text-gray-400 text-sm">July 2018 - June 2021</p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>

      <div className="w-full mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-gray-800 pb-4">
          My <span className="text-[#00bcff]">Experience</span>
        </h2>
        <div className="relative border-l-2 border-[#00bcff]/30 ml-4 md:ml-0">
          <div className="mb-12 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Freelance IT Support Specialist
                </h3>
                <p className="text-[#00bcff] font-medium mb-4">Present</p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Successfully handled hardware customization, PC assembly, and
                  Windows troubleshooting. Successfully performed advanced
                  Android modifications (rooting, KernelSU, Magisk, custom ROMs)
                  as well as in-depth customization of the user interface (UI)
                  for the Linux operating system (Xubuntu).
                </p>
              </div>
            </BorderGlow>
          </div>

          <div className="mb-12 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Undergraduate Thesis Researcher
                </h3>
                <p className="text-[#00bcff] font-medium mb-4">
                  Bachelor's Degree (S1) - Information Systems | 2026
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Successfully designed an elderly-friendly user interface (UI)
                  and user experience (UX) for a web-based fertilizer
                  distribution application using the Design Thinking method.
                  This design digitized the manual record-keeping process at 30
                  partner kiosks, achieving a 100% success rate in usability
                  testing (Maze) and a “Very Good” (Grade A) score of 97.5 on
                  the System Usability Scale (SUS).
                </p>
              </div>
            </BorderGlow>
          </div>

          <div className="mb-12 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Digital Marketing Intern
                </h3>
                <p className="text-[#00bcff] font-medium mb-4">
                  CV. Karya Cipta Membangun | 2025
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Successfully implemented a digital marketing strategy for a
                  regional fertilizer distributor. Successfully developed an
                  SEO-optimized WordPress website and integrated it with Google
                  Business Profile, thereby significantly increasing online
                  visibility, expanding market reach, and streamlining the
                  ordering process through the kiosk.
                </p>
              </div>
            </BorderGlow>
          </div>

          <div className="mb-12 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Warehouse Administrator & Packing Staff
                </h3>
                <p className="text-[#00bcff] font-medium mb-4">
                  Partner Warehouse | 2024 (3 Months)
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Took the initiative to gain practical work experience by
                  joining a collaborative warehouse team. Managed packaging
                  operations for three different brands: Toko Moteza Indonesia
                  (clothing), PT Bisatani Sukses Utama (liquid fertilizer), and
                  PT Naturalva Herba Indonesia (herbal products). Additionally,
                  successfully served as a warehouse administrator responsible
                  for inventory data recording, printing shipping labels, and
                  conducting routine stock counts specifically for Moteza.
                </p>
              </div>
            </BorderGlow>
          </div>

          <div className="mb-12 ml-8 relative group w-full">
            <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                <h3 className="text-2xl font-bold text-white tracking-wide">
                  Loan Sales Representative
                </h3>
                <p className="text-[#00bcff] font-medium mb-4">
                  PT. Nusantara Sakti Group (NSC Finance) Honda | 2021 (2
                  Months)
                </p>
                <p className="text-gray-300 leading-relaxed text-justify">
                  Gained early professional experience prior to starting my
                  undergraduate studies. Actively communicated with potential
                  clients to offer and process cash loan services using
                  motorcycle BPKB as collateral, which helped build foundational
                  interpersonal, negotiation, and target-oriented work skills.
                </p>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>

      <div className="w-full mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-gray-800 pb-4">
          Professional <span className="text-[#00bcff]">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BorderGlow
            glowColor="#00bcff"
            glowSize={100}
            duration={5}
            borderRadius={16}
          >
            <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
              <h3 className="text-xl font-bold text-[#00bcff] mb-4">
                Hard Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  • IT Support & Hardware (PC assembly, hardware tuning, and
                  comprehensive Windows troubleshooting.)
                </li>
                <li>
                  • OS Customization (Advanced Android modding [Root, Custom
                  ROMs, Module Development] and Xubuntu Linux UI tweaks)
                </li>

              </ul>
            </div>
          </BorderGlow>
          <BorderGlow
            glowColor="#00bcff"
            glowSize={100}
            duration={5}
            borderRadius={16}
          >
            <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
              <h3 className="text-xl font-bold text-[#00bcff] mb-4">
                Soft Skills
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Time Management</li>
                <li>• Teamwork & Collaboration</li>
                <li>• Thrives on Challenges</li>
                <li>• Fast Learner</li>
              </ul>
            </div>
          </BorderGlow>
          <BorderGlow
            glowColor="#00bcff"
            glowSize={100}
            duration={5}
            borderRadius={16}
          >
            <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
              <h3 className="text-xl font-bold text-[#00bcff] mb-4">
                Languages
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Indonesian (Native)</li>
                <li>• Basic English (Professional Working)</li>
              </ul>
            </div>
          </BorderGlow>
        </div>
      </div>

      <div className="w-full mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 border-b-2 border-gray-800 pb-4">
          Software & <span className="text-[#00bcff]">Tools</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-8">
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
                <h3 className="text-lg font-medium text-[#00bcff] mb-4">
                  Operating System
                </h3>
                <div className="flex flex-wrap gap-4">
                  <img
                    src="contents/Backgrounds/win11.webp"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Windows"
                  />
                  <img
                    src="contents/Backgrounds/Ubuntu.webp"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Ubuntu"
                  />
                  <img
                    src="contents/Backgrounds/xubuntu.webp"
                    className="h-12 bg-white/10 rounded-lg"
                    alt="Xubuntu"
                  />
                </div>
              </div>
            </BorderGlow>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
                <h3 className="text-lg font-medium text-[#00bcff] mb-4">
                  Computer Programming
                </h3>
                <div className="flex flex-wrap gap-4">
                  <img
                    src="contents/Backgrounds/vscode.svg"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="VSCode"
                  />
                  <img
                    src="contents/Backgrounds/xampp.png"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="XAMPP"
                  />
                  <img
                    src="contents/Backgrounds/laragon.svg"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Laragon"
                  />
                  <img
                    src="contents/Backgrounds/mysql.png"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="MySQL"
                  />
                  <img
                    src="contents/Backgrounds/mongodb.png"
                    className="h-12 bg-white/10 p-1 rounded-lg"
                    alt="MongoDB"
                  />
                  <img
                    src="contents/Backgrounds/bootstrap.webp"
                    className="h-12 bg-white/10 p-0 rounded-lg"
                    alt="Bootstrap"
                  />
                  <img
                    src="contents/Backgrounds/node.svg"
                    className="h-12 bg-white/10 p-1 rounded-lg"
                    alt="NodeJS"
                  />
                  <img
                    src="contents/Backgrounds/react.webp"
                    className="h-12 bg-white/10 p-0 rounded-lg"
                    alt="ReactJS"
                  />
                  <img
                    src="contents/Backgrounds/express.png"
                    className="h-12 bg-white/10 p-1 rounded-lg"
                    alt="ExpressJS"
                  />
                  <img
                    src="contents/Backgrounds/ejs.png"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="EJS"
                  />
                </div>
              </div>
            </BorderGlow>
          </div>
          <div className="flex flex-col gap-8">
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
                <h3 className="text-lg font-medium text-[#00bcff] mb-4">
                  Office
                </h3>
                <div className="flex flex-wrap gap-4">
                  <img
                    src="contents/Backgrounds/word.svg"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Word"
                  />
                  <img
                    src="contents/Backgrounds/excel.svg"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Excel"
                  />
                  <img
                    src="contents/Backgrounds/ppt.svg"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="PowerPoint"
                  />
                </div>
              </div>
            </BorderGlow>
            <BorderGlow
              glowColor="#00bcff"
              glowSize={100}
              duration={5}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm h-full w-full">
                <h3 className="text-lg font-medium text-[#00bcff] mb-4">
                  Design & Video
                </h3>
                <div className="flex flex-wrap gap-4">
                  <img
                    src="contents/Backgrounds/canva.png"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Canva"
                  />
                  <img
                    src="contents/Backgrounds/capcut.webp"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Capcut"
                  />
                  <img
                    src="contents/Backgrounds/figma.png"
                    className="h-12 bg-white/10 p-2 rounded-lg"
                    alt="Figma"
                  />
                </div>
              </div>
            </BorderGlow>
          </div>
        </div>
      </div>
    </div>
  );
}
