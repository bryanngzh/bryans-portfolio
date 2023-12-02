/* eslint-disable react/prop-types */
const Icon = ({ icon, disabled, link }) => {
  return (
    <a href={link}>
      <button
        disabled={disabled}
        className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 hover:bg-slate-200 text-white flex items-center justify-center"
      >
        {icon}
      </button>
    </a>
  );
};

Icon.defaultProps = {
  disabled: false,
};

export default Icon;
