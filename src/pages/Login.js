import React, { useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function Login({ history }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/login', {
            username,
            password
        })

        history.push('/inicio');
    }

    return(
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="FinDev"/>
                <h1>FinDev</h1>
                <input
                    placeholder="Usuário"
                    type="text"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input 
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Entrar</button>
            </form>
            <a href={'/novaSenha'} className="forgot">
                <span>Esqueceu a sua senha?</span>
            </a>
            <span className="signup">Não tem uma conta? <a href="/cadastro">Crie uma</a></span>
            <div className="background"></div>
        </div>
    );
}