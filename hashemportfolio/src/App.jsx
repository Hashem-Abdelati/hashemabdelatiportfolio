import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className={styles.App}>
      <Landing />
    </div>
  );
}

export default App;
