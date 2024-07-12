import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";


export default function Blog (){
    return(
        <main className={`${styles.main} ${inter.className}`}>
        <div> <div className="blog">
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
</div>
</main>
    )
}