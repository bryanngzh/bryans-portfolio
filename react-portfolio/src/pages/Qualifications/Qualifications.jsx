import { useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Button from "../../components/Button";
import Timeline from "./Timeline";

const WorkExpData = [
  {
    title: "Software Engineer Intern",
    company: "Millipede PTE LTD",
    desc: "Defined and built new features for Millipede Android/iOS app in a modular and testable manner. Assisted in implementing REST APIs and user interfaces. Wrote advanced reports generation feature with customizable parameters. ",
    duration: "05/2023 - 11/2023",
    icon: <MdWork />,
    tags: [
      "React.js",
      "react-native",
      "Node.js",
      "Express.js",
      "Firebase",
      "TypeScript",
      "Google Cloud Services",
    ],
  },
  {
    title: "Software Engineer",
    company: "Study.io",
    desc: "Designed and built a all-in-one study platform for NUS students as part of CP2106. Attained highest level of achievement, Artemis.",
    duration: "05/2022 - 08/2022",
    icon: <FaGraduationCap />,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Heroku",
    ],
  },
];

const EduExpData = [
  {
    title: "Bachelor of Computing, Computer Science (Hons)",
    company: "National University of Singapore",
    desc: "Took programming modules inclusive of methodology and data structures classes, with a focus on AI/ML, Software Engineering and Cybersecurity courses.",
    duration: "05/2023 - Present",
    icon: <FaGraduationCap />,
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Heroku",
    ],
  },
];

const Qualifications = () => {
  const [type, setType] = useState("work");

  return (
    <section className="pt-40" id="qualifications">
      <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <h1 className="text-4xl text-white font-poppins font-semibold mb-2">
          Qualifications
        </h1>
        <p className="text-1xl text-gray-400 font-poppins mb-2">
          My personal journey
        </p>
        <div className="mt-4 flex space-x-4 items-center justify-center">
          <Button
            text={"Work"}
            icon={<MdWork />}
            onClick={() => setType("work")}
          />
          <Button
            text={"Education"}
            icon={<FaGraduationCap />}
            onClick={() => setType("education")}
          />
        </div>
        {type == "work" ? (
          <Timeline data={WorkExpData} />
        ) : (
          <Timeline data={EduExpData} />
        )}
      </div>
    </section>
  );
};

export default Qualifications;
