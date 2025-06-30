// src/components/ProfileCard.js
import Image from "next/image";
import styles from "../app/page.module.css"; 


export default function ProfileCard() {
  return (
    <div className={styles.right}>
      <div className={styles.profileImage}>
        <Image src="/pro.jpg" width={250} height={250} alt="profile" className={styles.img} />
      </div>
      <h1 className={styles.name}>NIKHIL SUTHAR</h1>
      <p className={styles.bio}>
        A React JS developer who loves building fast and user-friendly web apps.
      </p>
      <div className={styles.social}>
        <span>🌐</span>
        <span>💻</span>
        <span>📱</span>
        <span>🎮</span>
      </div>
    </div>
  );
}
