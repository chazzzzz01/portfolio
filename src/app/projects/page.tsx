// src/app/projects/page.tsx
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'An amazing project that does wonderful things.',
    link: 'https://github.com/chazzzzz01/ARCS',
  },
  {
    title: 'Project Two',
    description: 'Another fantastic project with great features.',
    link: 'https://github.com/yourusername/project-two',
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section style={{ padding: '60px 20px' }}>
      <h2>My Projects</h2>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}
