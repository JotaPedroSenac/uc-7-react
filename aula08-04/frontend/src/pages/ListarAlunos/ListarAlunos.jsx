import React, { useEffect, useState } from "react";
import axios from 'axios';

function ListarAlunos(){

    const [alunos, setAlunos] = useState([])
    
    async function ListarAlunos(){
        try {
            const response = await axios.get('http://localhost:3000/alunos');
            if (response) {
                setAlunos(response.data);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        ListarAlunos();
    }, [])

    console.log(alunos);

    return (
        <div>
            <h1>Listagem de alunos</h1>
            <ul>
            {
                    alunos.map((aluno)=>(
                        <li key={aluno.matricula}>
                            {aluno.nome} - {aluno.email} - {aluno.matricula}
                        </li>
                    ))
            }
            </ul>
        </div>
    )
}

export default ListarAlunos;