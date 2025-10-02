
import { useState, useEffect } from "react";




const Navbar = () => {
    
    const [active, setActive] = useState(false);


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
                <a href="#beranda" className="text-lg font-medium">Beranda</a>
            </li>
            {/* Navbar Beranda */}

            {/* Navbar Tentang */}
            <li>
                <a href="#tentang" className="text-lg font-medium">Tentang</a>
            </li>
            {/* Navbar Tentang */}
            {/* Navbar Project */}
            <li>
                <a href="#project" className="text-lg font-medium">Project</a>
            </li> 
            {/* Navbar Project */}
            {/* kemampuan */}
            <li>
                <a href="#Skill" className="text-lg font-medium">Kemapuan</a>
            </li>
            {/* kemampuan */}
            {/*Kontak*/}
            <li>
                <a href="#kontak" className="text-lg font-medium">Kontak</a>
            </li> 
            {/* Kontak */}
        </ul>
    </div>
  )
}

export default Navbar