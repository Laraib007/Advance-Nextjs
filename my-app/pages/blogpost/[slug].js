import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Slug (){
    const [blog, setBlog] = useState([])
    const router = useRouter()
  useEffect(()=>{
    if(!router.isReady) return
    const {slug} = router.query
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
      return a.json()})
      .then((parsed)=>{
        setBlog(parsed)
      })
  },[router.isReady])
    return(
        <main className={`${styles.main}`}>
        <div>
        <h1 className={styles.center}>
        <span className="span1">{blog && blog.title} </span>
        </h1>
        <p className={`${styles.container} `}>{blog && blog.des}</p>
        <p className={`${styles.container} `}>{blog && blog.author}</p>
        </div>
        </main>
    )
}