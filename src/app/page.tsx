'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiClipboard, FiMessageCircle } from 'react-icons/fi';
import Image from 'next/image';

// Updated dark background (Borderless style)
const darkBackground = {
      backgroundColor: 'hsl(240, 25.30%, 19.40%)',

};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  

  return (
    <>
      {/* Intro Section */}
      <section
        style={{
          ...darkBackground,
          minHeight: '100vh',
          padding: '60px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '150px',
          flexWrap: 'wrap',
          textAlign: 'center',
          
          color: '#FFFFFF',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{ maxWidth: 500 }}
        >
          <motion.h1
            style={{
              marginBottom: '20px',
              fontWeight: 700,
              letterSpacing: '-1px',
              textAlign: 'center',
              fontSize: 'min(10vw, 4rem)',
            }}
          >
            <span className="typing-text">
              Hello, I&apos;m Chazel G. Honrejas!
            </span>
          </motion.h1>

          <motion.p style={{ fontSize: '1.5rem', fontWeight: 300, marginBottom: '20px', color: '#3B82F6' }}>
            A passionate and curious developer who&apos;s always eager to learn more and push my skills to the next level.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/Honrejas, Chazel .pdf', '_blank')}
            style={{
              background: 'linear-gradient(to right, #4F46E5, #6366F1)',
              color: '#fff',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            }}
          >
            View CV/Resume
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: 350,
            height: 350,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 30px rgba(0,0,0,0.6)',
            border: '3px solid #9333EA',
          }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
          <Image src="/chazel.png" alt="My image" width={255} height={350} />
        </motion.div>
      </section>

      {/* About Section */}
      <section
        style={{
          ...darkBackground,
          minHeight: '100vh',
          padding: '80px 20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          // borderBottom: '10px solid #1f1f1f',
          color: '#fff',
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}
        >
          About
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            maxWidth: 800,
            margin: '0 auto',
            fontSize: '1.2rem',
            fontWeight: 400,
            lineHeight: 1.8,
            color: '#A1A1AA',
          }}
        >
         I&apos;m a tech enthusiast who loves trying everything from building web apps to experimenting with new ideas, especially in web development. 
         I&apos;m always eager to learn and explore how things work. Outside of tech, I enjoy painting, sketching, playing games and making music.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginTop: '30px' }}
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '14px 28px',
                fontSize: '16px',
                background: 'linear-gradient(to right, #4F46E5, #6366F1)',
                color: '#fff',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              About Me
            </motion.button>
          </Link>
        </motion.div>
      </section>

{/* Projects Section */}
<section
  style={{
    ...darkBackground,
    minHeight: '100vh',
    padding: '80px 20px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#fff',
    overflowY: 'auto',
  }}
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ fontSize: '2.5rem', marginBottom: '30px', fontWeight: 700 }}
  >
    Projects
  </motion.h2>

  {/* Scrollable container that fades in when in view */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    style={{
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch',
      paddingBottom: '10px',
      scrollBehavior: 'smooth',
    }}
  >
    {/* Flex wrapper for horizontal scroll and center */}
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        padding: '10px',
        width: 'max-content',
        margin: '0 auto',
      }}
    >
      {[
        {
          title: 'Reports and Complaints Management System',
          description:
            'Uses machine learning to classify and route reports to the right office, helping organizations respond faster and solve issues more efficiently.',
          icon: <FiClipboard size={40} color="#34D399" style={{ margin: '16px 0' }} />,
        },
        {
          title: 'Healthcare Translator',
          description:
            'A translation tool designed for healthcare settings to bridge language gaps between professionals and patients.',
          icon: <FiMessageCircle size={40} color="#60A5FA" style={{ margin: '16px 0' }} />,
        },
      ].map((project, index) => (
        <Link
          key={index}
          href="/projects"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            scrollSnapAlign: 'start',
            flex: '0 0 auto',
            minWidth: '300px',
          }}
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{
              background: 'rgba(129, 30, 241, 0.2)',
              borderRadius: '20px',
              padding: '24px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 0 20px rgba(129, 30, 241, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '300px',
              minHeight: '340px',
              height: 'auto',
              boxSizing: 'border-box',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>{project.title}</h3>
            {project.icon}
            <p
              style={{
                fontSize: '1rem',
                color: '#E5E5E5',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: 6,
                WebkitBoxOrient: 'vertical',
                marginTop: '10px',
              }}
            >
              {project.description}
            </p>
          </motion.div>
        </Link>
      ))}
    </div>
  </motion.div>
</section>


{/* Contact Section */}
<section
  style={{
    ...darkBackground,
    color: '#fff',
    minHeight: '100vh',
    padding: '80px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }}
>
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8 }}
    style={{ width: '100%', maxWidth: 600 }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}>
      Contact Me
    </h2>

    <p
      style={{
        fontSize: '1.2rem',
        maxWidth: 600,
        margin: '0 auto 40px',
        color: '#A1A1AA',
      }}
    >
      I&apos;m always excited to collaborate on interesting projects! Feel free to reach out:
    </p>

    <form
      onSubmit={(e) => {
        e.preventDefault();
        emailjs.send(
          'service_jtltcul',
          'template_q46219d',
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          'VW5-ZhcODETeG7o5f'
        ).then(() => {
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        }).catch((error) => {
          setStatus('Failed to send message. Please try again later.');
          console.error('EmailJS Error:', error);
        });
      }}
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '40px',
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #555',
          background: '#1e1e2f',
          color: '#fff',
          fontSize: '1rem',
        }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #555',
          background: '#1e1e2f',
          color: '#fff',
          fontSize: '1rem',
        }}
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        value={formData.subject || ''}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #555',
          background: '#1e1e2f',
          color: '#fff',
          fontSize: '1rem',
        }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        required
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        style={{
          padding: '12px 16px',
          borderRadius: '8px',
          border: '1px solid #555',
          background: '#1e1e2f',
          color: '#fff',
          fontSize: '1rem',
          resize: 'none',
        }}
      />
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 12px rgba(99, 102, 241, 0.6)',
        }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        style={{
          padding: '12px 20px',
          background: 'linear-gradient(to right, #4F46E5, #6366F1)',
          color: '#fff',
          fontWeight: 600,
          fontSize: '1rem',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: '0.3s ease',
        }}
      >
        Send Message
      </motion.button>
    </form>

    {status && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ color: '#7bdcb5', fontWeight: 600, marginBottom: '30px' }}
      >
        {status}
      </motion.p>
    )}

    {/* Social Icons */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      style={{
        marginTop: '20px',
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
      }}
    >
      {[
          {
            icon: <FaEnvelope size={40} />,
            url: 'mailto:chazelhonrejas02@gmail.com',
            color: '#D14836',
          },
          {
            icon: <FaFacebook size={40} />,
            url: 'https://www.facebook.com/share/1AHhDbCrRa/',
            color: '#1877F2',
          },
          {
            icon: <FaLinkedin size={40} />,
            url: 'https://www.linkedin.com/in/chaz-honrejas-33bb3b351/',
            color: '#0A66C2',
          },
          {
            icon: <FaGithub size={40} />,
            url: 'https://github.com/chazzzzz01',
            color: '#fff',
          },
        ].map(({ icon, url, color }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.2,
              boxShadow: `0 0 12px ${color}`,
            }}
            whileTap={{ scale: 0.9 }}
            style={{
              color,
              transition: 'all 0.3s ease',
            }}
          >
            {icon}
          </motion.a>
        ))}
    </motion.div>
  </motion.div>
</section>

</>
  )
}