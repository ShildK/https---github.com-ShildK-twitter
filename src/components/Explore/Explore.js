import { trendsForYou } from "../../dataBase";
import TrendItem from "../TrendsColumn/TrendItem/TrendItem";
import styles from "./Explore.module.css";

import ExploreHeader from "./ExploreHeader/ExploreHeader";

export default function Explore() {
   return (
      <div className={styles.explore}>
         <ExploreHeader />
         <img
            src="img/explore_img.webp"
            className={styles.explore__image}
         ></img>
         <div className={styles.explore__trends__items}>
            <h2 className={styles.explore__trends__items__title}>
               Trends for you
            </h2>
            {trendsForYou.map((item) => {
               return (
                  <TrendItem
                     placeOfTrend={item.placeOfTrend}
                     title={item.title}
                     quantityPosts={item.quantityPosts}
                  />
               );
            })}
         </div>
      </div>
   );
}
