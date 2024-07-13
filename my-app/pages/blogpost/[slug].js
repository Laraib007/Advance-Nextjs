import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";
import { useEffect, useState } from "react";

export default function Slug (props){
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
        <p className={`${styles.container} `}>{blog && blog.des}</p>
        <p className={`${styles.container} `}>{blog && blog.author}</p>
        </div>
        </main>
    )
}
export async function getServerSideProps(context){
  const {slug} = context.query;
  const data = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const myBlogs = await data.json()
    return { props: {myBlogs} }
}