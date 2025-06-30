import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

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
