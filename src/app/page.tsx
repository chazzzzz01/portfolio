'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      {/* Intro Section */}
      <section
        style={{
          padding: '60px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
          flexWrap: 'wrap',
          textAlign: 'center',
          borderBottom: '1px solid #eee',
          marginBottom: '40px',
        }}
      >
        {/* Text container */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ maxWidth: 500 }}
        >
          <motion.h1
            style={{ fontSize: '48px', marginBottom: '20px' }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm Chazel G. Honrejas!
          </motion.h1>
          <motion.p
            style={{ fontSize: '24px' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A passionate developer crafting web experiences.
          </motion.p>
        </motion.div>

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            flexShrink: 0,
          }}
        >
          <img
            src="/chazel.png"
            alt="Chazel G. Honrejas"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
          />
        </motion.div>
      </section>



{/* About Me Section */}
<section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ fontSize: '36px', marginBottom: '20px' }}
  >
    About Me
  </motion.h2>
  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    style={{ maxWidth: 800, margin: '0 auto', fontSize: '20px' }}
  >
    I have a strong interest in web development and a growing knowledge of the field. I'm eager to learn more and would love the opportunity to be trained by experts. I'm naturally curious and always excited to explore new things.
    In addition to my tech interests, I also run a small business focused on painting, sketching, and digital art. Creativity is a big part of who I am, both in my work and in my hobbies.
    Music is another passion of mine, I enjoy playing various instruments including the guitar, bass guitar, ukulele, and piano. Whether it's through code, art, or music, I’m always looking for ways to express myself and grow.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.4 }}
    style={{ marginTop: '30px' }}
  >
    <Link href="/about" passHref>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseOver={e => {
          (e.target as HTMLButtonElement).style.backgroundColor = '#0056b3';
        }}
        onMouseOut={e => {
          (e.target as HTMLButtonElement).style.backgroundColor = '#007bff';
        }}
      >
        Learn More
      </motion.button>
    </Link>
  </motion.div>
</section>




{/* Projects Section */}
<section style={{ padding: '80px 20px', textAlign: 'center' }}>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{ fontSize: '36px', marginBottom: '20px' }}
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
    <Link
      href="/projects"
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <h3>Reports and Complaints Management System</h3>
      <p>
        The Report and Complaint Management System is a web app that helps users submit complaints and automatically sends them to the correct office using machine learning. It analyzes each complaint, predicts the responsible office, and shows similar past complaints to assist in handling the issue. Built with Django, it makes complaint processing faster, more efficient, and better organized.
      </p>
    </Link>

    <Link
      href="/projects"
      style={{
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '20px',
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <h3>Healthcare Translator</h3>
      <p>
        The Healthcare Translator is an app that helps patients and doctors understand each other by translating medical terms, symptoms, and instructions into different languages. It makes communication easier in hospitals and clinics, especially when people speak different languages, helping improve care and safety.
      </p>
    </Link>
  </motion.div>
</section>

      {/* Contact Section */}
      <section style={{ padding: '80px 20px', background: '#f9f9f9', textAlign: 'center' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ fontSize: '36px', marginBottom: '20px' }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ fontSize: '20px', maxWidth: 600, margin: '0 auto 40px' }}
        >
          I'm always open to collaborations and new opportunities. Feel free to reach out!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>Email: <a href="mailto:chazel@example.com">chazel@.com</a></p>
          <p>
            GitHub:{' '}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              @chuchu
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              /in/chuchu
            </a>
          </p>
        </motion.div>
      </section>
    </>
  );
}
