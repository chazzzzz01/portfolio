'use client';

import { motion } from 'framer-motion';

// Simple SVG icons for skills (you can replace these with your own or an icon library)
const icons = {
  python: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#3776AB"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <path d="M12 2C7 2 7 7 7 7v3h5v1H6v4h6v4H6v3s0 5 6 5 6-5 6-5v-3h-5v-1h6v-4h-6v-4h6V7s0-5-6-5z" />
    </svg>
  ),
  php: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#777BB4"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <path d="M2 7h20v10H2z" />
      <text
        x="12"
        y="16"
        fontSize="8"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        PHP
      </text>
    </svg>
  ),
  wordpress: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#21759B"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="16"
        fontSize="7"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        WP
      </text>
    </svg>
  ),
  html: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#E34F26"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <path d="M2 2l2 18 8 2 8-2 2-18H2z" />
      <text
        x="12"
        y="17"
        fontSize="7"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        HTML
      </text>
    </svg>
  ),
  css: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#1572B6"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <path d="M2 2h20l-2 18-8 2-8-2-2-18z" />
      <text
        x="12"
        y="17"
        fontSize="7"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        CSS
      </text>
    </svg>
  ),
  javascript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#F7DF1E"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <rect width="24" height="24" rx="2" ry="2" />
      <text
        x="12"
        y="17"
        fontSize="7"
        fontWeight="bold"
        fill="#000"
        textAnchor="middle"
        fontFamily="Arial"
      >
        JS
      </text>
    </svg>
  ),
  postgresql: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#336791"
      viewBox="0 0 24 24"
      width="36"
      height="36"
    >
      <circle cx="12" cy="12" r="10" />
      <text
        x="12"
        y="16"
        fontSize="7"
        fontWeight="bold"
        fill="#fff"
        textAnchor="middle"
        fontFamily="Arial"
      >
        PG
      </text>
    </svg>
  ),
};

const darkBackground = {
  backgroundColor: 'hsl(240, 25.30%, 19.40%)',
};

export default function About() {
  return (
    <section
      style={{
        ...darkBackground,
        minHeight: '100vh',
        padding: '80px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: '3rem',
          marginBottom: '30px',
          fontWeight: 700,
          borderBottom: '3px solid #007BFF',
          paddingBottom: '10px',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          maxWidth: '700px',
          fontSize: '1.2rem',
          fontWeight: 400,
          lineHeight: 1.8,
          color: '#FFF',
          marginBottom: '30px',
        }}
      >
        My name is Chazel G. Honrejas, a fresh graduate from the Philippines with a
        Bachelor's degree in Computer Science. During my internship at CVISNET
        Foundation Inc., I gained foundational experience in WordPress and PHP,
        which introduced me to real-world web development practices. While I was
        still studying, I also built some projects using Python, Html, Css, Javascript and postgresql for my database. This also helped me
        develop problem-solving skills and a deeper understanding of programming
        concepts. I enjoy exploring new technologies and continuously seek
        opportunities to learn and grow. I'm passionate about working on things I
        enjoy, and I always make time to improve my skills and take on new
        challenges.
      </motion.p>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          maxWidth: '700px',
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '50px',
        }}
      >
        {[
          { name: 'Python', icon: icons.python },
          { name: 'PHP', icon: icons.php },
          { name: 'WordPress', icon: icons.wordpress },
          { name: 'HTML', icon: icons.html },
          { name: 'CSS', icon: icons.css },
          { name: 'JavaScript', icon: icons.javascript },
          { name: 'PostgreSQL', icon: icons.postgresql },
        ].map(({ name, icon }) => (
          <div
            key={name}
            style={{
              backgroundColor: '#1e2a47',
              borderRadius: '12px',
              padding: '15px 25px',
              minWidth: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            {icon}
            <span
              style={{
                marginTop: '10px',
                color: '#fff',
                fontWeight: '600',
                fontSize: '1.1rem',
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </motion.section>

      {/* Life & Journey */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.45 }}
        style={{
          maxWidth: '700px',
          marginBottom: '40px',
          padding: '20px',
          borderLeft: '5px solid #007BFF',
          textAlign: 'left',
          color: '#FFF',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '12px',
            color: '#007BFF',
          }}
        >
          🌟 My Life & Journey
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          I grew up in a family full of IT folks, so you could say the tech bug bit
          me early. I chose Computer Science because I thought, “Hey, maybe I can
          make some games!” and while that dream is still alive, I quickly realized
          there’s a lot more to tech than just clicking keys on a keyboard (spoiler:
          there's math, logic, and a bit of existential crisis too 😅). At first, I
          thought coding was just typing fast like in the movies but nope, it's
          mostly Googling errors and celebrating when your code finally runs without
          breaking. My journey started in peaceful surroundings, giving me time to
          dive into games, music, and technology. Now, I spend most of my days
          learning new programming concepts, building cool ideas, and dreaming big.
          This is just the beginning..
        </p>
      </motion.section>

      {/* Hobbies */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        style={{
          maxWidth: '700px',
          marginBottom: '40px',
          padding: '20px',
          borderLeft: '5px solid #007BFF',
          textAlign: 'left',
          color: '#FFF',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '12px',
            color: '#007BFF',
          }}
        >
          🎸 Hobbies
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          I enjoy playing guitar, bass, keyboard, and even a bit of drums even if
          I’m probably the only musician who can miss a note on every instrument
          😅. Tone-deaf? Maybe. Passionate? Absolutely. When I’m not pretending to be
          a one-man band, I’m diving into manhwa, losing track of time in games, or
          tinkering with new tech tools and programming languages just for fun. If
          curiosity was a job, I’d be employee of the year.
        </p>
      </motion.section>

      {/* Business */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.75 }}
        style={{
          maxWidth: '700px',
          padding: '20px',
          borderLeft: '5px solid #007BFF',
          textAlign: 'left',
          color: '#FFF',
        }}
      >
        <h3
          style={{
            fontSize: '1.8rem',
            marginBottom: '12px',
            color: '#007BFF',
          }}
        >
          🏢 My Business — Zel's Sketch
        </h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          I’m the founder of <strong style={{ color: '#fff' }}>Zel’s Sketch</strong>.
          I create charcoal portraits, paintings, and digital art. Drawing family
          portraits with charcoal pencils is one of my favorite things to do it’s a
          bit messy but really rewarding. I love combining art and storytelling to
          make each piece unique and meaningful. It’s all about bringing ideas to
          life through creativity.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://zels-sketch.example.com', '_blank')}
          style={{
            marginTop: '20px',
            padding: '12px 28px',
            background: 'linear-gradient(to right, #4F46E5, #6366F1)',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
            userSelect: 'none',
          }}
        >
          Visit Zel's Sketch
        </motion.button>
      </motion.section>
    </section>
  );
}
