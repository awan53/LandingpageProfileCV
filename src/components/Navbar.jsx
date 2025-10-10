
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useNavigation } from "react-router-dom";




const Navbar = () => {
    
    const [active, setActive] = useState(false);
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();


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
        })
        
      const handleScrollNavigation = (path, anchorId) => {
        navigate(path);

        setTimeout(() => {
          const element = document.getElementById(anchorId);
          if(element){
            element.scrollIntoView({behavior: 'smooth', block:'start'});
          }
        }, 100);
      };
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
                <Link to="/" onClick={(e) => {e.preventDefault();
                  handleScrollNavigation('/', 'beranda');
                }} className="text-lg font-medium">{t('nav.beranda')}</Link>
            </li>
            {/* Navbar Beranda */}

            {/* Navbar Tentang */}
            <li>
                <Link to="/#tentang" onClick={(e) => {e.preventDefault(); handleScrollNavigation('/', 'tentang');}} className="text-lg font-medium">{t('nav.tentang')}</Link>
            </li>
            {/* Navbar Tentang */}
            {/* Navbar Project */}
            <li>
                 
                <Link to="/#project" onClick={(e) => {e.preventDefault(); handleScrollNavigation('/', 'project');}}className="text-lg font-medium">{t('nav.project')}</Link>
            </li> 
            {/* Navbar Project */}
            {/* kemampuan */}
            <li>
                
                <Link to="/#Skill" onClick={(e) => {e.preventDefault(); handleScrollNavigation('/', 'Skill');}} className="text-lg font-medium">{t('nav.kemampuan')}</Link>
            </li>
            {/* kemampuan */}
            {/*Kontak*/}
            <li>
                
                <Link to="/#kontak-saya" onClick={(e) => {e.preventDefault(); handleScrollNavigation('/', 'kontak-saya');}} className="text-lg font-medium">{t('nav.kontak')}</Link>
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