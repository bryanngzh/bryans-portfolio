/* eslint-disable react/prop-types */
import { MdVerified } from "react-icons/md";

const SkillCard = ({ skill }) => {
  return (
    <div className="col-span-3 h-full">
      <div className="w-full rounded-md bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 p-0.5">
        <div className="h-full w-full bg-[#181818] back p-3">
          <p className="text-white text-left mb-2 flex items-center">
            <MdVerified className="mr-2" /> {skill}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
