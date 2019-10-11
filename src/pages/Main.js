import React, { useEffect, useState } from 'react';
import '../css/Main.css';

import api from '../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/likeYellow.svg';
import dislike from '../assets/cancel.svg';

import { getAccount } from "../services/auth";

export default function Main({ match }){
    const [users, setUsers] = useState([]);
    const [account, setAccount] = useState({});

    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })

            setUsers(response.data);
            setAccount(getAccount());
        }

        loadUsers();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: {user: match.params.id}
        })

        setUsers(users.filter(user => user._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: {user: match.params.id}
        })

        setUsers(users.filter(user => user._id !== id));
    }

    return(
        <div className="main-container">
            <div className="content">
                <div className="user-info">
                    <img src={account.avatar} alt={account.name}/>
                        <footer>
                            <strong>{account.name}</strong>
                            <p>{account.bio}</p>
                        </footer>
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
                                    </footer>
                                    <div className="buttons">
                                        <button type="button" onClick={() => handleDislike(user._id)}>
                                            <img src={dislike} alt="Dislike"/>
                                        </button>
                                        <button type="button" onClick={() => handleLike(user._id)}>
                                            <img src={like} alt="Like"/>
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="empty">Acabou :(</div>
                    )}
                </div>
            </div>
            <div id="backMain" className="background"></div>
        </div>
    )
}