import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="C/C++"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="UI/UX"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="MySQL"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="ReactJS"/>
            <SkillList src={checkMarkIcon} skill="Adobe Photoshop"/>
            <SkillList src={checkMarkIcon} skill="Adobe firefly "/>
            <SkillList src={checkMarkIcon} skill="Adobe XD"/>
            <SkillList src={checkMarkIcon} skill="Boot Strap"/>
            <SkillList src={checkMarkIcon} skill="Spring Boot"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Eclipse"/>
            <SkillList src={checkMarkIcon} skill="IntelliJ"/>
            <SkillList src={checkMarkIcon} skill="Figma"/>
            <SkillList src={checkMarkIcon} skill="Android Studio"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Data Structures"/>
            <SkillList src={checkMarkIcon} skill="DBMS"/>
        </div>


    </section>
  )
}

export default Skills