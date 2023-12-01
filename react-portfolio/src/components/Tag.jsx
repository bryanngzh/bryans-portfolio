/* eslint-disable react/prop-types */
const Tag = ({ text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-2 py-1 rounded-xl bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 hover:bg-slate-200 text-white flex items-center justify-center text-xs"
    >
      {text}
    </div>
  );
};

export default Tag;
