import React from 'react';
import Button from "../../components/Button";

export default class PerfilUsuario extends React.Component {
  render() {
    return(
      <div className='container'>
        <div className="row mt-4 mb-3">
          <div className="col">
            <h3>Seu Perfil</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome"/>
              </div>

              <div className="form-group">
                <input type="tel" className="form-control" placeholder="Tel"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Email"/>
              </div>

              <div className="form-group">
                <Button classes='btn-block' color='primary'>Salvar</Button>
              </div>
            </form>
            <hr className='my-4' />
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Senha"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Confirmar Senha"/>
              </div>

              <div className="form-group">
                <Button classes='btn-block' color='primary'>Alterar senha</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}