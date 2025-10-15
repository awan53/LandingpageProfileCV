
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate} from "react-router-dom";
import {Menu, X} from "lucide-react";




const Navbar = () => {
    
    const [active, setActive] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const {t, i18n} = useTranslation();
    const navigate = useNavigate();


    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) setActive(true);
      else setActive(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollNavigation = (path, anchorId) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
    setOpenMenu(false); // ✅ tutup menu setelah klik link
  };
  return (
    <nav
      className={`fixed top-0 w-full z-50 flex items-center justify-between px-5 transition-all duration-300 ${
        active ? "py-3 bg-zinc-900/90 backdrop-blur-md" : "py-5 bg-transparent"
      }`}
    >
      <h1 className="text-2xl font-bold text-white">Portofolio</h1>

      {/* tombol hamburger (muncul di mobile) */}
      <button
        className="md:hidden text-white"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* menu utama */}
      <ul
        className={`absolute md:static left-0 top-[70px] w-full md:w-auto 
          bg-zinc-900 md:bg-transparent text-center md:text-left 
          flex flex-col md:flex-row items-center md:items-center gap-6 
          transition-all duration-300 ease-in-out
          ${openMenu ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
        `}
      >
        <li>
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              handleScrollNavigation("/", "beranda");
            }}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            {t("nav.beranda")}
          </Link>
        </li>
        <li>
          <Link
            to="/#tentang"
            onClick={(e) => {
              e.preventDefault();
              handleScrollNavigation("/", "tentang");
            }}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            {t("nav.tentang")}
          </Link>
        </li>
        <li>
          <Link
            to="/#project"
            onClick={(e) => {
              e.preventDefault();
              handleScrollNavigation("/", "project");
            }}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            {t("nav.project")}
          </Link>
        </li>
        <li>
          <Link
            to="/#Skill"
            onClick={(e) => {
              e.preventDefault();
              handleScrollNavigation("/", "Skill");
            }}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            {t("nav.kemampuan")}
          </Link>
        </li>
        <li>
          <Link
            to="/#kontak-saya"
            onClick={(e) => {
              e.preventDefault();
              handleScrollNavigation("/", "kontak-saya");
            }}
            className="text-lg font-medium text-white hover:text-blue-400"
          >
            {t("nav.kontak")}
          </Link>
        </li>

        {/* Tombol ubah bahasa */}
        <li className="flex items-center gap-2 mt-2 md:mt-0">
          <button
            onClick={() => i18n.changeLanguage("id")}
            className={`px-3 py-1 rounded text-sm ${
              i18n.language === "id"
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            ID
          </button>
          <button
            onClick={() => i18n.changeLanguage("en")}
            className={`px-3 py-1 rounded text-sm ${
              i18n.language === "en"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            EN
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;