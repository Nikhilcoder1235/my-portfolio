// src/components/Navbar.js
import styles from "../app/page.module.css"; 

export default function Navbar() {
  return (
    <ul className={styles.nav}>
      <li>🏠 Home</li>
      <li>👤 About</li>
      <li>⚙ Service</li>
      <li>🖼 Portfolio</li>
      <li>📰 News</li>
      <li>📧 Contact</li>
    </ul>
  );
}
