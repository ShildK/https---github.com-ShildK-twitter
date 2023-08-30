import Header from "../Header/Header"
import styles from "./Bookmarks.module.css"

export default function Bookmarks() {
    return(
        <div className={styles.bookmarks}>
            <Header title="Bookmarks"/>
            <div className={styles.bookmarks__body}>
                <h1 className={styles.bookmarks__body__title}>Save posts for later</h1>
                <p className={styles.bookmarks__body__subtitle}>Bookmark posts to easily find them again in the future.</p>
            </div>
        </div>
    )
}