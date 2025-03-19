import {React, useState} from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import bandas from "../../data/bancoBands";
import Band from "../../components/Band";
import Header from "../../components/Header";
import Aside from "../../components/Aside";
import Footer from "../../components/Footer";
import styles from "./BandDetalhes.module.css";

function BandDetalhes() {
    const [curiosidade, setCuriosidade] = useState('');
    const {slug} = useParams();
    const band = bandas.find((b) => b.slug === slug);
    if (!band) return <h2>Banda não encontrada</h2>
    return(
        <>
                <Header/>
                <section className={styles.container}>
                <Band {...band} />
                    <Link to={`/`} className={styles.botao}>
                        <button>Voltar</button>
                    </Link>
                    <button onClick={()=>setCuriosidade(band.curiosidade)}>galeria</button>
                    <img
                    src={curiosidade}
                    />
                </section>

                <Aside/>
                <Footer />
        </>
    )
}

export default BandDetalhes;