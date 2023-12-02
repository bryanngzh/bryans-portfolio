import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./pages/HeroPage/HeroPage";
import Projects from "./pages/Projects/Projects";
import Qualifications from "./pages/Qualifications/Qualifications";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <>
      <div className={styles.page}>
        <NavBar />
        <div className="mt-32 px-12 py-4 container mx-auto ">
          <HeroPage />
          <Qualifications />
          <Skills />
          <Projects />
          <div className="mb-32" />
        </div>
      </div>
    </>
  );
}

export default App;
