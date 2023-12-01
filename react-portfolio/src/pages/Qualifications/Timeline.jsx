/* eslint-disable react/prop-types */
import Icon from "../../components/Icon";
import ExpCard from "./ExpCard";

const Timeline = ({ data }) => {
  return (
    <div className="mt-16">
      {data.map((exp, id) =>
        id % 2 == 0 ? (
          <div
            key={id}
            className="grid grid-cols-9 w-full h-full mb-5 md:mb-0 md:h-64 items-center"
          >
            <div className="md:col-span-4 col-span-full">
              <ExpCard exp={exp} />
            </div>
            <div className="col-span-1 w-full h-full flex justify-center items-center hidden md:flex">
              <div className="h-full w-1 bg-gradient-to-b from-red-500 via-pink-500 to-orange-500"></div>
              <div className="absolute">
                <Icon disabled={true} icon={exp.icon} />
              </div>
            </div>
            <div className="col-span-4"></div>
          </div>
        ) : (
          <div
            key={id}
            className="grid grid-cols-9 w-full h-full md:h-64 items-center"
          >
            <div className="col-span-4"></div>
            <div className="col-span-1 w-full h-full flex justify-center items-center hidden md:flex">
              <div className="h-full w-1 bg-gradient-to-t from-red-500 via-pink-500 to-orange-500"></div>
              <div className="absolute">
                <Icon disabled={true} icon={exp.icon} />
              </div>
            </div>
            <div className="md:col-span-4 col-span-full">
              <ExpCard exp={exp} />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Timeline;
