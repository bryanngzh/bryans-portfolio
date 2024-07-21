import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import Button from "../../components/Button";
import Timeline from "./Timeline";

const WorkExpData = [
  {
    logo: "./company/STENG_LOGO.png",
    title: "Software Engineer Intern",
    company: "ST Engineering",
    desc: [
      "Mission & Software Services, Application Modernization.",
      "Developed a micro front-end sense-making web application utilizing Vite Module Federation, Vue.js & Pinia for a multi-tenant environment.",
      "Engineered robust RESTful APIs using Springboot to facilitate communication between microservices.",
      "Deployed an internal documentation tool using Docker & Kubernetes, enhancing operational efficiency by 30%.",
    ],
    duration: "05/2024 - 08/2024",
    icon: <MdWork />,
    tags: [
      "Vue.js",
      "Springboot",
      "Docker",
      "Kubernetes",
      "Microsoft SQL Server",
    ],
    type: "Work",
  },
  {
    logo: "./company/MILLI_LOGO.png",
    title: "Software Engineer Intern",
    company: "Millipede",
    desc: [
      "Designed and implemented a dynamic report generation tool with customizable templates driven by user inputs, using Node.js, PDFKit and React, reducing manual configuration time by 60%.",
      "Developed Millipede's mobile application using React Native and admin portal using React, ensuring alignment with Figma prototype designs for enhanced user experiences.",
      "Engineered and optimized RESTful APIs and back-end services using Node.js, Express.js, and TSOA for both projects in sprints, achieving substantial performance improvements.",
    ],
    duration: "05/2023 - 11/2023",
    icon: <MdWork />,
    tags: [
      "React.js",
      "react-native",
      "Node.js",
      "Express.js",
      "Firebase",
      "TypeScript",
      "GCP",
    ],
    type: "Work",
  },
];

const EduExpData = [
  {
    logo: "./company/NUS_LOGO.png",
    title: "Bachelor of Computing, Computer Science (Hons)",
    company: "National University of Singapore",
    desc: [
      "Took programming modules inclusive of methodology and data structures classes, with a focus on AI/ML, Software Engineering and Cybersecurity courses.",
    ],
    duration: "08/2021 - 05/2024",
    icon: <FaGraduationCap />,
    tags: ["Software Engineering", "AI/ML", "Cybersecurity"],
    type: "Education",
  },
];

const Qualifications = () => {
  const [type, setType] = useState("work");

  // header anmiation
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    } else {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <section className="mt-40 pt-40" id="qualifications">
      <div className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
        {type == "work" ? (
          // adding the key here forces component re-renders every time the type state changes
          <Timeline key={type} data={WorkExpData} />
        ) : (
          <Timeline key={type} data={EduExpData} />
        )}
      </div>
    </section>
  );
};

export default Qualifications;
