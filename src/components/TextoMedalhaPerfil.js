import React from 'react';
import medalIco from "../assets/images/medal-ico.png";

export default class TextoMedalhaPerfil extends React.Component {
  render() {
    return (
      <div>
        <div className="divider"/>

        <div className='text-center'>
          <h5 className='text-white'>Seu perfil está {this.props.percent}% completo!</h5>

          <img src={medalIco} alt="Medalha" className='my-4'/>

          <h6 className='text-white'>Continue preenchendo e encontre empreendedoras que podem crescer junto com
            você!</h6>
          <b className='text-white'>Quanto mais conhecemos você, mais conseguiremos te ajudar :)</b>
        </div>
      </div>
    )
  }
}