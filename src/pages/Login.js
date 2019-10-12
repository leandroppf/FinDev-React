import React, { useState } from 'react';

import api from '../services/api';
import { login, setAccount } from "../services/auth";

import logo from '../assets/logo.svg'

export default function Login({ history }){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        if(!username || !password){
            return alert("Preencha usuário e senha para continuar!");
        }else{
            try{
                const response = await api.post('/auth', {
                    user: username,
                    password
                });
                login(response.data.token);
                setAccount(response.data.account);
                const { _id } = response.data.account;
                history.push(`/inicio/${_id}`);
            }catch(error){
                if(error.response && error.response.data.error){
                    return alert(error.response.data.error);
                }
                if(error.message){
                    return alert(error.message);
                }
            }
        }
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
                    autoCapitalize="none"
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