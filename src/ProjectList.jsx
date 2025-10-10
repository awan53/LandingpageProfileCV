import { useState } from 'react'
import DataImage from './data';
import projects from './projects';
import Navbar from './components/Navbar';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';



function App(){
  const [activeTab, setActiveTab] = useState("profesional");
  const {t, i18n} = useTranslation();
  
  return (
    <>
    <div className="container mx-auto px-4"> 
            {/* section beranda */}
    <section id="beranda" className="min-h-screen flex items-center pt-24">
  <div className="hero grid md:grid-cols-2 items-center xl:gap-10 gap-6 w-full">
    <div>
      <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
        <img src={DataImage.HeroImage2} alt="Hero Image" className="w-10 rounded-md" />
        <q>{t('section1.qoutes')} 😊😊</q>
      </div>
      <h1 className="text-5xl/tight font-bold mb-6">{t('section1.greeting')}</h1>
      <p className="text-base/loose mb-6 opacity-50">
        {t('section1.desc')}
      </p>

      <div className="flex items-center sm:gap-4 gap-2"> 
        <a
          href="/v2.1 New CV Gunawan 2025 v.1.2.1 (Revisi).pdf"
          download="v2.1 New CV Gunawan 2025 v.1.2.1 (Revisi).pdf"
          className="inline-flex items-center gap-2 bg-red-700 px-6 py-3 rounded-2xl hover:bg-red-500 text-white font-medium"
        >
          Download CV <i className="ri-download-line"></i>
        </a>
        <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 ">
          Liat Project <i className="ri-arrow-down-line"></i>
        </a>
      </div>
    </div>

    <div className="flex justify-center">
      <img
        src={DataImage.HeroImage}
        alt="Hero Image"
        className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full"
      />
    </div>
  </div>
</section>
{/* section beranda */}
    

{/* section about */}
<section id="tentang" style={{ scrollMarginTop: '88px' }}>
    <div className="tentang mt-32 py-10">
      <div className="w-2/3 mx-auto p-7 bg-zinc-800 rounded-lg">
      <h2 className="text-center font-bold mb-10 text-2xl">{t('section2.About')}</h2>
        <p className="text-base/loose mb-10 ">{t('section2.desc')}</p>
      </div>
    </div>   
</section>
     
{/* section about */}


{/* section project */}
<section id="project" className="py-20 text-white" style={{ scrollMarginTop: '88px' }}>
 <div className="container mx-auto px-4 text-center py-10">
  <h2 className="text-3xl font-bold mb-10">{t('section3.Project')}</h2>

  {/* State tab - BAGIAN INI SUDAH BENAR */}
  <div className="flex justify-center space-x-6 mb-8">
    <button
      onClick={() => setActiveTab("profesional")}
      className={`px-6 py-2 rounded-lg ${activeTab === "profesional" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"}`}
    >
      {t('section3.Project-kerja')}
    </button>
    <button
      onClick={() => setActiveTab("pribadi")}
      className={`px-6 py-2 rounded-lg ${activeTab === "pribadi" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"}`}
    >
      {t('section3.Project-Pribadi')}
    </button>
  </div>

  {/* Konten project pakai map - BAGIAN INI YANG DIUBAH TOTAL */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects[activeTab].map((project) => ( // PENTING: Gunakan 'project' sebagai variabel iterasi
      <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-bold mb-2">
          {/* Fallback ke project.title jika t(titleKey) gagal (walaupun di profesional tidak ada title) */}
          {t(project.titleKey) || project.title} 
        </h3>
        <p className="text-gray-300 mb-4">{t(project.descKey) || project.desc}</p>
        
        {/* LOGIKA TAUTAN DINAMIS */}
        {activeTab === "profesional" ? (
          // Proyek PROFESIONAL: Link Detail Internal
          <Link
            to={`/project/${project.id}`}
            className="text-red-400 hover:underline"
          >
            {t("section3.more-detail")}
          </Link>
        ) : (
          // Proyek PRIBADI: Link Eksternal ke GitHub
          <a
            href={project.link} // Menggunakan properti 'link' dari data pribadi
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline inline-flex items-center" 
          >
            {t("section3.view-on-github") || "Lihat di GitHub"} 
            
            {/* Ikon GitHub SVG */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3c0 0-1.01-.39-3.47 1.24A10.68 10.68 0 0 0 12 5.64c-2.45 0-4.46.66-5.59 1.45-2.46-1.63-3.47-1.24-3.47-1.24a5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 2 12.87v3.87" />
            </svg>
          </a>
        )}
      </div>
    ))}
  </div>

</div>
</section>

{/* section project */}
{/* section kemampuan */}
<section id="Skill" className="py-20 text-white" style={{ scrollMarginTop: '88px' }}>
  <div className="container mx-auto px-4 text-center">
    {/* Judul */}
    <h2 className="text-3xl font-bold mb-10">Kemampuan</h2>

    {/* Grid Skill (contoh kalau mau daftar skill) */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
      <div className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold">JavaScript</h3>
      </div>
      <div className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold">React.js</h3>
      </div>
      <div className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold">Tailwind CSS</h3>
      </div>
      <div className="p-6 bg-zinc-800 rounded-lg shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-semibold">Spring Boot</h3>
      </div>
    </div>
  </div>
</section>
{/* section kemampuan */}

{/* Kontak saya  */}
<section id="kontak-saya" className="py-20 text-white" style={{ scrollMarginTop: '88px' }}>
      <div className="container mx-auto px-4 text-center">
    {/* Judul */}
    <h2 className="text-3xl font-bold mb-10">kontak saya</h2>
    <p className="mb-6"> Hubungi saya melalui Whatshapp atau email di bawah  ini</p>

    {/* Grid Skill (contoh kalau mau daftar skill) */}
    <div className="flex justify-center gap-6">
      <a
        href="https://wa.me/6289698731582" // ganti dengan nomor kamu
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 bg-green-600 rounded-lg hover:bg-green-700 flex items-center gap-2"
      >
        <span>📱 WhatsApp</span>
      </a>
      
      
    </div>
  </div>

</section>

{/* Kontak saya  */}
    </div>



    </>
    



  );
  
}

export default App;




