import { PiBuildingsDuotone } from "react-icons/pi";
import { RiCalendar2Line } from "react-icons/ri";
import Tag from "../../components/Tag";

/* eslint-disable react/prop-types */
const ExpCard = ({ exp }) => {
  const { title, company, logo, desc, duration, tags, type } = exp;
  return (
    <div className="h-full w-full rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-0.5">
      <div className="h-full w-full bg-[#181818] back p-3">
        <div
          className={type == "Education" ? "flex space-x-4 items-center" : ""}
        >
          <img
            src={logo}
            alt={`${company} logo`}
            className={type == "Education" ? "h-12 w-12 mb-4" : "h-8 mb-4"}
          />
          <h1 className="text-xl font-bold mb-2 text-white text-left">
            {title}
          </h1>
        </div>
        <div className="flex space-x-4">
          <p className="text-white text-left mb-2 flex items-center">
            <PiBuildingsDuotone className="mr-2" /> {company}
          </p>
          <p className="text-white text-left mb-2 flex items-center">
            <RiCalendar2Line className="mr-2" /> {duration}
          </p>
        </div>
        <ul className="flex flex-row flex-wrap mb-2 gap-x-1 gap-y-3">
          {tags && tags.map((tag, id) => <Tag key={id} text={tag} />)}
        </ul>
        <ul className="list-disc list-inside text-gray-200 text-left mb-2 ml-2">
          {desc.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpCard;
