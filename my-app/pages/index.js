import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div>
          <h1 className={styles.center}>
            <span className="span1">Hunting Coder</span>
          </h1>
          <Image className={styles.imgSty} src="/codingImg.jpg" width={310} height={160}></Image>
          <p className={styles.center} >
            A Blog for Hunting Coder By a hunting coder
          </p>
          <h2 className={styles.center}>Popular Blogs</h2>
        </div>
        <div className="blog">
          <div className="blogItems">
            <h3>How to Learn javascript in 2024?</h3>
            <p>This is a blog to learn javascript from starting to advance</p>
          </div>
        </div>
        <div className="blog">
          <div className="blogItems">
            <h3>How to Learn javascript in 2024?</h3>
            <p>This is a blog to learn javascript from starting to advance</p>
          </div>
        </div>
        <div className="blog">
          <div className="blogItems">
            <h3>How to Learn javascript in 2024?</h3>
            <p>This is a blog to learn javascript from starting to advance</p>
          </div>
        </div>
        <div className="blog">
          <div className="blogItems">
            <h3>How to Learn javascript in 2024?</h3>
            <p>This is a blog to learn javascript from starting to advance</p>
          </div>
        </div>
      </main>
    </>
  );
}
