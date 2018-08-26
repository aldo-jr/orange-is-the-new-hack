import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-we-lightgreen">
        <Link className="navbar-brand" to="/">We</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink exact to='/feed'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to='/empresa'>Perfil da empresa</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to='/perfil'>Meu Perfil</NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}