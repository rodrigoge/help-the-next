import React, { useState } from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom'
import api from '../../services/api'

export default function NewCase(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const users_id = localStorage.getItem('users_id');

    async function handleNewCase(e){
        e.preventDefault();

        const data = { title, description };

        try {
            await api.post('cases', data, {
                headers: {
                    Authorization: users_id,
                }
            })

            alert('Caso cadastrado com sucesso')
        } catch (err) {
            alert('Erro ao cadastrar caso')
            console.log(err)
        }
    }

    return(
        <div className="register-newcase-container">
            <form onSubmit={handleNewCase}>
                <h1>Cadastrar caso</h1>
                <img src={Logo} alt="Help The Next"/>

                <input 
                    placeholder="Título"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <textarea 
                    placeholder="Descrição" 
                    maxLength="250"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />

                <button className="button" type="submit">Salvar</button>

                <Link className="link" to="/casos">
                    Voltar
                </Link>
            </form>
        </div>
    );
}