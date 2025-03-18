import React from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import bandas from "../../data/bancoBands";
import Band from "../../components/Band"
import styles from "./BandDetalhes.module.css"

function BandDetalhes() {
    const { id } = useParams();
    const band = bandas.find((b) => b.id === parseInt(id));
    if (!band) return <h2>Banda não encontrada</h2>
    return(
        <>
            <div>
                <Band {...band} />
                <div className={styles.botao}>
                    <Link to={`/`}>
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default BandDetalhes;