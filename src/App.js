import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import Home from "./views/Home/Home";
import Navbar from "./views/Shared/Navbar";
import PerfilEmpresa from "./views/PerfilEmpresa/PerfilEmpresa";
import PerfilUsuario from "./views/PerfilUsuario/PerfilUsuario";
import Feed from "./views/Feed/Feed";
import Detail from "./views/Detail/Detail";

class App extends Component {
  render() {
    return (
      <Router className="App">
        <div>
          <Navbar/>

          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/empresa' component={PerfilEmpresa}/>
            <Route exact path='/perfil' component={PerfilUsuario}/>

            <Route exact path='/feed' component={Feed}/>
            <Route exact path='/detail' component={Detail}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
