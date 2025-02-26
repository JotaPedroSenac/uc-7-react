import React from "react";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";

export default function Contato() {
    return(
        <>
            <Header />
                <main>
                    <form action="#" method="post">
                        <div>
                            <label htmlFor="#">Nome:</label>
                            <input type="text" placeholder="Digite seu nome"/>
                            <input type="button" value="Enviar" />
                        </div>
                    </form>
                </main>
            <Footer />
        </>
    )
}

