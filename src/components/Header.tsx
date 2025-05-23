// src/components/Header.tsx
import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
