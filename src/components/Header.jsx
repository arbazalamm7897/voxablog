import React from 'react';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>VoxaBlog</div>
      <nav>
        <a href="#">Home</a>
        <a href="#">My Blogs</a>
      </nav>
      <button className={styles.loginBtn}>Log in / Sign in</button>
    </header>
  );
}

export default Header;
