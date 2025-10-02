import { useState } from 'react'
import DataImage from './data';
import projects from './projects';
import Navbar from './components/Navbar';



function App(){
  const [activeTab, setActiveTab] = useState("profesional");

  
  return (
    <>
     <Navbar setActiveTab={setActiveTab} />
    <section id="beranda">
      <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-10 gap-6 grid-cols-1 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
          <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
          <q>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, temporibus? 😊😊</q>
        </div>
        <h1 className="text-5xl/tight font-bold mb-6">Hai, saya Zura</h1>
        <p className="text-base/loose mb-6 opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem doloremque quod atque amet temporibus a perspiciatis officiis enim quasi possimus modi, magnam facere soluta doloribus, sequi exercitationem deleniti illum architecto voluptatum natus aut? Debitis quisquam, alias cum vitae earum aut. Eos laborum possimus consequuntur. Similique, dolorum quaerat vitae nisi iusto corporis facere? Perspici</p>

        <div className="flex items-center sm:gap-4 gap-2"> 
          <a href="/v2.1 New CV Gunawan 2025 v.1.2.1 (Revisi).pdf"
          download="v2.1 New CV Gunawan 2025 v.1.2.1 (Revisi).pdf" className="bg-red-700 p-4 rounded-2xl hover:bg-red-500 ">
            Download CV <i className="ri-download-line"></i>
          </a>
          <a href="#project" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-500 ">
            Liat Project <i className="ri-arrow-down-line"></i>
          </a>
        </div>
      </div>
      <img src={DataImage.HeroImage} alt="Hero Image" className="w-full ml-auto col-span-full md:col-span-1"/>
    </div>
    </section>
    

{/* section about */}
<section id="tentang" style={{ scrollMarginTop: '88px' }}>
    <div className="tentang mt-32 py-10">
      <div className="w-2/3 mx-auto p-7 bg-zinc-800 rounded-lg">
      <h2 className="text-center font-bold mb-10 text-2xl">Tentang</h2>
        <p className="text-base/loose mb-10 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae unde esse temporibus laudantium alias consequuntur similique aut eaque, rerum, perspiciatis provident quod qui, quis id accusamus corporis eum iure adipisci! Corrupti, esse labore hic voluptatem illo quibusdam dicta nam dolor quisquam blanditiis magni odit voluptatibus a error accusantium veniam quo eos cum voluptates, eligendi tenetur officiis earum, temporibus voluptas. Suscipit quas assumenda laborum omnis officiis, sed cum iure debitis id in possimus consequuntur? Delectus ut dolore, eaque nostrum obcaecati error incidunt possimus cupiditate vel labore dolores hic quo placeat exercitationem earum, aut totam distinctio voluptatibus ex explicabo suscipit! Ipsa.</p>
      </div>
    </div>   
</section>
     
{/* section about */}


{/* section project */}
<section id="project" className="py-20 text-white" style={{ scrollMarginTop: '88px' }}>
  <div className="container mx-auto px-4 text-center py-10">
    <h2 className="text-3xl font-bold mb-10">Project</h2>

    {/* State tab */}
    <div className="flex justify-center space-x-6 mb-8">
      <button
        onClick={() => setActiveTab("profesional")}
        className={`px-6 py-2 rounded-lg ${activeTab === "profesional" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"}`}
      >
        Project Profesional
      </button>
      <button
        onClick={() => setActiveTab("pribadi")}
        className={`px-6 py-2 rounded-lg ${activeTab === "pribadi" ? "bg-red-600" : "bg-gray-700 hover:bg-gray-600"}`}
      >
        Project Pribadi
      </button>
    </div>

    {/* Konten project pakai map */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects[activeTab].map((project) => (
        <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
          <p className="text-gray-300 mb-4">{project.desc}</p>
          <a href={project.link} className="text-red-400 hover:underline">
            Lihat Detail →
          </a>
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


{/* Kontak saya  */}

    </>
    



  );
  
}

export default App;




