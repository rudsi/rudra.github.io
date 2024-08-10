import React from 'react';
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, techStack, link }) => {
  return (
    <div className={styles.projectCard}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech Stack:</strong> {techStack}</p>
      <a href={link}>Learn More</a>
    </div>
  );
};

export default ProjectCard;
