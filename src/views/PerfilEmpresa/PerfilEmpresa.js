import React from 'react'
import Button from "../../components/Button";
import TextoMedalhaPerfil from "../../components/TextoMedalhaPerfil";

export default class PerfilEmpresa extends React.Component {
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
              <div className="progress-bar" role="progressbar" style={{width: '20%', background: '#06B77C'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <div className="col py-4" style={{background: '#06B77C'}}>
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="CNPJ"/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Sub segmento"/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Razão social"/>
                </div>


                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nome fantasia"/>
                </div>

                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Endereço"/>
                </div>

                <div className="form-group text-center mt-4">
                  <Button classes='btn btn-lg mx-1' color='we-cta'>Salvar</Button>
                  <Button classes='btn btn-lg mx-1' color='we-cta' onClick={(e)=>{e.stopPropagation(); this.props.history.push('/empresa/ramo')}}>Próximo</Button>
                </div>
              </form>

              <TextoMedalhaPerfil percent='20'/>
            </div>
          </div>
        </div>

      </div>
    )
  }
}