import React from 'react'
import Sidebar from '../components/Sidebar';
import {Route,Switch} from 'react-router-dom';
const Hola = () => <div>Hola a todos</div>;
const Adios = () => <div>Adios a todos</div>;
export default function Home() {
    debugger;
    return (
        <div className="app">
            <Sidebar/>
            <Switch >
            <Route path="/contacts" >
                {Hola}
            </Route>
            <Route path="/ubications">
                {Adios}
            </Route>
            </Switch>
        </div>
    )
}
