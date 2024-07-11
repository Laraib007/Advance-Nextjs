import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Navbar(){
    return(
        <>
        <nav className={`${styles.mainNav} `}> 
          <ul>
          <Link href=""><li>Home</li></Link>
           <Link href="/about"> <li>About</li></Link>
           <Link href="/blog"> <li>Blog</li></Link>
           <Link href="/contact"> <li>Contact</li></Link>
          </ul>
        </nav>
        </>
    )
}