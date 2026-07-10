import AutoSlider from "../components/AutoSlider";
import BorderGlow from "../components/BorderGlow";

//export dari app.jsx
export default function Project({ setPreviewData }) {
  //Data bahan untuk Project Page
  const myProjects = [
    {
      title: "Undergraduate Thesis",
      category: "UI/UX Design (PWA)",
      images: [
        "contents/Projects/Skripsi/Prototype Transaksi Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Transaksi Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype Profile Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Profile Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype Pesan Pupuk Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Manajemen Stok Pupuk Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype Manajemen Mitra Kios Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype Login Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Lacak Pengiriman Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Lacak Pengiriman Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype History, Laporan, Rekap Admin Distributor.webp",
        "contents/Projects/Skripsi/Prototype Dashboard Mitra Kios.webp",
        "contents/Projects/Skripsi/Prototype Catalog Mitra Kios.webp",
        "contents/Projects/Skripsi/maze_screenshot_interaction (24).webp",
        "contents/Projects/Skripsi/maze_screenshot_interaction (21).webp",
        "contents/Projects/Skripsi/maze_screenshot_interaction (15).webp",
        "contents/Projects/Skripsi/2.webp",
        "contents/Projects/Skripsi/1.webp",
      ],
      link: "https://repository.dinamika.ac.id/id/eprint/8411/",
    },
    {
      title: "Digital Marketing Internship",
      category: "No Code Web Development & SEO",
      images: [
        "contents/Projects/magang/web.webp",
        "contents/Projects/magang/config-wordpress.webp",
        "contents/Projects/magang/Form.webp",
        "contents/Projects/magang/google-business.webp",
        "contents/Projects/magang/hasil-google-analytic.webp",
        "contents/Projects/magang/Bahan-Mobile-UI.webp",
      ],
      link: "https://repository.dinamika.ac.id/id/eprint/8196/",
    },
    {
      title: "My Old Portfolio Website",
      category: "Portfolio",
      images: ["contents/Projects/portfolio-lama/portfolio-lama.png"],
    },
    {
      title: "Javanese Conversation App",
      category: "UI/UX Prototype",
      images: [],
      embedUrl: "https://www.youtube.com/embed/4jlcvoiCkz0",
    },
    {
      title: "Multi-Router Topology",
      category: "Network Implementation & Config",
      images: [""],
      embedUrl: "https://www.youtube.com/embed/9cWwWnLqZVs",
    },
    {
      title: "Final Practicum Assignment: Database Programming (Semester 221)",
      category: "Implementation Database Design",
      images: [""],
      embedUrl: "https://www.youtube.com/embed/ygj9-BhFxQI",
    },
    {
      title: "SELinux Enforcer Module",
      category: "Android Rooting & Modding",
      images: [
        "contents/Projects/moduleSelinuxEnforcing/moduleGithub.webp",
        "contents/Projects/moduleSelinuxEnforcing/module-selinux-KSU.webp",
      ],
      link: "https://github.com/MarsTianZ/SELinux-Enforcer-Module",
    },
    {
      title: "Personal Logo Design",
      category: "Graphic Design",
      images: [
        "contents/Projects/logo/logoBrandDark.webp",
        "contents/Projects/logo/logoBrandPLight.webp",
      ],
    },
    {
      title: "AM Food Poster",
      category: "Graphic Design",
      images: [
        "contents/Projects/amFood/logo-AM-Food.webp",
        "contents/Projects/amFood/Poster-AM-Food.webp",
      ],
    },
    {
      title: "AI Personal Caricature",
      category: "AI Prompting & Art",
      images: ["contents/Projects/karikatur/Karikatur JobDesk MarsTianZ .webp"],
    },
  ];

  // Body halaman
  return (
    <div className="flex flex-col items-center mt-10 md:mt-16 w-full max-w-7xl mx-auto px-4 md:px-8 animate-fade-in pb-24">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 border-b-2 border-gray-800 pb-4 text-center w-full">
        My <span className="text-[#00bcff]">Projects</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {myProjects.map((proj, index) => {
          // Logika cek apakah item terakhir sendirian di baris baru (total project ganjil)
          const isLastItem = index === myProjects.length - 1;
          const isOddTotal = myProjects.length % 2 !== 0;

          return (
            <BorderGlow
              key={index}
              glowColor="#00bcff"
              glowSize={100}
              duration={6}
              borderRadius={16}
              // Kalau ganjil, item terakhir dipaksa rata tengah di layar tablet/PC (md:)
              className={
                isLastItem && isOddTotal
                  ? "md:col-span-2 md:w-1/2 md:justify-self-center"
                  : ""
              }
            >
              <div className="bg-gray-900/50 p-5 rounded-2xl backdrop-blur-sm h-full w-full flex flex-col group">
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-5 border border-gray-800 relative">
                  {/* LOGIKA CEK: Punya embedUrl atau nggak? */}
                  {proj.embedUrl ? (
                    // Kalau ADA embedUrl, tampilin YouTube
                    <iframe
                      className="w-full h-full object-cover"
                      src={proj.embedUrl}
                      title={proj.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <AutoSlider
                      images={proj.images}
                      interval={3000}
                      onPreviewClick={(idx) =>
                        setPreviewData({
                          images: proj.images,
                          index: idx,
                        })
                      }
                      projectLink={proj.link}
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {proj.title}
                </h3>
                <p className="text-[#00bcff] font-medium">{proj.category}</p>
              </div>
            </BorderGlow>
          );
        })}
      </div>
    </div>
  );
}
