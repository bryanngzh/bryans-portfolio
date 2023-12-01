import { useState } from "react";
import { FaNetworkWired, FaTeamspeak } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import Button from "../../components/Button";
import SkillCard from "./SkillCard";

const web = [
  "React.js",
  "react-native",
  "Node.js",
  "Express.js",
  "Firestore",
  "MongoDB",
  "Google Cloud Services",
  "Heroku",
  "Netlify",
  "Git",
  "Figma",
  "Postman",
];

const language = ["Javascript", "Typescript", "Java", "Python", "C", "Bash"];

const others = ["GDB", "scikit-learn"];

const Skills = () => {
  const [skill, setSkill] = useState("web");

  return (
    <section className="pt-40" id="skills">
      <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <h1 className="text-4xl text-white font-poppins font-semibold mb-2">
          Skills
        </h1>
        <p className="text-1xl text-gray-400 font-poppins mb-2">
          My craft and specialties
        </p>
        <div className="mt-4 flex space-x-4 items-center justify-center">
          <Button
            text={"WebDev"}
            icon={<MdOutlineWebAsset />}
            onClick={() => setSkill("web")}
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
        <div className="grid grid-cols-3 md:grid-cols-9 gap-4 w-5/8 h-full mt-16 mx-auto">
          {skill === "web"
            ? web.map((skill, id) => <SkillCard key={id} skill={skill} />)
            : skill === "language"
            ? language.map((skill, id) => <SkillCard key={id} skill={skill} />)
            : others.map((skill, id) => <SkillCard key={id} skill={skill} />)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
