import { TypeAnimation } from "react-type-animation";
import heroImage from "../../assets/hero/hero-image.png";
import styles from "./Hero.module.css";

const HeroPage = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className={styles.header}>
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-orange-500">
              Hello, I'm
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
                "Penultimate CS @ NUS",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className={styles.body}>
            I enjoy creating digital solutions as a software engineer and I'm
            always looking for new opportunities to learn and develop new
            skills.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={heroImage}
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;