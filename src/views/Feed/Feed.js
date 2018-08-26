import React from 'react';
import {Link} from 'react-router-dom';

import amarcare from '../../assets/images/adult-application-applying-1332186.png';
import cabeloecia from '../../assets/images/ayurveda-for-hair-growth2.png';
import NirvanaSpa from '../../assets/images/adult-ancient-art-204649.png';
import ImprimeMais from '../../assets/images/color-color-palette-colors-259714.png';


export default class Feed extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center my-4">
          <h2 className='we-title'>Conecte-se</h2>

          <div className="col-11">
          <h6 className='text-center'>
            A partir do seu segmento, selecionamos algumas empresas com as quais você pode compartilhar
          </h6>
          </div>
        </div>

        <div className="row justify-content-between align-items-stretch">
          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={amarcare}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>
                <Link to='/detail' className="btn btn-sm btn-we-cta">Conheça</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={cabeloecia}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Cosmeticos</p>
                <h5 className="card-title">Cabelo&Cia</h5>
                <Link to='/detail' className="btn btn-sm btn-we-cta">Conheça</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center my-4">
          <div className="col-11">
            <h6 className='text-center'>
              Selecione outras opções relacionadas ao seu negócio e encontre mais negócios relacionados ao seu :)
            </h6>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
              <label className="btn btn-we-secondary active flex-grow-1">
                <input type="checkbox" name="options" id="option1" defaultChecked /> Veganos
              </label>
              <label className="btn btn-we-secondary flex-grow-1">
                <input type="checkbox" name="options" id="option2" /> Reciclados
              </label>
              <label className="btn btn-we-secondary flex-grow-1">
                <input type="checkbox" name="options" id="option3" defaultChecked /> Plásticos
              </label>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
              <label className="btn btn-we-secondary active flex-grow-1">
                <input type="checkbox" name="options" id="option4" defaultChecked /> Estética
              </label>
              <label className="btn btn-we-secondary flex-grow-1">
                <input type="checkbox" name="options" id="option5" /> Saúde
              </label>
                <button className="btn btn-we-secondary flex-grow-1 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Outros
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="">Action</a>
                  <a className="dropdown-item" href="">Another action</a>
                  <a className="dropdown-item" href="">Something else here</a>
                </div>
            </div>
          </div>
        </div>


        <div className="row justify-content-between align-items-stretch my-3">
          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={NirvanaSpa}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Estética e corpo</p>
                <h5 className="card-title">NirvanaSpa</h5>
                <Link to='/detail' className="btn btn-sm btn-we-cta">Conheça</Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src={ImprimeMais}
                   alt="Card cap"/>
              <div className="card-body">
                <p className="card-text mb-0">Gráfica</p>
                <h5 className="card-title">ImprimeMais</h5>
                <Link to='/detail' className="btn btn-sm btn-we-cta">Conheça</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}