import styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        
        <h1 className="sectionTitle">Projects</h1>
        
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={viberr} 
                link="https://gitHub.com/"
                h3="Viberr"
                p="streaming App"
            /> 

            <ProjectCard 
                src={freshBurger} 
                link="https://gitHub.com/"
                h3="Fresh Burger"
                p="Veg Burger Restaurant"
            />   

            <ProjectCard 
                src={hipster} 
                link="https://gitHub.com/"
                h3="Hipster"
                p="Glasses Shop"
            />  
        </div>
    </section>
  )
}

export default Projects