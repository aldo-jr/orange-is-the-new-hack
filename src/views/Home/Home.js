import React from 'react';
import Button from "../../components/Button";
import {Typeahead} from 'react-bootstrap-typeahead'
import {SegmentosCnae} from "../../components/SegmentosCnae";

export default class Home extends React.Component {
  render() {
    return(
      <div className='container'>

        <div className="row justify-content-center mt-5">
          <div className="col-8 my-5">
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Nome"/>
              </div>
              <div className="form-group">
                <Typeahead
                  onChange={(selected) => {}}
                  options={SegmentosCnae}
                  placeholder='Segmento'
                />
              </div>

              <div className="form-group">
                <Button classes='btn-block' color='primary'>Continuar</Button>
              </div>
            </form>
          </div>
        </div>

      </div>
    )
  }
}