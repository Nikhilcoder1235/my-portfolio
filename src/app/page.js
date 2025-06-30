import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>MUMBAI</h2>
        <ul className={styles.nav}>
          <li>🏠 Home</li>
          <li>👤 About</li>
          <li>⚙ Service</li>
          <li>🖼 Portfolio</li>
          <li>📰 News</li>
          <li>📧 Contact</li>
        </ul>
        <footer className={styles.footer}>
          <p>© 2025 Mumbai</p>
          <p><i>Created by Nikhil Suthar</i></p>
        </footer>
      </div>

      <div className={styles.right}>
        <div className={styles.profileImage}>
          <Image 
  src="/pro.jpg" 
  width={250} 
  height={250} 
  alt="profile" 
  className={styles.img}
/>
        </div>
        <h1 className={styles.name}>Nikhil Suthar</h1>
        <p className={styles.bio}>
          A React JS developer who loves building fast and user-friendly web apps.
        </p>
        <div className={styles.social}>
          <span>🌐</span>
          <span>💻</span>
         
        </div>
      </div>
    </div>
  
  );
}