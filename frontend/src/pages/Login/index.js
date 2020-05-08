import React, { useState } from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            await api.post('/', { email, password });

            localStorage.setItem('email', email);
            localStorage.setItem('password', password);

            alert('Login efetuado com sucesso')

            history.push("/casos");

        } catch (err) {
            console.log(err)
            alert('Falha no Login, tente novamente')
        }
    }

    return(
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <img src={Logo} alt="Help The Next"/>

                <p>Bem vindo ao <strong>Help The Next</strong></p>
            
                <input 
                    placeholder="Seu e-mail"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    placeholder="Sua senha"
                    value={password}
                    type="password"
                    onChange={e => setPassword(e.target.value)}
                />

                <button className="button" type="submit">Entrar</button>

                <Link className="link" to="/cadastro">
                    Ainda não possui cadastro? Clique aqui
                </Link>

                <Link className="link" to="/sobre">
                    <strong>Help The Next</strong>, conheça mais sobre nós
                </Link>
            </form>
        </div>
    );
}
