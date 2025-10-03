
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";




const Navbar = () => {
    
    const [active, setActive] = useState(false);
    const {t, i18n} = useTranslation();


    useEffect(() =>
        {
            const handleScroll = () => {if (window.scrollY > 150){
                setActive(true);
            } else{
                setActive(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return() => {
            window.removeEventListener("scroll", handleScroll);
        }
        });
  return (
    <div className={`fixed top-0 w-full z-50 flex items-center justify-between 
     px-5 gap-8   transition-all duration-300 
    ${active ? 'py-3 bg-zinc-900' : 'py-7 bg-transparent'} 
`}>
        <div className="logo"></div>
        <h1 className="text-3xl font-bold bg-white text-black p-1 md:bg-transparent md:text-white mr-15">Portofolio</h1>

        <ul className={`menu flex items-center sm:gap-15 gap-10 ml-50 transition-all duration-300
                        md:static md:translate-x-0 md:opacity-100 md:bg-transparent md:p-0 md:rounded-none 
                        fixed w-full z-40 left-1/2 -translate-x-1/2
            ${active ? "top-16 opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-b-2xl" : "-top-10 opacity-0"}`}>
                {/* Navbar Beranda */}
            <li>
                <a href="#beranda" className="text-lg font-medium">{t('nav.beranda')}</a>
            </li>
            {/* Navbar Beranda */}

            {/* Navbar Tentang */}
            <li>
                <a href="#tentang" className="text-lg font-medium">{t('nav.tentang')}</a>
            </li>
            {/* Navbar Tentang */}
            {/* Navbar Project */}
            <li>
                <a href="#project" className="text-lg font-medium">{t('nav.project')}</a>
            </li> 
            {/* Navbar Project */}
            {/* kemampuan */}
            <li>
                <a href="#Skill" className="text-lg font-medium">{t('nav.kemampuan')}</a>
            </li>
            {/* kemampuan */}
            {/*Kontak*/}
            <li>
                <a href="#kontak-saya" className="text-lg font-medium">{t('nav.kontak')}</a>
            </li> 
            {/* Kontak */}


            {/* button ubah bahasa */}
             <li className="flex items-center gap-2">
          <button
            onClick={() => i18n.changeLanguage("id")}
            className={`px-2 py-1 rounded ${
              i18n.language === "id"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            id
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-2 py-1 rounded ${
              i18n.language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            en
          </button>
        </li>
            {/* button ubah bahasa */}
        </ul>
    </div>
  )
}

export default Navbar