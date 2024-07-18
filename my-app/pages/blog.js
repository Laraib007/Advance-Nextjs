import styles from "@/styles/Home.module.css";
import fs from 'fs'
import InfiniteScroll from 'react-infinite-scroller';
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Blog (props){
  const [blog, setBlog] = useState(props.allBlogs)
  const loadFunc = async ()=>{
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${3}`)
    let data = d.json()
    setBlog(data)
  }



    return(
        <main className={`${styles.main} `}>


<InfiniteScroll
    dataLength={blog.length}
    next={loadFunc}
    hasMore={true}
    loader={<div className="loader" key={0}>Loading ...</div>}
    endMessage={
      <p style={{textAlign: "center"}}><p>
        Yeah You Have seen it All!
      </p>
      </p>
    }
>
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
</InfiniteScroll>


         
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
