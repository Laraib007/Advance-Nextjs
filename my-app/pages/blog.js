import styles from "@/styles/Home.module.css";
import fs from 'fs' 
import InfiniteScroll from 'react-infinite-scroll-component';

import Link from "next/link";
import {useState } from "react";


export default function Blog (props){
  const [blog, setBlog] = useState(props.allBlogs)
  const [count, setCount]= useState(2)

  const fetchData = async ()=>{
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count+2}`)
    setCount(count + 2)
    let data = d.json()
    setBlog(data)
  }
  
 const blogs = blog.map((blogD)=>{
    return <>
     <div> <div className="blog">
<div className="blogItems">
  <h3> <Link href={`/blogpost/${blogD.slug}`}>{blogD.title}</Link></h3>
  <h4>By Mr.{blogD.author}</h4>
</div>
</div>
</div>
    </>
  })


    return(
        <main className={`${styles.main} `}>


<InfiniteScroll
    dataLength={blog.length}
    next={fetchData}
    hasMore={props.allCount !== blog.length}
    loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
    }
>
{ 
 blogs
}

</InfiniteScroll>


         
</main>
    )
}


  export async function getStaticProps(){
    let data = await fs.promises.readdir("blogdata")
    let allCount = data.length;
    let myfiles;
    let allBlogs = [];
    for(let i = 0; i < 2; i++){
      const items = data[i]
       myfiles = await fs.promises.readFile((`blogdata/`+ items), "utf-8")
      allBlogs.push(JSON.parse(myfiles))
    }
      return { props: {allBlogs, allCount} }
  }
