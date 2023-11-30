import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Experiences from "./pages/Experiences/Experiences";
import HeroPage from "./pages/HeroPage/HeroPage";

function App() {
  return (
    <>
      <div className={styles.page}>
        <NavBar />
        <div className="mt-32 px-12 py-4 container mx-auto">
          <HeroPage />
          <Experiences />
        </div>
      </div>
    </>
  );
}

export default App;
