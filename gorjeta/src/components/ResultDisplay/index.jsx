import React from "react"
import style from "./ResultDisplay.module.css"

function ResultDisplay({gorjeta, total}) {

  return (
    <>
        <div className={style.display}>
            <p>Gorjeta: {gorjeta}</p>
            <p>Total: {total}</p>
        </div>
    </>
  )
}

export default ResultDisplay
