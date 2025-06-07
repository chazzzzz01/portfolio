import React from 'react';
import { FaFileAlt, FaUsers, FaTools, FaCogs, FaGithub } from 'react-icons/fa';

export default function ReportsSummaryPage() {
  const githubUrl = 'https://github.com/chazzzzz01/ARCS';

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

      <h1>Reports and Complaints Management System</h1>

      <div className="section">
        <h2><FaFileAlt /> Why We Created This Project</h2>
        <p>
          Managing reports and complaints effectively can be a major challenge in large institutions.
          This system was built to <span className="highlight">automatically classify</span> and
          <span className="highlight"> route submissions</span> to the appropriate departments,
          ensuring faster resolution and enhanced accountability.
        </p>
      </div>

      <div className="section">
        <h2><FaUsers /> Users of the System</h2>
        <ul>
          <li><span className="highlight">Informants</span> – Users who submit reports and complaints.</li>
          <li><span className="highlight">Administrators (Legal Office)</span> – Oversee the processing and resolution of complaints.</li>
          <li><span className="highlight">Office Departments</span> – Such as VP for Administration & Finance, Academic Affairs, Student Affairs, and the GAD Office.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaTools /> How We Built It</h2>
        <ul>
          <li>- Collected actual reports and generated additional keyword-based synthetic data.</li>
          <li>- Preprocessed text by removing punctuation and stopwords, and applied lemmatization.</li>
          <li>- Defined keyword lists per department to guide the machine learning classification.</li>
          <li>- Vectorized descriptions using TF-IDF to prepare data for model training.</li>
          <li>- Trained separate Naive Bayes models for predicting the category and type of each submission.</li>
          <li>- Integrated cosine similarity checks to enhance prediction reliability by comparing with existing cases.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaTools /> Technologies Used</h2>
        <ul>
          <li><span className="highlight">Python</span> – Backend logic and ML development.</li>
          <li><span className="highlight">Django</span> – Web framework to handle requests and endpoints.</li>
          <li><span className="highlight">scikit-learn</span> – For Naive Bayes modeling and TF-IDF vectorization.</li>
          <li><span className="highlight">spaCy / NLTK</span> – Text preprocessing (lemmatization, stopword removal).</li>
          <li><span className="highlight">CSS / Tailwind</span> – Custom styling and layout.</li>
          <li><span className="highlight">Cosine Similarity</span> – For semantic comparison with historical data.</li>
        </ul>
      </div>

      <div className="section">
        <h2><FaCogs /> How It Works</h2>
        <p>
          When a report or complaint is submitted, the system cleans and vectorizes the input text,
          evaluates it using trained models, and predicts both the appropriate office and whether
          it’s a report or a complaint. It then forwards the entry to the relevant department automatically.
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
