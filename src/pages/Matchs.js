import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import '../css/Main.css';
import baseUrl from '../config/config';

import api from '../services/api';

import logo from '../assets/logo.svg';
import logoutIcon from '../assets/logout.svg';
import itsMatch from '../assets/match.svg';

import { getAccount, logout } from "../services/auth";

export default function Dislikes({ history, match }){
    const [users, setUsers] = useState([]);
    const [account, setAccount] = useState({});

    const [matchDev, setMatchDev] = useState(null);

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/matchs', {
                headers: {
                    user: match.params.id
                }
            });

            setUsers(response.data);
            setAccount(getAccount());
        }

        loadUsers();
    }, [match.params.id]);

    useEffect(() => {
        const socket = io(baseUrl, {
            query: { user: match.params.id}
        });

        socket.on('match', dev => {
            setMatchDev(dev);
        });
        
    }, [match.params.id]);

    async function logoutFunction() {
        logout();
        history.push(`/`);
    }

    return(
        <div className="main-container">
            <div className="content">
                <div className="left-info">
                    <div className="left-info-logo">
                        <img className="left-info-logo" src={logo} alt="FinDev"/>
                        <h1>FinDev</h1>
                    </div>
                    <div className="user-info">
                        <img src={account.avatar} alt={account.name}/>
                            <footer>
                                <strong>{account.name}</strong>
                                <p>{account.bio}</p>
                            </footer>
                            <div className="user-info-buttons">
                                <button type="button" onClick={() => {
                                    history.push(`/sem-interesse/${account._id}`);
                                }}>
                                    Sem interesse
                                </button>
                                <button type="button" onClick={() => {
                                    history.push(`/curtidas/${account._id}`);
                                }}>
                                    Curtidas
                                </button>
                            </div>
                            <button className="match-button" type="button" onClick={() => {
                                    history.push(`/inicio/${account._id}`);
                                }}>
                                    Início
                            </button>
                    </div>
                </div>
                <div className="main-list">
                    { users.length > 0 ? (
                        <ul>
                            {users.map(user => (
                                <li key={user._id}>
                                    <img src={user.avatar} alt={user.name}/>
                                    <footer>
                                        <strong>{user.name}</strong>
                                        <p>{user.bio}</p>
                                        <p>Usuário do GitHub: {user.user}</p>
                                        <p>E-mail: {user.email}</p>
                                    </footer>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty">Você ainda não possui combinações.</div>
                    )}
                </div>
            </div>
            <div id="backMain" className="background"></div>
            <div className="logout">
                <button type="button" onClick={() => logoutFunction()}>
                    <img src={logoutIcon} alt="Logout"/>
                </button>
            </div>

            { matchDev && (
                <div className="match-container">
                    <img className="matchImg" src={itsMatch} alt="Combinação"/>
                    <span>Parabéns!!!</span>   
                    <span>Você obteve uma combinação com</span>
                    <img className="matchAvatar" src={matchDev.avatar} alt=""/>
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>
                    <button type="button" onClick={() => setMatchDev(null)}>Fechar</button>
                </div>
            )}
        </div>
    )
}