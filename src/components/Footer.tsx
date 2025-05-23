// src/components/Footer.tsx
import styles from '../styles/Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Chazel. All rights reserved.</p>
  </footer>
);

export default Footer;
