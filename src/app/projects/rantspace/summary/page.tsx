import React from 'react';
import { FaCommentDots, FaUsers, FaTools, FaCogs, FaGithub } from 'react-icons/fa';

export default function RantspaceSummaryPage() {
  const githubUrl = 'https://github.com/chazzzzz01/rantspace';

  return (
    <div
      style={{
        padding: '2rem',
        paddingTop: '4rem',
        color: '#fff',
        backgroundColor: '#1e1e2f',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        boxSizing: 'border-box',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          * {
            box-sizing: border-box;
          }
          .highlight {
            color: rgb(42, 61, 233);
            font-weight: 600;
          }
          .section {
            width: 800px;
            max-width: 100%;
            background: #2a2a3e;
            border-radius: 12px;
            padding: 2rem;
            margin: 1rem 0;
            box-shadow: 0 0 10px rgba(31, 65, 232, 0.6);
            line-height: 1.6;
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          h1, h2, p, li, ul {
            word-wrap: break-word;
            overflow-wrap: break-word;
          }
          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            text-align: center;
            text-shadow: 0 0 8px rgb(49, 37, 181);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          h2 {
            color: rgb(47, 50, 247);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-wrap: wrap;
          }
          p {
            margin-bottom: 1rem;
          }
          ul {
            margin-left: 1.2rem;
            padding-left: 1rem;
          }
          li {
            margin-bottom: 0.4rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .github-link {
            margin-top: 2rem;
            color: #2a3dd9;
            font-size: 2.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
          }
          .github-link:hover {
            color: #4ade80;
          }

          @media screen and (max-width: 768px) {
            .section {
              width: 95%;
              padding: 1.5rem;
            }

            h1 {
              font-size: 2rem;
              text-align: center;
            }

            h2 {
              font-size: 1.25rem;
            }

            p, li {
              font-size: 0.95rem;
            }

            .github-link {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <h1><FaCommentDots /> Rantspace</h1>

      <div className="section">
        <h2><FaCommentDots /> Why We Created This Project</h2>
        <p>
          Everyone needs a space to freely share their thoughts without fear of judgment. 
          <span className="highlight"> Rantspace </span> was built as a safe, anonymous platform 
          where people can express frustrations, ideas, or random thoughts without revealing their identity.
        </p>
      </div>

      <div className="section">
        <h2><FaUsers /> Who Can Use Rantspace</h2>
        <ul>
          <li><span className="highlight">Ranters</span> – Anyone who wants to share their thoughts anonymously.</li>
          <li><span className="highlight">Readers</span> – People who browse posts, react, and engage with the community.</li>
          
        </ul>
      </div>

      <div className="section">
        <h2><FaTools /> How We Built It</h2>
        <ul>
          <li>- Designed with a focus on <span className="highlight">anonymity</span> and simplicity.</li>
          <li>- Used <span className="highlight">Neon + Prisma</span> for database and ORM management.</li>
          <li>- Developed using <span className="highlight">Next.js & React</span> for the frontend.</li>
          <li>- Deployed for easy access and scalability.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaCogs /> How It Works</h2>
        <p>
          Users can post rants anonymously in real-time. Posts are displayed on a global feed, 
          where others can read, react, and respond. No accounts, no personal details—just a 
          <span className="highlight"> judgment-free space </span> for open expression.
        </p>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Repository"
        className="github-link"
      >
        <FaGithub />
      </a>
    </div>
  );
}
