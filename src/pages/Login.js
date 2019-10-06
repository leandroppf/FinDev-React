import React from 'react';
import './Login.css';

import logo from '../assets/logo.svg'

export default function Login(){
    return(
        <div className="login-container">
            <form>
                <img src={logo} alt="FinDev"/>
                <input
                    placeholder="Usuário"
                    type="text"
                    required
                />
                <input 
                    placeholder="Senha"
                    type="password"
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            <a className="forgot">
                <span>Esqueceu a sua senha?</span>
            </a>
            <span className="signup">Não tem uma conta? <a>Crie uma</a></span>
            <div className="background"></div>
        </div>
    );
}