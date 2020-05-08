import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Register from './pages/Register';
import NewCase from './pages/NewCase';
import Cases from './pages/Cases';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/sobre" component={About}/>
                <Route exact path="/cadastro" component={Register}/>
                <Route exact path="/novo-caso" component={NewCase}/>
                <Route exact path="/casos" component={Cases}/>
            </Switch>
        </BrowserRouter>
    );
}