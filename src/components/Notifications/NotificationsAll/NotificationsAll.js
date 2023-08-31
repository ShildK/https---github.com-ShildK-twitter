import styles from "./NotificationsAll.module.css"

export default function NotificationsAll({ subtitle }) {
    return(
        <div className={styles.notifications__all}>
            <h2 className={styles.notifications__all__title}>Nothing to see here — yet</h2>
            <p className={styles.notifications__all__subtitle}>{ subtitle }</p>
        </div>
    )
}