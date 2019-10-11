import React, { useState } from 'react';

import api from '../services/api';

import logo from '../assets/logo.svg';
import { Exception } from 'handlebars';

export default function SignUp({ history }){
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

        await api.post('/register', {
            username,
            password,
            email
        }).then(response => {
            if(response.status === 200 && response.data.user){
                alert("Cadastro efetuado com sucesso! Faça login com o usuário " + response.data.user)
            
                history.push(`/`);
            }else{
                throw new Exception('Erro ao cadastrar.');
            }
        }).catch(error => {
            if(error.response && error.response.data.msg){
                return alert(error.response.data.msg);
            }
            if(error.message){
                return alert(error.message);
            }
        })
    }

    return(
        <div className="main-signup-container">
            <div className="signup-container">
                <div className="signup-logo">
                    <h1>Cadastro FinDev</h1>
                    <img src={logo} alt="FinDev"/>
                    <h2>FinDev</h2>
                </div>
                <div className="signup-form-container">
                    <h1>Cadastro FinDev</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="signup-form-itens">
                            <input
                                placeholder="Usuário do GitHub"
                                type="text"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                autoCapitalize="none"
                                required
                            />
                            <input
                                placeholder="E-mail"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                autoCapitalize="none"
                                autoComplete="none"
                                required
                            />
                            <input 
                                placeholder="Senha"
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
                            <button type="submit">Cadastrar</button>
                            <span className="signup">Já possui um cadastro? <a href="/">Entrar</a></span>
                        </div>
                    </form>
                </div>
            </div>
            <div className="background"></div>
        </div>
    )
}