import React, { useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function ForgotPass({ history }){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeated, setPassRepeated] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(!(password === passRepeated)){
            var errorSpan = document.getElementById('errorSpan');
            return (errorSpan.style.display = 'block');
        }

    }

    return(
        <div className="main-signup-container">
            <div className="signup-container">
                <div className="signup-logo">
                    <h1>Mudar senha</h1>
                    <img src={logo} alt="FinDev"/>
                    <h2>FinDev</h2>
                </div>
                <div className="signup-form-container">
                    <h1>Mudar senha</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-form-itens">
                            <input
                                placeholder="Seu usuário"
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                autoCapitalize="none"
                                required
                            />
                            <input
                                placeholder="Seu E-mail"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoCapitalize="none"
                                autoComplete="none"
                                required
                            />
                            <input 
                                placeholder="Nova Senha"
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                            <input 
                                placeholder="Repita a senha"
                                type="password"
                                value={passRepeated}
                                onChange={e => setPassRepeated(e.target.value)}
                                required
                            />
                            <div className="span-div">
                                <span id="errorSpan">As senhas estão diferentes.</span>
                            </div>
                            <button type="submit">Mudar senha</button>
                            <span className="signup">Lembrou sua senha? <a href="/">Entrar</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="background"></div>
        </div>
    )
}