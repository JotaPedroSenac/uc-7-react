import React from "react";
import Band from "../Band";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import bandas from "../../data/bancoBands";

function Main(){
  return(
    <>
      <main className={styles.Main}>
        {
          bandas.map((banda, index) => (
              <section key={banda.slug}>
                <Band key={index} {...banda}/>
                <Link  to={`band/${banda.slug}`}>
                    <p>Clique aqui</p>
                </Link>
              </section>
          ))
        }
        {/* <section>
          <Band imagem={"https://cdn.ontourmedia.io/gunsnroses/site_v2/animations/gnr_loop_logo_01.jpg"} nome={"Guns n Roses"} descricao={"teste teste teste"}/>
          </section> */}
      </main>
    </>
  );
}

export default Main;