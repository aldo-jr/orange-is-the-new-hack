import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
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
import Conexoes from "./views/Conexoes/Conexoes";
import './App.css';
import Footer from "./views/Shared/Footer";
import PerfilEmpresaDois from "./views/PerfilEmpresa/PerfilEmpresaDois";
import Segmento from "./views/Segmento/Segmento";
import ScrollToTop from './components/ScrollToTop'


const PrivateRoute = ({children}) => (
  <Route render={props => (
    localStorage.getItem('user') ? (
      children
    ) : (
      <Redirect to={{
        pathname: '/segmento'
      }}/>
    )
  )}/>
);
class App extends Component {
  render() {
    return (
      <Router className="App">
        <ScrollToTop>
          <Navbar/>

          <Switch>
            <Route exact path='/segmento' component={Segmento}/>

            <PrivateRoute>
              <Switch>

                <Route exact path='/' component={Home}/>
                <Route exact path='/empresa' component={PerfilEmpresa}/>
                <Route exact path='/empresa/ramo' component={PerfilEmpresaDois}/>
                <Route exact path='/perfil' component={PerfilUsuario}/>

                <Route exact path='/feed' component={Feed}/>
                <Route exact path='/detail' component={Detail}/>
                <Route exact path='/conexoes' component={Conexoes}/>
              </Switch>
            </PrivateRoute>
          </Switch>

          <Footer/>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
