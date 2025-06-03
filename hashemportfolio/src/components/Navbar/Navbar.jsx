import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.tabList}>
        <li><a href="#about" className={`${styles.tab} ${styles.about}`}>About</a></li>
        <li><a href="#projects" className={`${styles.tab} ${styles.projects}`}>Projects</a></li>
        <li><a href="#experience" className={`${styles.tab} ${styles.experience}`}>Experience</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;