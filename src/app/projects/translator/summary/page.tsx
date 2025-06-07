import React from 'react';
import { FaFileAlt, FaUsers, FaTools, FaCogs, FaGithub } from 'react-icons/fa';

export default function HealthcareTranslatorPage() {
  const githubUrl = 'https://github.com/chazzzzz01/translation';

  return (
    <div
      style={{
        padding: '2rem',
        color: '#fff',
        backgroundColor: '#1e1e2f',
        minHeight: '100vh',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'fadeIn 1.5s ease-in-out',
        boxSizing: 'border-box',
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
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
            box-sizing: border-box;
            word-break: break-word;
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
            word-break: break-word;
          }

          h2 {
            color: rgb(47, 50, 247);
            margin-bottom: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.6rem;
            flex-wrap: wrap;
            word-break: break-word;
          }

          p, li {
            margin-bottom: 1rem;
            font-size: 1rem;
            word-break: break-word;
            overflow-wrap: break-word;
          }

          ul {
            margin-left: 1.2rem;
            padding-left: 1rem;
          }

          li {
            display: flex;
            align-items: flex-start;
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

          code {
            background-color: #333;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
            font-size: 0.9rem;
            word-break: break-all;
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

      <h1>Healthcare Translator</h1>

      <div className="section">
        <h2><FaFileAlt /> Why I Created This Project</h2>
        <p>
          Communication barriers in healthcare settings can lead to serious misunderstandings and even medical errors.
          This <span className="highlight">Healthcare Translator</span> was developed to help bridge the language gap between
          medical professionals and patients in real-time. It was created under a time constraint as part of a technical challenge for a job application,
          with the requirement to build and deploy a mobile-responsive translation system within <span className="highlight">2 days</span>.
        </p>
      </div>

      <div className="section">
        <h2><FaUsers /> Users of the System</h2>
        <ul>
          <li><span className="highlight">Healthcare Workers</span> – Can translate medical instructions or questions for patients in their native language.</li>
          <li><span className="highlight">Patients</span> – Receive accurate translations of languages and have better communication to understand their care.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaTools /> Technologies Used</h2>
        <ul>
          <li><span className="highlight">Django + Django REST Framework</span> – for the backend API.</li>
          <li><span className="highlight">GoogleTranslator</span> (via deep translator) – for instant, accurate multilingual translation.</li>
          <li><span className="highlight">OpenAI API</span> – to generate text-to-speech (TTS) audio output for translated text.</li>
          <li><span className="highlight">HTML/CSS (Responsive)</span> – for a clean, mobile-ready frontend template.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaCogs /> How It Works</h2>
        <p>
          Users input a text and select their target language. The backend uses <code>deep translator</code> to translate the text.
          The result is returned in real time. Additionally, the app uses
          <span className="highlight"> OpenAI's text-to-speech model</span> to convert the translated text into an audio file, which can be played directly by the user,
          an essential feature for patients with reading difficulties or those unfamiliar with the written form of a language.
        </p>
      </div>

      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
        className="github-link"
      >
        <FaGithub />
      </a>
    </div>
  );
}
