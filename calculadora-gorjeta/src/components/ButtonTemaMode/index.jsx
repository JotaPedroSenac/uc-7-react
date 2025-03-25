import React, {useState, useEffect} from "react";
import style from "./ButtonMode.module.css"

function ButtonTemaMode(){
    // const [dark, setDarkMode] = useState(false);
    // recebendo o valor setado no localstorage
    const [dark, setDarkMode] = useState(() => {
        return localStorage.getItem("darkMode") === "true";//conveter uma string em booleano  
    });
    // armazenando o valor
    useEffect(() => {
        localStorage.setItem("darkMode", dark); //valor dark é true ou false
    }, [dark]) //pegar o ultimo estágio da variável 
    return(
        <div className={dark ? style.dark : style.light}>
            <h1>{dark ? "Modo Escuro 🌚" : "Modo Claro 😎"}</h1>
            <button onClick={() => setDarkMode(!dark)}>Alterar Tema</button>
        </div>
    );
}

export default ButtonTemaMode