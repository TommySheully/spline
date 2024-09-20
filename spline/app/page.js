import Image from "next/image";
import styles from "./page.module.css";
import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Spline scene='https://prod.spline.design/nyO5k2R2nV60cB3q/scene.splinecode'/>
       
      </main>
      <footer className={styles.footer}>
       
      </footer>
    </div>
  );
}
