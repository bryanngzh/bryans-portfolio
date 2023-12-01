import { useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import MenuOverlay from "./MenuOverlay";
import NavLink from "./NavLink";

const navLinks = [
  {
    title: "Qualifications",
    href: "#qualifications",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 px-4">
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <a href="/" className="text-2xl text-white font-poppins font-semibold">
          bryan.dev{"</>"}
        </a>
        <div className="mobile-menu block md:hidden">
          {isOpen ? (
            <button
              onClick={() => isOpen(setIsOpen(false))}
              className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <RxCross2 />
            </button>
          ) : (
            <button
              onClick={() => isOpen(setIsOpen(true))}
              className="flex items-center px-3 py-3 border rounded border-slate-200 text-slate-200 hover:text-white"
            >
              <RxHamburgerMenu />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8">
            {navLinks.map((navLink, index) => (
              <li key={index}>
                <NavLink title={navLink.title} href={navLink.href} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isOpen && <MenuOverlay navLinks={navLinks} />}
    </nav>
  );
};

export default NavBar;
