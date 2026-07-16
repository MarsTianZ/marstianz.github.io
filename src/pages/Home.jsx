import ElectricBorder from "../components/ElectricBorder";
import BorderGlow from "../components/BorderGlow";
import BounceCards from "../components/BounceCard";
import fotoProfil from "../assets/profil.webp";

//export dari app.jsx
export default function Home({ setPreviewData }) {
  //Data bahan Home Page
  // Fungsi pintar buat bagi posisi foto biar selalu di tengah
  const getTransformStyles = (count) => {
    if (count === 1) return ["rotate(0deg)"];
    if (count === 2)
      return ["rotate(5deg) translate(-60px)", "rotate(-5deg) translate(60px)"];
    if (count === 3)
      return [
        "rotate(5deg) translate(-100px)",
        "rotate(0deg)",
        "rotate(-5deg) translate(100px)",
      ];
    if (count === 4)
      return [
        "rotate(5deg) translate(-120px)",
        "rotate(0deg) translate(-40px)",
        "rotate(-5deg) translate(40px)",
        "rotate(5deg) translate(120px)",
      ];
    return [
      "rotate(5deg) translate(-120px)",
      "rotate(0deg) translate(-60px)",
      "rotate(-5deg)",
      "rotate(5deg) translate(60px)",
      "rotate(-5deg) translate(120px)",
    ];
  };

  // 1. KUMPULAN FOTO Bounce Cards
  const docHima = [
    "contents/Home/HIMA/1739207337743.webp",
    "contents/Home/HIMA/1739211771230.webp",
    "contents/Home/HIMA/Logo-Kabinet-HMSI-2023.webp",
    "contents/Home/HIMA/WebinarProteksiData.webp",
    "contents/Home/HIMA/Foto-Perpisahan-HMSI.webp",
  ];

  const docUkpd = [
    "contents/Home/PDD_UKPD/Feed-Paskah-UKPD-2023.webp",
    "contents/Home/PDD_UKPD/mulmed.webp",
    "contents/Home/PDD_UKPD/perkenalan video.webm",
    "contents/Home/PDD_UKPD/Poster-Ibadah-Paskah-UKPD-2023.webp",
    "contents/Home/PDD_UKPD/Poster-IG-Story-Ibadah-Paskah-UKPD-2023.webp",
  ];

  const docGereja = [
    "contents/Home/PDD_GPDI/poster-retret.webp",
    "contents/Home/PDD_GPDI/FeedlamaFull.webp",
    "contents/Home/PDD_GPDI/feedBaruFull.webp",
    "contents/Home/PDD_GPDI/Rekap-Remaja-25-Mei-2025.mp4",
  ];

  // Daftar antrian Organisasi
  const myOrganizations = [
    {
      title:
        "Information Systems Student Association - STIKOM Dinamika University",
      role: "Staff of Media, Communication, and Informatics Division",
      year: "Jan 2023 - Jan 2024",
      images: docHima,
    },
    {
      title: "Prayer Fellowship Spiritual Activities Unit",
      role: "Publications, Decoration/Design, and Documentation Staff",
      year: "2024",
      images: docUkpd,
    },
    {
      title:
        "Defender Teen “Yesus Harapan Pasti” Pentecostal Church in Indonesia",
      role: "Publications, Decoration/Design, and Documentation Staff",
      year: "2023 - 2025",
      images: docGereja,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-10 md:mt-16 w-full max-w-7xl mx-auto px-4 animate-fade-in">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-auto mb-12">
        <div className="shrink-0 relative">
          <ElectricBorder
            color="#00bcff"
            speed={0.5}
            chaos={0.12}
            borderRadius={130}
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden bg-black relative z-10">
              <img
                src={fotoProfil}
                alt="Foto Marsa"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </ElectricBorder>
        </div>

        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight">
            Hi, I'm <span className="text-[#00bcff]"> Marsa</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-100 font-medium tracking-wide mt-2">
            Freelance IT Support Specialist | UI/UX Designer | Front End Web
            Enthusiast
          </h2>
        </div>
      </div>

      <div className="w-full">
        <BorderGlow
          glowColor="#00bcff"
          glowSize={150}
          duration={5}
          borderRadius={16}
        >
          <div className="w-full bg-gray-900/50 p-6 md:p-10 rounded-2xl animate-fade-in backdrop-blur-sm relative z-10 text-justify">
            <p className="text-gray-100 leading-relaxed text-xl font-medium ">
              Hi! I’m an Information Systems student, and I’m just waiting for
              my graduation in August 2026. My interests in technology are quite
              broad, but if you ask me where I feel most at home, there are two
              areas: UI/UX design and the technical aspects of operating systems
              that other people usually don’t want to mess with.
              <br />
              <br />
              Professionally, I focus more on UI/UX and web development, usually
              through a design thinking approach. I used this method for my
              thesis, designing the UI/UX for a web-based fertilizer
              distribution app. Previously, I also built a prototype for a
              Javanese language chat app, and I built this personal portfolio
              myself using GitHub Pages.
              <br />
              <br />
              Outside of school, I work as a freelance IT support specialist.
              Building PCs, fixing Windows errors, and customizing the Xubuntu
              interface—these have all become routines I enjoy. What others
              might find a bit unusual is my Android expertise, since I’ve
              delved deeply into rooting and system modifications—even going so
              far as to create my own root module, the SELinux Enforcer Module,
              for custom Android ROMs where SELinux is set to “Permissive” by
              default.
              <br />
              <br />
              I was also active in the BEM Media Kominfo, where I learned about
              teamwork and visual communication, and I interned at CV. Karya
              Cipta Membangun to gain hands-on experience in website-based
              digital marketing.
              <br />
              <br />
              It’s this combination of design skills, a fairly deep
              understanding of systems, and practical experience that I bring to
              the table when I want to dive into serious technology projects.
            </p>
          </div>
        </BorderGlow>

        <div className="flex flex-col items-center mt-20 w-full max-w-6xl mx-auto">
          <div className="w-full mb-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 border-b-2 border-gray-800 pb-4 text-center w-full">
              Organizational <span className="text-[#00bcff]">Experience</span>
            </h2>

            <div className="relative border-l-2 border-[#00bcff]/30 ml-4 md:ml-0">
              {myOrganizations.map((org, index) => (
                <div key={index} className="mb-24 ml-8 relative group w-auto">
                  <span className="absolute -left-[41px] top-6 flex items-center justify-center w-5 h-5 rounded-full bg-black border-2 border-[#00bcff] ring-4 ring-[#00bcff]/20 group-hover:ring-[#00bcff]/50 group-hover:bg-[#00bcff] transition-all duration-300 z-10"></span>
                  <BorderGlow
                    glowColor="#00bcff"
                    glowSize={100}
                    duration={5}
                    borderRadius={16}
                  >
                    <div className="bg-gray-900/50 p-6 rounded-2xl backdrop-blur-sm w-full">
                      <h3 className="text-2xl font-bold text-white tracking-wide">
                        {org.title}
                      </h3>
                      <p className="text-[#00bcff] font-medium mb-1">
                        {org.role}
                      </p>
                      <p className="text-gray-400 text-sm">{org.year}</p>
                    </div>
                  </BorderGlow>

                  <div className="mt-10 flex flex-col items-center w-full">
                    <h2 className="text-xl md:text-2xl font-bold text-white border-b-2 border-gray-800 pb-3 mb-8 text-center max-w-md w-full">
                      Documentation
                    </h2>
                    <div className="w-full flex justify-center scale-75 md:scale-100 origin-top">
                      <BounceCards
                        className="custom-bounceCards"
                        images={org.images}
                        onImageClick={(imgUrl) =>
                          setPreviewData({
                            images: org.images,
                            index: org.images.indexOf(imgUrl),
                          })
                        }
                        containerWidth={400}
                        containerHeight={250}
                        animationDelay={1}
                        animationStagger={0.08}
                        easeType="elastic.out(1, 0.5)"
                        transformStyles={getTransformStyles(org.images.length)}
                        enableHover={true}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto mb-10 animate-fade-in px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-10 text-center border-b-2 border-gray-800 pb-4">
          Let's <span className="text-[#00bcff]">Connect</span>
        </h2>
        <BorderGlow
          glowColor="#00bcff"
          glowSize={120}
          duration={6}
          borderRadius={20}
        >
          <div className="bg-gray-900/60 p-8 md:p-10 rounded-[20px] backdrop-blur-md w-full flex flex-col">
            <p className="text-gray-300 text-center mb-8 text-lg">
              Feel free to reach out for collaborations or just a friendly chat!
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10">
              <a
                href="mailto:marsa.kristian66@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-[#00bcff]/20 border border-gray-700 hover:border-[#00bcff] transition-all duration-300 rounded-full text-white font-medium group"
              >
                <span className="text-[#00bcff] group-hover:scale-110 transition-transform">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/gmail-icon.svg"
                    className="h-5 bg-white/0 rounded-lg"
                    alt="GMAIL"
                  />
                </span>
                Gmail
              </a>
              <a
                href="https://linkedin.com/in/marsakristian"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-[#00bcff]/20 border border-gray-700 hover:border-[#00bcff] transition-all duration-300 rounded-full text-white font-medium group"
              >
                <span className="text-[#00bcff] group-hover:scale-110 transition-transform">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/linkedin-app-icon.svg"
                    className="h-5 bg-white/0 rounded-lg"
                    alt="LINKEDIN"
                  />
                </span>
                LinkedIn
              </a>
              <a
                href="https://instagram.com/im_marstianz"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-[#00bcff]/20 border border-gray-700 hover:border-[#00bcff] transition-all duration-300 rounded-full text-white font-medium group"
              >
                <span className="text-[#00bcff] group-hover:scale-110 transition-transform">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.svg"
                    className="h-5 bg-white/0 rounded-lg"
                    alt="INSTAGRAM"
                  />
                </span>
                Instagram
              </a>
              <a
                href="https://marstianz.github.io/portfolio-lama"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-[#00bcff]/20 border border-gray-700 hover:border-[#00bcff] transition-all duration-300 rounded-full text-white font-medium group"
              >
                <span className="text-[#00bcff] group-hover:scale-110 transition-transform">
                  <img
                    src="contents/Home/portfolio.png"
                    className="h-5 bg-white/0 rounded-lg"
                    alt="old-portfolio"
                  />
                </span>
                My Old Portfolio Website
              </a>
            </div>
            <div className="w-full relative rounded-xl overflow-hidden border-2 border-gray-800 group hover:border-[#00bcff]/50 transition-colors duration-500">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none z-10 mix-blend-overlay"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20960571404!2d112.64136423521367!3d-7.275612015096898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20Surabaya%20City%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1718360000000!5m2!1sen!2sid"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-30 contrast-125 opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
            </div>
          </div>
        </BorderGlow>
      </div>
    </div>
  );
}
