import styles from "./Home.module.css";

import { useEffect } from "react";
import { useUsers } from "../store/useUsers";
import { usePosts } from "../store/usePosts";

import Form from "../Form/Form";
import Post from "../Post/Post";
import Header from "../Header/Header";

export default function Home() {
   const { users } = useUsers();
   const { posts } = usePosts();

   useEffect(() => {
      console.log(users);
   }, users);

   return (
      <div className={styles.home}>
         <Header title="Home"/>
         <Form />
         <div className={styles.home__posts}>
            {posts.map((post) => {
               return <Post key={post.postId} post={post} />;
            })}
         </div>
      </div>
   );
}
