import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaCodeBranch, FaNetworkWired, FaTeamspeak } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button";
import SkillCard from "./SkillCard";

const language = [
  "C",
  "Java",
  "Javascript",
  "Typescript",
  "Python",
  "SQL",
  "Bash",
  "HTML",
  "CSS",
];

const web = [
  "React.js",
  "react-native",
  "Vue.js",
  "Node.js",
  "Express.js",
  "Springboot",
  "MongoDB",
  "Firestore",
  "PostgreSQL",
  "Microsoft SQL Server",
  "Figma",
  "Postman",
];

const devOps = [
  "Docker",
  "Kubernetes",
  "Containerd",
  "Google Cloud Platform",
  "Heroku",
  "Netlify",
  "Git",
  "Github",
];

const others = ["numpy", "scikit-learn", "pandas"];

const AnimatedSkillCards = ({ type, isVisible }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 20 });
    }
  }, [isVisible, controls]);

  const skills =
    type == "web"
      ? web
      : type == "language"
      ? language
      : type == "dev"
      ? devOps
      : others;

  return skills.map((skill, id) => (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      className="col-span-3 h-full"
      key={id}
    >
      <SkillCard skill={skill} />
    </motion.li>
  ));
};

const Skills = () => {
  const [skill, setSkill] = useState("web");

  // header animation
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    } else {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <section className="mt-80 pt-40" id="skills">
      <div ref={ref} className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl text-white font-poppins font-semibold mb-2">
            Skills
          </h1>
          <p className="text-1xl text-gray-400 font-poppins mb-2">
            My craft and specialties
          </p>

          <div className="mt-4 flex space-x-2 md:space-x-4 items-center justify-center">
            <Button
              text={"WebDev"}
              icon={<MdOutlineWebAsset />}
              onClick={() => setSkill("web")}
            />
            <Button
              text={"DevOps"}
              icon={<FaCodeBranch />}
              onClick={() => setSkill("dev")}
            />
            <Button
              text={"Language"}
              icon={<FaTeamspeak />}
              onClick={() => setSkill("language")}
            />
            <Button
              text={"Others"}
              icon={<FaNetworkWired />}
              onClick={() => setSkill("others")}
            />
          </div>
        </motion.div>
        <ul
          ref={ref2}
          className="grid grid-cols-3 md:grid-cols-9 gap-4 w-5/8 h-full mt-10 md:mt-16 mx-auto"
        >
          <AnimatedSkillCards key={skill} type={skill} isVisible={inView2} />
        </ul>
      </div>
    </section>
  );
};

export default Skills;
