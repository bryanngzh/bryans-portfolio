/* eslint-disable react/prop-types */
import { BsEye } from "react-icons/bs";
import { PiCodeLight } from "react-icons/pi";
import Tag from "../../components/Tag";

const ProjectCard = ({ project }) => {
  const { title, desc, image, tags, gitUrl, previewUrl } = project;
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <a
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <PiCodeLight className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
          <a
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <BsEye className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </a>
        </div>
      </div>
      <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>
        <ul className="flex flex-row flex-wrap mt-3 gap-x-1 gap-y-3">
          {tags.map((tag, id) => (
            <Tag key={id} text={tag} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;
