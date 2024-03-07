import { FaGripLines } from "react-icons/fa";
import logo from "../assets/logo.png";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeNav = () => {
    if (windowWidth <= 768) {
      setNav(false);
    }
  };

  return (
    <nav className="bg-white absolute z-50 w-full">
      <div className="container flex justify-between bg-white items-center py-[1rem] relative">
        <img src={logo} alt="nav logo" className="h-[3rem]" />
        <div className={`absolute md:static md:top-auto md:z-10 md:bg-transparent top-0 left-0 w-full bg-white min-h-fit -z-10 ${nav ? 'translate-y-[0]' : 'translate-y-[-100%]'} transition-transform duration-300 rounded-lg md:translate-y-0 md:duration-0`}>
          <ul className="flex flex-col items-center md:justify-end pt-[8rem] pb-[2rem] md:flex-row md:p-[0] gap-[1rem]">
            <li onClick={closeNav}> Home </li>
            <li onClick={closeNav}> About </li>
            <li onClick={closeNav}> Gallery </li>
            <li onClick={closeNav}> Pricing </li>
            <Button onClick={closeNav}>Contact Us</Button>
          </ul>
        </div>

        <FaGripLines onClick={() => setNav(!nav)} className="relative z-50 cursor-pointer md:hidden" />
      </div>
    </nav>
  );
}