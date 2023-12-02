/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Icon from "../../components/Icon";
import ExpCard from "./ExpCard";

const AnimatedExpCard = ({ exp, isVisible, isEven }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isEven ? "-100vw" : "100vw" });
    }
  }, [isVisible, controls, isEven]);

  return (
    <motion.div
      className={
        isEven ? "md:col-span-4 col-span-full" : "md:col-span-4 col-span-full"
      }
      initial={{ opacity: 0, x: isEven ? "-100vw" : "100vw" }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <ExpCard exp={exp} />
    </motion.div>
  );
};

const AnimatedIcon = ({ icon, isVisible, isEven }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: isEven ? "-100vw" : "100vw" });
    }
  }, [isVisible, controls, isEven]);

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? "-100vw" : "100vw" }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Icon disabled={true} icon={icon} />
    </motion.div>
  );
};

const Timeline = ({ data }) => {
  const { ref, inView } = useInView({ threshold: 0.01 });

  return (
    <ul className="mt-10 md:mt-16">
      {data.map((exp, id) => (
        <li
          ref={ref}
          key={id}
          className="grid grid-cols-9 w-full h-full mb-5 md:mb-0 md:h-64 items-center"
        >
          {id % 2 === 0 ? (
            <>
              <AnimatedExpCard exp={exp} isVisible={inView} isEven={true} />
              <div className="col-span-1 w-full h-full flex justify-center items-center hidden md:flex">
                <div className="h-full w-1 bg-gradient-to-b from-red-500 via-pink-500 to-orange-500"></div>
                <div className="absolute">
                  <AnimatedIcon
                    icon={exp.icon}
                    isVisible={inView}
                    isEven={true}
                  />
                </div>
              </div>
              <div className="col-span-4"></div>
            </>
          ) : (
            <>
              <div className="col-span-4"></div>
              <div className="col-span-1 w-full h-full flex justify-center items-center hidden md:flex">
                <div className="h-full w-1 bg-gradient-to-t from-red-500 via-pink-500 to-orange-500"></div>
                <div className="absolute">
                  <AnimatedIcon
                    icon={exp.icon}
                    isVisible={inView}
                    isEven={false}
                  />
                </div>
              </div>
              <AnimatedExpCard exp={exp} isVisible={inView} isEven={false} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
