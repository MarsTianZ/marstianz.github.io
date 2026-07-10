import { useState } from "react";
import ElectricBorder from "../components/ElectricBorder";

// export dari app.jsx

export default function Certificates() {
  // Data bahan untuk Certificate Page

  // STATE UNTUK CERTIFICATES
  const [previewCert, setPreviewCert] = useState(null);

  const myCertificates = [
    {
      title: "“The Ultimate Survival Kits for Fresh Graduate”",
      issuer: "QuBisa",
      image: "contents/Certificates/QuBisa.webp",
    },
    {
      title: "“Membangun Karir di Bidang Cyber Security”",
      issuer:
        "LUG x KLAS Network Security Webinar | Linux User Group (LUG) STIKOM Dinamika University",
      image: "contents/Certificates/lug.webp",
    },
    {
      title: "“Urgensi Penegakan HAM dalam Mewujudkan Keadilan di Indonesia”",
      issuer:
        "National Webinar on Human Rights Enforcement | Student Council of Dinamika University",
      image: "contents/Certificates/urgensi_HAM.webp",
    },
    {
      title: "“Pelatihan Web Development Fundamental & Skill Leadership”",
      issuer: "IMSII JOGOSTAFF | IMSII",
      image: "contents/Certificates/imsii.webp",
    },
    {
      title: "Edupact IELTS Webinar",
      issuer: "CERTIFICATE OF APPRECIATION | Edupact",
      image: "contents/Certificates/EDUPACT.webp",
    },
    {
      title: "“Rahasia Menulis Skripsi Secara Cepat dan Efektif”",
      issuer: "Thesis Workshop | EDUCIETY",
      image: "contents/Certificates/EDUPACT.webp",
    },
    {
      title: "“Canva vs Figma What's the Right Choice?”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2023",
      image: "contents/Certificates/canvaVSfigma.webp",
    },
    {
      title: "“Mengelola Data Mining Lebih Mudah Menggunakan Aplikasi Orange”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2023",
      image: "contents/Certificates/dataMining.webp",
    },
    {
      title:
        "“Jurus Jitu Mengantisipasi Tipuan dengan Modus Social Engineering”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2023",
      image: "contents/Certificates/jurus_jitu.webp",
    },
    {
      title:
        "“Optimizing Software Quality: Strategies, Techniques, and Best Practices in Testing”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2024",
      image: "contents/Certificates/softwareQuality.webp",
    },
    {
      title: "“Langkah Awal Menuju Sukses di Dunia Bisnis”",
      issuer: "Campus Webinar | Webinar Series Inspiring Young Minds",
      image: "contents/Certificates/langkahSukses.webp",
    },
    {
      title:
        "“Membangun Kerangka Kerja Manajemen Proyek yang Efektif: Tips dan Strategi Terbaik”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2024",
      image: "contents/Certificates/kerangkaKerja.webp",
    },
    {
      title: "“Pengenalan Logika Pemrograman yang Menyenangkan”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2024",
      image: "contents/Certificates/logikaPemrograman.webp",
    },
    {
      title: "“Thinking Before Coding”",
      issuer:
        "Campus Webinar | Information System National Webinar Series 2024",
      image: "contents/Certificates/beforeCoding.webp",
    },
    {
      title: "“Tongkrongan Warga RW: Ngobrolin Fitur Update Rumahweb 2024”",
      issuer: "CERTIFICATE OF APPRECIATION | Rumahweb Indonesia",
      image: "contents/Certificates/RUMAHWEB.webp",
    },
    {
      title: "“Menginspirasi Anak Bangsa Guna Menemukan Seni Menulis”",
      issuer: "Certificate of Participation | National Webinar",
      image: "contents/Certificates/jelajahKata.webp",
    },
    {
      title:
        "“Meningkatkan Pengelolaan Sumber Daya Manusia yang Berkualitas dan Cerdas”",
      issuer: "Certificate of Participation | National Webinar",
      image: "contents/Certificates/webinarSDM.webp",
    },
    {
      title: "“Sing the Faith”",
      issuer: "Certificate of Participation | Christian Singing Contest (CSC)",
      image: "contents/Certificates/csc.webp",
    },
    {
      title:
        "“Penerapan Digital Accounting pada Dunia Bisnis di Era Revolusi Industri 4.0”",
      issuer: "Campus Webinar | Webinar Digital Accounting",
      image: "contents/Certificates/digitalAccounting.webp",
    },
    {
      title: "“Aku Bisa Menjadi Leader”",
      issuer: "Campus Webinar | Student Executive Board of Dinamika University",
      image: "contents/Certificates/jadiLeader.webp",
    },
    {
      title: "“Anti Bokek”",
      issuer: "Campus Webinar | Student Executive Board of Dinamika University",
      image: "contents/Certificates/antiBokek.webp",
    },
  ];

  // Body halaman
  return (
    <div className="flex flex-col items-center mt-10 md:mt-16 w-full max-w-7xl mx-auto px-4 md:px-8 animate-fade-in pb-24">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 border-b-2 border-gray-800 pb-4 text-center w-full">
        My <span className="text-[#00bcff]">Certificates</span>
      </h2>
      <div className="items-center grid grid-cols-1 md:grid-cols-3 gap-10 w-full ">
        {myCertificates.map((cert, index) => (
          <div
            key={index}
            className="w-full cursor-pointer group transform-gpu will-change-transform"
            onClick={() => setPreviewCert(cert.image)}
          >
            <ElectricBorder
              color="#00bcff"
              speed={0.5}
              chaos={0.12}
              borderRadius={16}
            >
              <div className="bg-gray-900/50 p-5 rounded-2xl backdrop-blur-sm h-full w-full flex flex-col">
                <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden mb-5 border border-gray-800 relative">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className=" w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-[#00bcff] text-black font-bold py-2 px-4 rounded-lg shadow-lg">
                      Click to Preview
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-[#00bcff] font-medium text-sm">
                  {cert.issuer}
                </p>
              </div>
            </ElectricBorder>
          </div>
        ))}
      </div>

      {previewCert && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setPreviewCert(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white text-5xl font-bold hover:text-[#00bcff] transition-colors"
            onClick={() => setPreviewCert(null)}
          >
            ×
          </button>
          <img
            src={previewCert}
            alt="Certificate Full Preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg border-2 border-[#00bcff] shadow-[0_0_40px_rgba(0,188,255,0.4)] relative z-[10001]"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
