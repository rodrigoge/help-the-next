import React, { useState } from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom'
import api from '../../services/api'

export default function Register(){
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');

    async function handleRegister(e){
        e.preventDefault();

        const data = { name, phone, email, password, type };

        try {
            await api.post('/register', data);
            alert('Cadastrado com sucesso')
            console.log(data)
        } catch (err) {
            alert('Erro ao cadastrar')
            console.log(err)
        }
    }

    return(
        <div className="register-container">
            <form onSubmit={handleRegister}>
                <h1>Cadastre-se, é gratuito.</h1>

                <div className="input-group">
                    <div className="input-item" id="user-institution">
                        <input 
                            type="radio" 
                            name="type" 
                            id="institution" 
                            value="Instituição"
                            onChange={e => setType(e.target.value)}
                        />
                        <label htmlFor="institution">Instituição</label>
                    </div>

                    <img src={Logo} alt=""/>

                    <div className="input-item" id="user-ong">
                        <input 
                            type="radio" 
                            name="type" 
                            id="ong" 
                            value="ONG"
                            onChange={e => setType(e.target.value)}    
                        />
                        <label htmlFor="ong">Ong</label>
                    </div>
                </div>

                <input 
                    placeholder="Nome Completo"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input 
                    placeholder="WhatsApp/Telefone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />

                <input 
                    type="email" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="button" type="submit">Salvar</button>

                <Link className="link" to="/">
                    Voltar
                </Link>
            </form>
        </div>
    );
}