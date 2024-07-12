import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Blog (){
  const [blog, setBlog] = useState([])
  useEffect(()=>{
    fetch("http://localhost:3000/api/blogs").then((a)=>{
      return a.json()})
      .then((parsed)=>{
        setBlog(parsed)
      })
  },[])

    return(
        <main className={`${styles.main} `}>
          {blog.map((blogD)=>{
            return <>
             <div> <div className="blog">
        <div className="blogItems">
          <h3> <Link href={`/blogpost/${blogD.slug}`}>{blogD.title}</Link></h3>
          <p>{blogD.des}</p>
          <h4>By Mr.{blogD.author}</h4>
        </div>
      </div>
      </div>
            </>
          })}
</main>
    )
}