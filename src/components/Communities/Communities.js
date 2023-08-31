import Header from "../Header/Header"
import styles from "./Communities.module.css"

export default function Communities() {
    return(
        <div className={styles.communities}>
            <Header title="Communities"/>
            <div className={styles.communities__body}>
                <h2 className={styles.communities__body__title}>You haven’t joined any Communities yet</h2>
                <p className={styles.communities__body__subtitle}>When you do, you’ll see their posts here.</p>
            </div>
        </div>
    )
}