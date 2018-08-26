import React from 'react';
import Button from "../../components/Button";

export default class PerfilUsuario extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className="row justify-content-center my-4">
          <h2 className='we-title'>Perfil</h2>

          <div className="col-11">
            <h6 className='text-center'>Sobre você</h6>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <div className="col py-4" style={{background: '#87FCD5'}}>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Qual o seu nome?"/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="E seu e-mail de contato?"/>
                </div>

                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Nos passe seu celular."/>
                </div>


                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Crie uma senha"/>
                </div>

                <div className="form-group">
                  <input type="password" className="form-control" placeholder="Confirme a senha"/>
                </div>

                <div className="custom-file">
                  <input type="file" className="custom-file-input" id="validatedCustomFile"/>
                  <label className="custom-file-label" htmlFor="validatedCustomFile">Escolha uma foto sua =)</label>
                </div>

                <div className="form-group text-center mt-4">
                  <Button classes='btn btn-lg' color='we-cta' onClick={(e) => {e.stopPropagation(); this.props.history.push('/empresa')}}>Salvar</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}