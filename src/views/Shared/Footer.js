import React from 'react';
import logo from '../../assets/images/Logo.png'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="main-we-footer text-center p-5 mt-3" style={{background:'#EAFEF7'}}>
        <img src={logo} alt="Logo" style={{maxWidth:'150px'}} className='my-5'/>
      </footer>
    )
  }
}