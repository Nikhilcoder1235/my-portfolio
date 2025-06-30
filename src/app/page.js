import Image from "next/image";
import styles from "./page.module.css"; 

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProfileCard from "./components/profilecard";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>MUMBAI</h2>
        <Navbar />
        <Footer />
      </div>
      <ProfileCard />
    </div>
  );
}