import styles from "./App.module.css";
import HeroPage from "./pages/HeroPage/HeroPage";

function App() {
  return (
    <>
      <div className={styles.page}>
        <div className="px-12 py-4 container mx-auto">
          <HeroPage />
        </div>
      </div>
    </>
  );
}

export default App;
