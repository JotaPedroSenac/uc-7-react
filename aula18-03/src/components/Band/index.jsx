import { React, useState } from "react";
import styles from "./Band.module.css";

function Band({imagem, nome, descricao}) {
  const [like, setLike] = useState(0); //estado inicial igual a zero
  const [deslike, setDeslike] = useState(0);
  return (
    <div className={styles.band}>
        <img
          src={imagem}
          alt={nome}
        />
        <div className={styles.bandInfo}>
          <h2>{nome}</h2>
          <p>{descricao}</p>
          <p>Likes: {like}</p>
          <p>Deslikes: {deslike}</p>
        </div>
<button onClick={()=>setLike(like+1)}>Curtir👍</button>
        <button onClick={()=>setDeslike(deslike+1)}>descurtir 🫳</button>
    </div>
  );
}
export default Band;
