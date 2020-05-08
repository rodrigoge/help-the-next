import React from 'react'
import './styles.css'
import Logo from '../../assets/Logo.png'
import {Link} from 'react-router-dom'

export default function About(){
    return(
        <div className="about-container">
            <div>
                <h1>Sobre o Help The Next</h1>
                <img src={Logo} alt="Help The Next"/>

                <p>
                    É um projeto que procura unir as necessidades de instituições e ONG’s carentes com a vontade 
                    em ajudar das pessoas. Nós queremos conectar você aos centros e organizações que mais precisam de apoio. 
                    Por isso, ajude o próximo, <strong>Help The Next!</strong>
                </p>

                <Link className="link" to="/">
                    Voltar
                </Link>
            </div>
        </div>
    );
}