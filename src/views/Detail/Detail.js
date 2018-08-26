import React from 'react';
import detailImg from '../../assets/images/ayurveda-for-hair-growth.png';
import moneyIco from '../../assets/images/money.png';
import publicationIco from '../../assets/images/publication.png';
import './Detail.css'
import Button from "../../components/Button";

export default class Detail extends React.Component {
  constructor() {
    super();

    this.state = {connected: false}
  }

  connect() {
    this.setState({connected:true});
  }

  render() {
    return (
      <div className='container'>
        <div className="row justify-content-center my-4">
          <h2>Cabelo&Cia</h2>

          <div className="col-11">
            <h6 className='text-center'>Cosméticos</h6>
          </div>
        </div>

        <div className="row justify-content-center">
          <img src={detailImg} alt="Foto de perfil"/>
        </div>

        <div className="row justify-content-center my-4">
          <div className="col text-center">
            <p>Empreendedora: Ana Carolina Monteiro</p>
          </div>
        </div>

        <div className="row justify-content-center mb-4">
          <div className="col text-center">
            <h4>Afinidades entre você e Cabelo&Cia</h4>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <div className="greenBaloon text-success my-3">
                  Investir ou produzir juntas
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="greenText text-success small">
                  Pela natureza dos negócios de vocês, identificamos que uma parceria para ampliar o maquinário e
                  material de produção poderia ser interessante. O que acha?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <img src={moneyIco} alt="Icone, dinheiro"/>
          </div>
        </div>


        <div className="row justify-content-center">
          <div className="col-8">
            <div className="row">
              <div className="col">
                <div className="greenBaloon text-success mb-3">
                  Reduzir custos semelhantes
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p className="greenText text-success small">
                  Pode ser que você e Cabelo&Cia precisem comprar insumos e matérias primas semelhantes para as
                  respectivas produções. Já pensou em reduzir o custo de logística dividindo e negociando junto ao
                  fornecedor com a Ana Carolina? </p>
              </div>
            </div>
          </div>
          <div className="col-4 mt-2">
            <img src={publicationIco} alt="Icone, dinheiro"/>
          </div>
        </div>

        {this.state.connected ? (
          <div className="row">
            <div className="col">
              <div className="alert alert-success">
                <b>Solicitação enviada com sucesso!</b>
                <p>
                  Assim que Ana Carolina aceitar, vocês poderão ver os contatos uma da outra para iniciar uma conversa!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="row mb-5">
            <div className="col">
              <Button color='primary' classes='btn-block' onClick={this.connect.bind(this)}>Conecte-se com a empreendedora</Button>
            </div>
          </div>
        )}
      </div>
    )
  }
}