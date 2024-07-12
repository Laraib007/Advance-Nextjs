import { useRouter } from "next/router"
import styles from "@/styles/Home.module.css";

export default function Slug (){
    const router = useRouter()
    const {slug} = router.query
    return(
        <main className={`${styles.main}`}>
        <div>
        <h1 className={styles.center}>
        <span className="span1">Title of the Page {slug}</span>
        </h1>
        <p className={`${styles.container} ${styles.main}`}>The Gemz daily combo 12 July is a cool part of the Gemz game for players who want to earn 5,000,000 coins each day. To get today’s rewards, players need to open four cards from the game. You can now get the Gemz Daily Combo 12 July Card from here.

</p>
        </div>
        </main>
    )
}