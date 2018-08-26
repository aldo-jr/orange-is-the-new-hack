import React from 'react'

import Button from "../../components/Button";
import TextoMedalhaPerfil from "../../components/TextoMedalhaPerfil";


export default class PerfilEmpresaDois extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className="row justify-content-center my-4">
          <h2 className='we-title'>Perfil</h2>

          <div className="col-11">
            <h6 className='text-center'>Sobre seu negócio</h6>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '40%', background: '#FF5F0C'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <div className="col py-4" style={{background: '#FF5F0C'}}>
              <form>
                <div className="form-group">
                  <label className='text-white'>Quais matérias-primas fazem parte do seu negócio?</label>
                  <input type="text" className="form-control" placeholder="Exemplo: óleos essenciais, embalagens de vidro"/>
                </div>

                <div className="form-group">
                  <label className='text-white'>Você necessita de logística de entrega? Se sim, descreva como é.</label>
                  <input type="text" className="form-control" placeholder="Exemplo: motoboy, frete via transportadora."/>
                </div>


                <div className="form-group text-center mt-4">
                  <Button classes='btn btn-lg mx-1' color='we-cta' onClick={(e) => {e.stopPropagation(); this.props.history.push('/')}}>Salvar</Button>
                  <Button classes='btn btn-lg mx-1' color='we-cta'>Próximo</Button>
                </div>
              </form>

              <TextoMedalhaPerfil percent='40'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}