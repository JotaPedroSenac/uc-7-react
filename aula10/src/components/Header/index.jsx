import React from "react";
import style from './Header.module.css';

export default function Header(){
    return (
        <>
            <header className={ style.header }>
                <h1>Minha Página</h1>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Sobre</a>
                        </li>
                        <li>
                            <a href="#">Contato</a>
                        </li>
                        <li>
                            <button>Login</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}