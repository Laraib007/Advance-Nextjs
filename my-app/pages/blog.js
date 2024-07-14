import styles from "@/styles/Home.module.css";
import fs from 'fs'

import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Blog (props){
  const [blog, setBlog] = useState(props.allBlogs)
    return(
        <main className={`${styles.main} `}>
          {blog.map((blogD)=>{
            return <>
             <div> <div className="blog">
        <div className="blogItems">
          <h3> <Link href={`/blogpost/${blogD.slug}`}>{blogD.title}</Link></h3>
          <p>{blogD.author}</p>
          <h4>By Mr.{blogD.author}</h4>
        </div>
      </div>
      </div>
            </>
          })}
</main>
    )
}


  export async function getStaticProps(){
    let data = await fs.promises.readdir("blogdata")
    let myfiles;
    let allBlogs = [];
    for(let i = 0; i < data.length; i++){
      const items = data[i]
       myfiles = await fs.promises.readFile((`blogdata/`+ items), "utf-8")
      allBlogs.push(JSON.parse(myfiles))
    }
      return { props: {allBlogs} }
  }
