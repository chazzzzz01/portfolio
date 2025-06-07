import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  // Remove link prop or keep it but do NOT render <a> here
}

const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div className={styles.card}>
    <h3>{title}</h3>
    <p>{description}</p>
    {/* Remove the empty <a> to avoid nested anchors */}
  </div>
);

export default ProjectCard;
