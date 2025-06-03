import styles from './Landing.module.css';
import Navbar from '../Navbar/Navbar';

function Landing() {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.notebookPage}>
          <Navbar />
          <div className={styles.headerSection}>
            <h1>Hi, I'm <span className={styles.highlight}>Hashem</span></h1>
            <p className={styles.subhead}>
              I'm an aspiring software engineer from Amman, Jordan. I'm interested in cyber security,
              as well as web, app and game development.
            </p>
          </div>
  
          <div className={styles.sidePhoto}>
            <img src="/public/images/hashem2.jpeg" alt="Hashem in Costa Rica" className={styles.profileImage} />
            <p className={styles.caption}> Me in Costa Rica 2023</p>
          </div>
  
          <div className={styles.actions}>
            <button className={styles.button}>Say Hello!</button>
            <button className={styles.button}>My Resume</button>
          </div>
  
          <div className={styles.bioContent}>
            <p>
              I'm a junior studying at George Washington University. I'm currently working as an Intern
              at LigaData.
            </p>
            <p>
              Some technologies I like to work with:<br />
              Java, Python, C, HTML & CSS, SQL
            </p>
            <p>
              Outside of work, my hobbies include playing video games, going camping, and hanging out
              with friends. Want to know more? <a href="#about">Go to about me</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
export default Landing;



