import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import Main from './pages/Main';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/cadastro" component={SignUp}/>
            <Route path="/novaSenha" component={ForgotPass}/>
            <Route path="/inicio/:id" component={Main}/>
        </BrowserRouter>
    );
}