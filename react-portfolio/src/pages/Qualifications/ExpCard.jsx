import { PiBuildingsDuotone } from "react-icons/pi";
import { RiCalendar2Line } from "react-icons/ri";

/* eslint-disable react/prop-types */
const ExpCard = ({ exp }) => {
  const { title, company, desc, duration } = exp;
  return (
    <div className="h-full w-full rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-0.5">
      <div className="h-full w-full bg-[#181818] back p-3">
        <h1 className="text-xl font-bold mb-2 text-white text-left">{title}</h1>
        <div className="flex space-x-4">
          <p className="text-white text-left mb-2 flex items-center">
            <PiBuildingsDuotone className="mr-2" /> {company}
          </p>
          <p className="text-white text-left mb-2 flex items-center">
            <RiCalendar2Line className="mr-2" /> {duration}
          </p>
        </div>

        <p className="text-white text-left mb-2">{desc}</p>
      </div>
    </div>
  );
};

export default ExpCard;
