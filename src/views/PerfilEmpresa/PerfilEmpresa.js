import React from 'react'
import {SegmentosCnae} from "../../components/SegmentosCnae";
import Button from "../../components/Button";

export default class PerfilEmpresa extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className="row mt-4 mb-3">
          <div className="col">
            <h3>Perfil da empresa</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Segmento"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Sub Segmento"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Razão Social"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome Fantasia"/>
              </div>

              <div className="form-group">
                <input type="text" className="form-control" placeholder="Endereço"/>
              </div>

              <div className="form-group">
                <Button classes='btn-block' color='primary'>Salvar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}