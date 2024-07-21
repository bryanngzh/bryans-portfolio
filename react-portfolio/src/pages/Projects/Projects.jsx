import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "Study.io Website",
    desc: "An all-in-one platform where students are able to plan their timetable, organize tasks, set reminders and take notes. The website also includes a Pomodoro Timer to help boost students productivity while studying.",
    image: "/projects/studyio.png",
    tags: ["React.js", "MongoDB", "Express.js", "Node.js"],
    gitUrl: "https://github.com/bryanngzh/Study.io",
    previewUrl: "https://study-io.herokuapp.com/",
  },
  {
    title: "Study.io Telegram Bot",
    desc: "Built to complement Study.io's website, this telegram bot sends daily reminders to students for upcoming events 3 days prior. Students are also able to view their daily and weekly schedule using this telegram bot.",
    image: "/projects/studyiotele.png",
    tags: ["Python", "MongoDB", "Heroku"],
    gitUrl: "https://github.com/bryanngzh/Study.io",
    previewUrl: "https://t.me/studyio_reminder_bot",
  },
  {
    title: "Fitness Tracker",
    desc: "Mobile Application to keep track of workouts using React Native, Node.js, Express.js and Firebase. Built this to kickstart my fitness journey and keep track of my runs and gym workouts for the month.",
    image: "/projects/fitnesstracker.png",
    tags: ["React Native", "Node.js", "Express.js", "Firebase"],
    gitUrl: "https://github.com/bryanngzh/fitness-tracker",
  },
  {
    title: "ProfNUS",
    desc: "Desktop application built using JavaFX for professors to manage classes. This application is optimised for professors that prefer command-line interface( CLI) commands to graphical-user interface (GUI).",
    image: "/projects/profnus.png",
    tags: ["JavaFX", "JUnit", "Java"],
    gitUrl: "https://github.com/bryanngzh/ProfNUS",
  },
  {
    title: "Personal Chatbot",
    desc: "Desktop personalized chat bot application built using JavaFX that helps you keep track of your tasks, events and deadlines! It comes included with a GUI to help you visualize the tasks better.",
    image: "/projects/chatbot.png",
    tags: ["JavaFX", "JUnit", "Java"],
    gitUrl: "https://github.com/bryanngzh/Chatbot",
  },
  {
    title: "Automated Testing Engine",
    desc: "Automated testing engine for the NUS Intelligent Tutoring System, using metamorphic testing techniques. Discovered over 20 bugs with a 100% accuracy rate, improving the system’s reliability.",
    image: "/projects/testingengine.png",
    tags: ["Python"],
    gitUrl:
      "https://github.com/cs3213-fse-2024/automated-testing-engine-group-16",
  },
];

const Projects = () => {
  // header animation
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    } else {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  // projects animation
  const controls = useAnimation();
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView2) {
      controls.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: "-100vh" });
    }
  }, [inView2, controls]);

  return (
    <section className="pt-40 mt-40" id="projects">
      <div ref={ref} className="mt-4 md:mt-0 text-center flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={animation}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl text-white font-poppins font-semibold mb-2">
            Projects
          </h1>
          <p className="text-1xl text-gray-400 font-poppins mb-2">
            Blood Sweat and Tears
          </p>
        </motion.div>
        <div className="mt-8 md:mt-16">
          <ul ref={ref2} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project, id) => (
              <motion.li
                initial={{ opacity: 0, x: "-100vh" }}
                animate={controls}
                transition={{ duration: 0.5, delay: id * 0.1 }}
                key={id}
              >
                <ProjectCard key={id} project={project} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
