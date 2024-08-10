import React from 'react';
import ProjectCard from './ProjectCard';
import styles from '../styles/ProjectCard.module.css';

 

const BodySection:React.FC = () => {

    const projects = [
        {
          title: 'Ruddit',
          description: 'A social media platform inspired by Reddit.',
          techStack: 'React, Next.js, Firebase',
          link: '#',
        },
        {
          title: 'Graphium',
          description: 'A tool for visualizing data with charts.',
          techStack: 'Next.js, Chart.js, MySQL, Prisma',
          link: '#',
        },
        {
            title: 'TraffiYOLO',
            description: 'A machine learning project for detecting traffic signs using YOLO.',
            techStack: 'Python, YOLO, OpenCV, TensorFlow',
            link: '#',
        },
      ];
    
    return (
    <div className="portfolio">
      <h2>Projects, I'm working on</h2>
      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index} 
            title={project.title} 
            description={project.description} 
            techStack={project.techStack} 
            link={project.link} 
          />
        ))}
      </div>
    </div>
    )
}
export default BodySection