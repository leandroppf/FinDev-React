import React, { useState } from 'react';
import '../css/SignUp.css';

import api from '../services/api';

import logo from '../assets/logo.svg'

export default function SignUp({ history }){
    return(
        <div className="main-signup-container">
            <div className="signup-container">
                <div className="signup-logo">
                    <h1>Cadastro FinDev</h1>
                    <img src={logo} alt="FinDev"/>
                </div>
                <div className="signup-form-container">
                    <h1>Cadastro FinDev</h1>
                    <form>
                        <div className="signup-form-itens">
                            <input
                                placeholder="Usuário do GitHub"
                                type="text"
                                required
                            />
                            <input
                                placeholder="E-mail"
                                type="email"
                                required
                            />
                            <input 
                                placeholder="Senha"
                                type="password"
                                required
                            />
                            <input 
                                placeholder="Repita a senha"
                                type="password"
                                required
                            />
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