import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import HeroPage from "./pages/HeroPage/HeroPage";
import Qualifications from "./pages/Qualifications/Qualifications";

function App() {
  return (
    <>
      <div className={styles.page}>
        <NavBar />
        <div className="mt-32 px-12 py-4 container mx-auto">
          <HeroPage />
          <Qualifications />
        </div>
      </div>
    </>
  );
}

export default App;
