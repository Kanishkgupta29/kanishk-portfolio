import styles from './ProjectsStyles.module.css'
import hackinplace from '../../assets/hack-in place.jpg';
import connectsphere from '../../assets/connectsphere.jpg';
import ecommerce from '../../assets/ecommerce.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        
        <h1 className="sectionTitle">Projects</h1>
        
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={hackinplace} 
                h3="Hack-in Place"
                p="Management System"
            /> 

            <ProjectCard 
                src={connectsphere} 
                h3="ConnectSphere"
                p="Social Media App"
            />   

            <ProjectCard 
                src={ecommerce}
                h3="E-Commerce Web App"
                p="Front-end of eCommerce"
            />  
        </div>
    </section>
  )
}

export default Projects