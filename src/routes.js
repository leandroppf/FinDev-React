import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import Main from './pages/Main';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/cadastro" component={SignUp}/>
                <Route path="/novaSenha" component={ForgotPass}/>
                <PrivateRoute path="/inicio/:id" component={Main}/>
                <Route path="*" component={Login}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;