// eslint-disable-next-line react/prop-types
const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#f5f1f1] sm:text-xl rounded md:p-0 font-poppins hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
