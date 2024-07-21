import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { useInView } from "react-intersection-observer";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../../assets/hero/hero-image.png";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import styles from "./Hero.module.css";

const HeroPage = () => {
  // anmiation
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const handleDownload = () => {
    const pdfPath = "/bryanngzh_cv.pdf";
    window.open(pdfPath, "_blank");
  };

  useEffect(() => {
    if (inView) {
      animation.start({ opacity: 1 });
    } else {
      animation.start({ opacity: 0 });
    }
  }, [inView, animation]);

  return (
    <section>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={animation}
        transition={{ duration: 1 }}
        className="grid grid-cols-1 sm:grid-cols-12"
      >
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className={styles.header}>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
              Hello👋, I&#39;m
            </div>
            <div>Bryan</div>
            <TypeAnimation
              sequence={[
                "Software Engineer",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Final Year CS @ NUS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.body}>
            I enjoy creating digital solutions as a software engineer and
            I&#39;m always looking for new opportunities to learn and develop
            new skills.
          </p>
          <div className="flex flex-row items-center justify-between">
            <Button onClick={handleDownload} text={"Download CV"} />
            <div className="flex flex-row space-x-4">
              <Icon
                icon={<RxGithubLogo />}
                link={"https://github.com/bryanngzh"}
              />
              <Icon
                icon={<RxLinkedinLogo />}
                link={"https://www.linkedin.com/in/bryanngzh/"}
              />
            </div>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <img
              src={heroImage}
              alt="hero image"
              className="rounded-full absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroPage;
