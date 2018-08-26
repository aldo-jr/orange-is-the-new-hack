import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-we-lightgreen">
        <Link className="navbar-brand" to="/">We</Link>
        <button className="navbar-toggler" type="button" id='testealdoo' data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to='/conexoes'>Minhas conexões</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}