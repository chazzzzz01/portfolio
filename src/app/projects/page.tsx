'use client';

import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Reports and Complaints Management System',
    description: 'An amazing project that does wonderful things.',
    link: 'https://github.com/chazzzzz01/ARCS',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  },
  {
    title: 'Helathcare Translator',
    description: 'Another fantastic project with great features.',
    link: 'https://github.com/yourusername/project-two',
    bgColor: 'bg-gradient-to-br from-purple-500 to-indigo-500',
  },
];

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        backgroundColor: 'hsl(240, 25.3%, 19.4%)',
        color: 'white',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '48px',
          borderBottom: '3px solid #007BFF',
          paddingBottom: '10px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          color: '#fff',
          userSelect: 'none',
        }}
      >
        My Projects
      </motion.h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'center',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(123, 220, 181, 0.6)' }}
            style={{
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              flex: '1 1 350px',
              color: '#fff',
              background:
                project.bgColor === 'bg-gradient-to-br from-cyan-500 to-blue-500'
                  ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                  : 'linear-gradient(135deg, #8b5cf6, #4f46e5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              userSelect: 'none',
            }}
            onClick={() => window.open(project.link, '_blank')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                window.open(project.link, '_blank');
              }
            }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
