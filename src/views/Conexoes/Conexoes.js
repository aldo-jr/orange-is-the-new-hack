import React from 'react';
import wppIcon from '../../assets/images/whatsapp.png';

import amarcare from '../../assets/images/adult-application-applying-1332186.png';
import cabeloecia from '../../assets/images/ayurveda-for-hair-growth2.png';
import NirvanaSpa from '../../assets/images/adult-ancient-art-204649.png';
import ImprimeMais from '../../assets/images/color-color-palette-colors-259714.png';

export default class Conexoes extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center my-4">
          <h2 className='we-title'>Conexões</h2>
        </div>

        <div className="row justify-content-between align-items-stretch mb-4">

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={ImprimeMais}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Gráfica</p>
                <h5 className="card-title">ImprimeMais</h5>

                <div className="d-flex align-items-center">
                  <img src={wppIcon} alt="Whats ico"/><p className="small my-0 ml-1">(11) 99876-4321</p>
                </div>
                <p className='small'>imprimemais@grafica.com.br</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={amarcare}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>

                <div className="d-flex align-items-center">
                  <img src={wppIcon} alt="Whats ico"/><p className="small my-0 ml-1">(11) 99876-4321</p>
                </div>
                <p className='small'>AmarCare@cosmeticos.com.br</p>
              </div>
            </div>
          </div>


        </div>

        <div className="row justify-content-between align-items-stretch mb-4">
          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={cabeloecia}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Cosmeticos</p>
                <h5 className="card-title">Cabelo&Cia</h5>

                <div className="d-flex align-items-center">
                  <img src={wppIcon} alt="Whats ico"/><p className="small my-0 ml-1">(11) 99876-4321</p>
                </div>
                <p className='small'>cabeloecia@cabele.com.br</p>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={NirvanaSpa}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Estética</p>
                <h5 className="card-title">NirvanaSpa</h5>

                <div className="d-flex align-items-center">
                  <img src={wppIcon} alt="Whats ico"/><p className="small my-0 ml-1">(11) 99876-4321</p>
                </div>
                <p className='small'>nirvana@spa.com.br</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}