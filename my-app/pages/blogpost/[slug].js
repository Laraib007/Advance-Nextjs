import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import fs from 'fs'

export default function Slug (props){
  function createMarkup(c) {
    return {__html: c};
  }
    const [blog, setBlog] = useState(props.myBlogs)
    const router = useRouter()
  useEffect(()=>{
    if(!router.isReady) return
    const {slug} = router.query
   
  },[router.isReady])
    return(
        <main className={`${styles.main}`}>
        <div>
        <h1 className={styles.center}>
        <span className="span1">{blog && blog.title} </span>
        </h1>
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.des)} />}
        <p className={`${styles.container} `}>{blog && blog.author}</p>
        </div>
        </main>
    )
}


export const getStaticPaths = (async () => {
  return {
    paths: [
          {params: {slug: "java"}},
          {params: {slug: "javascript"}},
          {params: {slug: "learn"}}
      ],
       fallback: true,
    }})

export const getStaticProps = (async (context) => {
  const {slug} = context.params;
  const myBlogs = await fs.promises.readFile((`blogdata/${slug}.json`), "utf-8")
    return { props: {myBlogs: JSON.parse(myBlogs)} }
})