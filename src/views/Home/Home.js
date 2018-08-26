import React from 'react';
import Button from "../../components/Button";
import logo from '../../assets/images/Logo.png'

export default class Home extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className="row justify-content-center py-5" style={{background: '#87FCD5'}}>
          <div className="col-12 text-center">
            <h1>Olá, Juliana</h1>

            <img src={logo} alt="We" style={{maxWidth: '250px'}} className='my-4'/>

            <h3>Comece agora mesmo a sua rede de mulheres empreendedoras e cresçam juntas.</h3>

            <Button color='we-cta' classes='btn-block mt-5' onClick={() => this.props.history.push('/feed')}>Conecte-se</Button>
            <Button color='we-cta' classes='btn-block my-3' onClick={() => this.props.history.push('/perfil')}>Complete seu perfil e encontre
              mais empresas</Button>
            <Button color='we-cta' classes='btn-block'>Opções para crescer o seu negócio</Button>
          </div>
        </div>

        <div className="row my-4">
          <div className="col text-center">
            <h2>
              Tem dúvidas? <br/> Fale com a gente :)
            </h2>
          </div>
        </div>

        <div className="row py-4" style={{background:'#87FCD5'}}>
          <div className="col">
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
                <textarea cols="30" rows="7" className='form-control' placeholder='Digite sua mensagem...' />
              </div>

              <div className="form-group text-center mt-4">
                <Button classes='btn btn-lg' color='we-cta'>Enviar</Button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}