import Header from "../Header/Header";
import styles from "./Messages.module.css";

export default function Messages() {
   return (
      <div className={styles.messages}>
         <Header title="Messages" />
         <div className={styles.messages__body}>
            <h2 className={styles.messages__body__title}>Welcome to your inbox!</h2>
            <p className={styles.messages__body__subtitle}>
               Drop a line, share posts and more with private conversations
               between you and others on Twitter.
            </p>
            <button className={styles.messages__body__button}>Write a message</button>
         </div>
      </div>
   );
}
