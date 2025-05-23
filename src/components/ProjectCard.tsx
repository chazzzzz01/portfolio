// src/components/ProjectCard.tsx
import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      View Project
    </a>
  </div>
);

export default ProjectCard;
