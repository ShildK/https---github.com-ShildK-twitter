import { useState } from "react";
import Container from "../Container/Container";
import { useUsers } from "../store/useUsers";
import styles from "./Registration.module.css";

export default function Registration() {
    const { push } = useUsers();
    const [userName, setUserName] = useState();
    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    
   const addNewUser = () => {
      push(userName, login, password);
   };
 
   return (
      <Container>
         <div className={styles.registration}>
            <h2 className={styles.registration__title}>Join Twitter today.</h2>
            <div className={styles.registration__form}>
               <input
                  type="text"
                  onChange={(e) => {setUserName(e.target.value)}}
                  placeholder="FirstName"
                  className={styles.registration__input}
               />
               <input
                  type="text"
                  onChange={(e) => {setLogin(e.target.value)}}
                  placeholder="Login"
                  className={styles.registration__input}
               />
               <input
                  type="text"
                  onChange={(e) => {setPassword(e.target.value)}}
                  placeholder="Password"
                  className={styles.registration__input}
               />
               <button onClick={addNewUser} className={styles.registration__button}>Log Up</button>
            </div>
         </div>
      </Container>
   );
}
