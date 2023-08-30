import Header from "../Header/Header"
import styles from "./Communities.module.css"

export default function Communities() {
    return(
        <div className={styles.communities}>
            <Header title="Communities"/>
            <div className={styles.communities__body}>
                <h2 className={styles.communities__body__title}>Discover new Communities </h2>
            </div>
        </div>
    )
}