import React from 'react';
import Link from 'next/link';
import styles from '../styles/components/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/gigs">
              Gigs
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/user/profile">
              Profile
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/login">
              Login
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/signup">
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
