import styles from "./Lists.module.css";
import ListsHeader from "./ListsHeader/ListsHeader";



export default function Lists() {
   return (
      <div className={styles.lists}>
         <ListsHeader />
         <div className={styles.lists__content}>
            <h2 className={styles.lists__content__title}>Your Lists</h2>
            <p className={styles.lists__content__subtitle}>You haven't created or followed any Lists. When you do, they'll show up here.</p>
         </div>
      </div>
   );
}
