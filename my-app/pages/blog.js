import styles from "@/styles/Home.module.css";

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Blog (props){
  const [blog, setBlog] = useState(props.myBlogs)
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

export async function getServerSideProps(){
  const data = await fetch("http://localhost:3000/api/blogs")
  const myBlogs = await data.json()
    return { props: {myBlogs} }
}