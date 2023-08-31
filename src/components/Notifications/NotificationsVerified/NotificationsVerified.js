import styles from "./NotificationsVerified.module.css"

export default function NotificationsVerified() {
    return(
        <div className={styles.notifications__verified}>
            <img src="../img/verified.png" className={styles.notifications__verified__img}></img>
            <h2 className={styles.notifications__verified__title}>Nothing to see here — yet</h2>
            <p className={styles.notifications__verified__subtitle}>Likes, mentions, reposts, and a whole lot more — when it comes from a verified account, you’ll find it here.</p>
        </div>
    )
}