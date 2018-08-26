import React from 'react';
import {Link} from 'react-router-dom';

export default class Feed extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center my-4">
          <h2>Conecte-se</h2>

          <div className="col-11">
          <h6 className='text-center'>
            A partir do seu segmento, selecionamos algumas empresas com as quais você pode compartilhar
          </h6>
          </div>
        </div>

        <div className="row justify-content-between align-items-stretch">
          <div className="col-6 d-flex   align-items-stretch">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">Cabelo e Cia</h5>
                <Link to='/detail'className="btn btn-sm btn-primary">Conheça</Link>
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
              <label className="btn btn-primary active flex-grow-1">
                <input type="checkbox" name="options" id="option1" defaultChecked /> Veganos
              </label>
              <label className="btn btn-primary flex-grow-1">
                <input type="checkbox" name="options" id="option2" /> Reciclados
              </label>
              <label className="btn btn-primary flex-grow-1">
                <input type="checkbox" name="options" id="option3" /> Plásticos
              </label>
            </div>
          </div>
        </div>

        <div className="row mt-2">
          <div className="col">
            <div className="btn-group btn-group-toggle d-flex" data-toggle="buttons">
              <label className="btn btn-primary active flex-grow-1">
                <input type="checkbox" name="options" id="option4" /> Estética
              </label>
              <label className="btn btn-primary flex-grow-1">
                <input type="checkbox" name="options" id="option5" /> Saúde
              </label>
                <button className="btn btn-primary flex-grow-1 dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Outros
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-stretch my-3">
          <div className="col-6 d-flex   align-items-stretch">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>


          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">Cabelo e Cia</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-stretch my-3">
          <div className="col-6 d-flex   align-items-stretch">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>


          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">Cabelo e Cia</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-between align-items-stretch my-3">
          <div className="col-6 d-flex   align-items-stretch">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">AmarCare</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>


          <div className="col-6">
            <div className="card">
              <img className="card-img-top"
                   src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16574c9a074%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16574c9a074%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.1953125%22%20y%3D%2296.6%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                   alt="Card image cap"/>
              <div className="card-body">
                <p className="card-text">Cosmeticos</p>
                <h5 className="card-title">Cabelo e Cia</h5>
                <a href="#" className="btn btn-sm btn-primary">Conheça</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}