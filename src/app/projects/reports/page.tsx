'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// All projects grouped by category
const allProjects = {
  Informant: [
    {
      title: 'Home',
      description: 'A system for managing reports efficiently.',
      image: '/images/front.png',
    },
    {
      title: 'Informant Registration',
      description: 'Language translation for medical settings.',
      image: '/images/registration.png',
    },
    {
      title: 'Informant Registration 2',
      description: 'Organize your daily tasks smartly.',
      image: '/images/registration1.png',
    },
    {
      title: 'Informant Logging In',
      description: 'Shop everything online with ease.',
      image: '/images/login.png',
    },
    {
      title: 'Informant Profile',
      description: 'Real-time messaging platform.',
      image: '/images/profile.png',
    },
    {
      title: 'Lodging Reports and Complaints',
      description: 'Personal website with animation.',
      image: '/images/lodge.png',
    },
    {
      title: 'Informant Status',
      description: 'Track your expenses and income.',
      image: '/images/status.png',
    },
    {
      title: 'Informant History',
      description: 'Create blog posts using AI.',
      image: '/images/history.png',
    },
    {
      title: 'Informant Message',
      description: 'Get live weather updates.',
      image: '/images/message.png',
    },
  ],
  Administrator: [
    {
      title: 'Home',
      description: 'A system for managing reports efficiently.',
      image: '/images/front.png',
    },
    {
      title: 'Admin Dashboard',
      description: 'Monitor reports and manage users.',
      image: '/images/admin_dashboard.png',
    },
  ],
  Offices: [
    {
      title: 'Office Dashboard',
      description: 'Handle complaints per office type.',
      image: '/images/office_dashboard.png',
    },
    {
      title: 'Office Report View',
      description: 'Detailed view of assigned reports.',
      image: '/images/office_report.png',
    },
  ],
};

export default function Projects() {
  const [selectedRole, setSelectedRole] = useState<'Informant' | 'Administrator' | 'Offices'>('Informant');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const currentProjects = allProjects[selectedRole];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '80px 20px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Dropdown for selecting user role */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ position: 'relative', marginBottom: '48px', textAlign: 'center' }}
      >
        <h2
          onClick={() => setDropdownOpen((prev) => !prev)}
          style={{
            fontSize: '3rem',
            fontWeight: 700,
            borderBottom: '3px solid #2563EB',
            paddingBottom: '10px',
            cursor: 'pointer',
          }}
        >
          {selectedRole}
        </h2>
        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              backgroundColor: '#1F2937',
              borderRadius: '8px',
              overflow: 'hidden',
              marginTop: '8px',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            {['Informant', 'Administrator', 'Offices'].map((role) => (
              <div
                key={role}
                onClick={() => {
                  setSelectedRole(role as 'Informant' | 'Administrator' | 'Offices');
                  setDropdownOpen(false);
                }}
                style={{
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: selectedRole === role ? '#2563EB' : 'transparent',
                  color: selectedRole === role ? 'white' : '#D1D5DB',
                  transition: 'background 0.3s',
                }}
              >
                {role}
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Project cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(255px, 1fr))',
          gap: '32px',
          width: '100%',
          maxWidth: '1200px',
          justifyContent: 'center',
        }}
      >
        {currentProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            style={{
              backgroundColor: '#1F2937',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedImage(project.image)}
          >
            <div style={{ position: 'relative', width: '100%', height: '180px' }}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 255px"
              />
            </div>
            <div style={{ padding: '12px 16px' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '6px' }}>{project.title}</h3>
              <p style={{ fontSize: '0.95rem', color: '#D1D5DB' }}>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Image View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '90vw',
              height: '80vh',
              background: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <Image
              src={selectedImage}
              alt="Full View"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 900px) 90vw, 900px"
            />
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'white',
                border: 'none',
                borderRadius: '50%',
                padding: '5px 10px',
                fontSize: '1.2rem',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </motion.section>
  );
}
