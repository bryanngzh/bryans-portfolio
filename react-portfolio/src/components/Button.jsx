/* eslint-disable react/prop-types */
const Button = ({ text, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white flex items-center justify-center text-xs md:text-base"
    >
      {icon && <div className="mr-2">{icon}</div>}
      {text}
    </button>
  );
};

export default Button;
