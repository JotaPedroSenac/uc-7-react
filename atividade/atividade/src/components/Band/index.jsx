import React from "react";
import styles from "./Band.module.css"

function Band(){
  return(
    <section className={styles.Band}>
      <div className={styles.Band}>
          <img src="https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg" alt="Banda 1"/>
          <div class="band-info">
              <h2>Banda 1</h2>
              <p>Descrição da Banda 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
      </div>
    </section>
  );
}

export default Band;