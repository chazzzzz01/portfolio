'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaEnvelope, FaFacebook, FaLinkedin } from 'react-icons/fa';
import React from 'react'; 

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_jtltcul',
        'template_q46219d',
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'VW5-ZhcODETeG7o5f'
      );

  

      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setStatus('Failed to send message. Please try again later.');
      console.error('EmailJS Error:', error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        backgroundColor: 'hsl(240, 25.3%, 19.4%)',
        color: '#fff',
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          fontSize: '3rem',
          fontWeight: 700,
          marginBottom: '40px',
          borderBottom: '3px solid #007BFF',
          paddingBottom: '10px',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        Contact Me
      </motion.h2>

      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          value={formData.subject}
          onChange={handleChange}
          style={inputStyle}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={6}
          required
          value={formData.message}
          onChange={handleChange}
          style={textareaStyle}
        />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0px 0px 12px rgba(99, 102, 241, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          style={buttonStyle}
        >
          Send Message
        </motion.button>
        {status && <p style={{ color: '#7bdcb5', marginTop: '10px' }}>{status}</p>}
      </form>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        style={{
          marginTop: '40px',
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
    </motion.section>
  );
}

const inputStyle = {
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #555',
  background: '#1e1e2f',
  color: '#fff',
  fontSize: '1rem',
};

const textareaStyle = {
  ...inputStyle,
  resize: 'none' as const,
};

const buttonStyle = {
  padding: '12px 20px',
  background: 'linear-gradient(to right, #4F46E5, #6366F1)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1rem',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: '0.3s ease',
};
