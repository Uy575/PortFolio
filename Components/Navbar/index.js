import React from "react";
import styles from './navbar.module.scss'
function Navbar() {
  return (
    <div className={`container ${styles.navbarContainer}`}>
      <div className={styles.navbarLogo}><span className={styles.logoFirstPart}>Port</span><span className={styles.logoSecondPart}>Folio</span></div>
      <div className={styles.navbarList}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href='#About'>About</a>
          </li>
          <li>
            <a href=  '#Services'>Services</a>
          </li>
      <li>
        <button>Hire me</button>
      </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Navbar;
