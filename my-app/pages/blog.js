import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";


export default function Blog (){
    return(
        <main className={`${styles.main} `}>
        <div> <div className="blog">
        <div className="blogItems">
          <h3> <Link href="/blogpost/javascript-learing"> How to Learn javascript in 2024?</Link></h3>
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
</div>
</main>
    )
}