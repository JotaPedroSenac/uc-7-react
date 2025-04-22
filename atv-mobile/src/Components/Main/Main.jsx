import styles from "./Main.module.css"
import Intro from "../Intro/Intro";
import Tipos from "../Tipos/Tipos";
import Noticias from "../Noticias/Noticias";
import Frameworks from "../Frameworks/Frameworks";
import Recursos from "../Recursos/Recursos";

function Main() {
    return(
        <main className={styles.main}>
            <Intro />
            <Tipos />
            <Noticias />
            <Frameworks />
            <Recursos />
        </main>
    );
}

export default Main