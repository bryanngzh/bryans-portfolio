/* eslint-disable react/prop-types */
import NavLink from "./NavLink";

const MenuOverlay = ({ navLinks }) => {
  return (
    <ul className="flex md:hidden flex-col py-4 items-center">
      {navLinks.map((navLink, index) => (
        <li key={index}>
          <NavLink title={navLink.title} href={navLink.href} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
