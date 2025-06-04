'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { FaEnvelope, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

// Updated dark background (Borderless style)
const darkBackground = {
      backgroundColor: 'hsl(240, 25.30%, 19.40%)',

};

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await emailjs.send(
        'service_jtltcul',    // Your Service ID
        'template_q46219d',   // Your Template ID
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        'VW5-ZhcODETeG7o5f'   // Your Public Key
      );
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    }
  };

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
            A passionate developer crafting elegant and functional web experiences.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('/Honrejas, Chazel G(CV).pdf', '_blank')}
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
          <Image src="/chazel.png" alt="My image" width={500} height={300} />
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
          I&apos;m a tech enthusiast with a deep love for creating digital things. Whether it&apos;s building web apps or experimenting with creative ideas, 
          I&apos;m always eager to learn. I also love painting, sketching, and making music.
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

  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    style={{
      display: 'grid',
      gap: '30px',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      maxWidth: 1000,
      margin: '0 auto',
    }}
  >
    {[{
      title: 'Reports and Complaints Management System',
      description:
        'The Report and Complaint Management System is a web app that helps users submit complaints and automatically sends them to the correct office using machine learning. It analyzes each complaint, predicts the responsible office, and shows similar past complaints to assist in handling the issue. Built with Django, it makes complaint processing faster, more efficient, and better organized.',
    }, {
      title: 'Healthcare Translator',
      description:
        'The Healthcare Translator is an app that helps patients and doctors understand each other by translating medical terms, symptoms, and instructions into different languages. It makes communication easier in hospitals and clinics, especially when people speak different languages, helping improve care and safety.',
    }].map((project, index) => (
      <Link
        key={index}
        href="/projects"
        style={{ textDecoration: 'none', color: 'inherit' }}
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
            minHeight: '340px',
          }}
        >
          <h3 style={{ fontSize: '1.4rem', fontWeight: 600 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '1rem', marginTop: '10px', color: '#E5E5E5' }}>
            {project.description}
          </p>
        </motion.div>
      </Link>
    ))}
  </motion.div>
</section>

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
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: 700 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ fontSize: '1.2rem', maxWidth: 600, margin: '0 auto 40px', color: '#A1A1AA' }}
      >
        I&apos;m always excited to collaborate on interesting projects! Feel free to reach out:
      </motion.p>

      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: 600,
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          onChange={handleChange}
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
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgba(99, 102, 241, 0.6)' }}
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

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ fontSize: '1.1rem', marginBottom: '40px' }}
      >
       
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
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
            url: 'https://mail.google.com/mail/?view=cm&fs=1&to=chazelhonrejas02@gmail.com',
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
    </section>
  </>
  );
}