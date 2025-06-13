'use client';

import ProjectCard from '../../components/ProjectCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  SiPython,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiPostgresql,
} from 'react-icons/si';

const projects = [
  {
    title: 'Reports and Complaints Management System',
    description:
      'The Reports and Complaints Management System is a web based system designed to help organizations handle reports and complaints more efficiently. Its main purpose is to automatically classify and route incoming reports or complaints to the right office within an organization, so that issues can be addressed faster and more effectively. Instead of manually sorting through reports and complaints, this system uses machine learning to analyze the content of each submission, determine its category, and send it to the appropriate offices that responsible for handling that type of issue. This helps improve accountability, transparency, and the overall resolution process by making sure nothing gets lost or delayed. In short, it simplifies and speeds up how organizations manage feedback, problems, or violations reported by users, employees, ensuring timely and proper responses.',
    link: '/projects/reports',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500',
  },
  {
    title: 'Healthcare Translator',
    description:
      'The Healthcare Translator is a simple web app made to help doctors and patients understand each other when they don’t speak the same language. In hospitals or clinics, language barriers can cause serious problems like wrong diagnoses or confusion about treatments. This tool solves that by quickly translating messages between healthcare workers and patients. It was built using Django for the backend, with Google Translate (through the deep translator library) doing the actual translations. The app also uses OpenAI’s text-to-speech feature, which lets users hear the translated message out loud this is especially helpful for people who can’t read well or don’t know how their language is written.',
    link: '/projects/translator',
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
          marginBottom: '16px',
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

      {/* Icons Section */}
      <div
        style={{
          display: 'flex',
          gap: '24px',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}
      >
        <SiPython size={36} color="#FFD43B" title="Python" />
        <SiHtml5 size={36} color="#E34F26" title="HTML5" />
        <SiTailwindcss size={36} color="#38BDF8" title="Tailwind CSS" />
        <SiJavascript size={36} color="#F7DF1E" title="JavaScript" />
        <SiPostgresql size={36} color="#336791" title="PostgreSQL" />
      </div>

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
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 20px rgba(123, 220, 181, 0.6)',
            }}
            style={{
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#fff',
              background:
                project.bgColor ===
                'bg-gradient-to-br from-cyan-500 to-blue-500'
                  ? 'linear-gradient(135deg, #06b6d4, #3b82f6)'
                  : 'linear-gradient(135deg, #8b5cf6, #4f46e5)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              minHeight: '280px',
              wordBreak: 'break-word',
              userSelect: 'none',
            }}
          >
            <Link
              href={`${project.link}/summary`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            </Link>

            <div style={{ marginTop: '16px', textAlign: 'right' }}>
              <Link href={project.link}>
                <span
                  style={{
                    color: '#fff',
                    backgroundColor: '#2563EB',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    transition: 'background-color 0.3s ease',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLSpanElement).style.backgroundColor =
                      '#1D4ED8';
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLSpanElement).style.backgroundColor =
                      '#2563EB';
                  }}
                >
                  Read More →
                </span>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
