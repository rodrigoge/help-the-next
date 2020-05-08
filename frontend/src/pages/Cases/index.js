import React, { useState, useEffect } from 'react'
import './styles.css'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Cases(){
    const [cases, setCases] = useState([]);
    const user_id = localStorage.getItem('users_id');
    const history = useHistory();

    useEffect(() => {
        api.get('cases').then(response => {
            setCases(response.data);
        }, [user_id])
    });

    async function handleDelete(id){
        try{
            await api.delete(`cases/${id}`, {
                headers: {
                    Authorization: user_id
                }
            });

            setCases(cases.filter(cases => cases.id !== id));
        } catch(err){
            alert("Erro ao deletar")
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push("/");
    }

    return(
        <div className="cases-container">
            <div>
                <h1>Casos disponíveis</h1>

                <header>
                    <Link className="link" to="/novo-caso">
                        Novo caso
                    </Link>

                    <button type="button" className="link" onClick={handleLogout}>
                        Sair
                    </button>
                </header>

                <ul>
                    {cases.map(cases => (
                        <li key={cases.id}>
                            <strong>Caso: </strong>
                            <p>{cases.title}</p>

                            <strong>Descrição: </strong>
                            <p>{cases.description}</p>

                            <button type="button" onClick={() => handleDelete(cases.id)}>
                                Remover
                            </button>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}