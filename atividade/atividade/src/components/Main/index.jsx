import React from "react";
import Band from "../Band";
import styles from "./Main.module.css"

function Main(){
  return(
    <>
      <main className={styles.Main}>
        <Band/>
      </main>
    </>
  );
}

export default Main;