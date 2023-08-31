import { Link, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import styles from "./Notifications.module.css";
import NotificationsAll from "./NotificationsAll/NotificationsAll";
import NotificationsVerified from "./NotificationsVerified/NotificationsVerified";


export default function Notifications() {
    const mainSubtitle = 'From likes to reposts and a whole lot more, this is where all the action happens.'
    const verifiedSubtitle = 'When someone mentions you, you’ll find it here.'

   return (
      <div className={styles.notifications}>
         <Header title="Notifications" />
         <div className={styles.notifications__content}>
            <Link to="" className={styles.notifications__content__link}>
               All
            </Link>
            <Link to="verified" className={styles.notifications__content__link}>
               Verified
            </Link>
            <Link to="mentions" className={styles.notifications__content__link}>
               Mentions
            </Link>
         </div>
         <Routes>
            <Route path="/" element={<NotificationsAll subtitle={mainSubtitle}/>} />
            <Route path="verified" element={<NotificationsVerified/>} />
            <Route path="mentions" element={<NotificationsAll subtitle={verifiedSubtitle}/>} />
         </Routes>
      </div>
   );
}
