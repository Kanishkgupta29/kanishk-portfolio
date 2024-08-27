import styles from './Herostyles.module.css';
import HeroImg from '../../assets/kanishk image circle.jpg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import gitHubLight from '../../assets/github-light.svg';
import gitHubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Kanishk Resume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme}=useTheme();
    const themeIcon= theme=== 'light' ?sun : moon;
    const twitterIcon= theme=== 'light' ? twitterLight : twitterDark;
    const gitHubIcon= theme=== 'light' ? gitHubLight : gitHubDark;
    const linkedinIcon= theme=== 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
    
    <div className={styles.colorModeContainer}>
        <img 
            className={styles.hero} src={HeroImg} alt="Profile Picture of Kanishk" />
        
        <img 
            className={styles.colorMode}
            src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
    </div>
    <div className={styles.info}>
        <h1>Kanishk <br />Gupta</h1>
        <h2>Frontend & UI/UX Developer</h2>
        <span>
            <a href="https://x.com/kanishk_gupta29" target="_blank">
                <img src={twitterIcon} alt="Twitter icon" />
            </a>
            <a href="https://github.com/Kanishkgupta29" target="_blank">
                <img src={gitHubIcon} alt="GitHub icon" />
            </a>
            <a href="https://linkedin.com/in/kanishk-gupta-09738b26b" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>
            With a passion for developing modern React web apps for commercial businesses.</p>

        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
    </div>
  </section>
  );
}

export default Hero