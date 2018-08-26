import React from 'react';
import Button from "../../components/Button";
import {Typeahead} from 'react-bootstrap-typeahead'
import {SegmentosCnae} from "../../components/SegmentosCnae";
import ReactSwipe from 'react-swipe';

export default class Segmento extends React.Component {
  constructor() {
    super();
  }
  nextStep(e) {
    e.preventDefault();

    if(this.state.suggest) {
      this.reactSwipe.next();
      localStorage.setItem('segmento', this.state.suggest);
    }
  }

  handleClick(e) {
    e.preventDefault();

    console.log(this.state.name);
    if(this.state.name) {
      localStorage.setItem('user', this.state.name);
      this.props.history.push('/');
    }

  }

  render() {
    return(
      <div className='container' style={{background:'#87FCD5'}}>

        <form>

          <ReactSwipe ref={reactSwipe => this.reactSwipe = reactSwipe} className="carousel" swipeOptions={{continuous: false, disableScroll: true}}>
            <div>
              <div className="row justify-content-center py-5">
                <div className="col-10 my-5">
                  <div className="form-group text-center">
                    <label htmlFor="segmento" className='text-center'>
                      <h2>Seu negócio pertence à qual segmento?</h2>
                    </label>
                    <Typeahead
                      onChange={(selected) => {this.setState({suggest:selected})}}
                      options={SegmentosCnae}
                      id='segmento'
                    />
                  </div>

                  <div className="form-group text-right">
                    <Button color='we-cta' onClick={this.nextStep.bind(this)}>Próximo</Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="row justify-content-center py-5">
                <div className="col-10 my-5">

                  <div className="form-group text-center">
                    <label htmlFor="segmento" className='text-center'>
                      <h2>Qual o seu nome?</h2>
                    </label>
                    <input type="text" className="form-control" placeholder="Qual o seu nome?" onChange={(value) => {this.setState({name:value.target.value})}}/>
                  </div>

                  <div className="form-group text-right">
                    <Button color='we-cta' onClick={this.handleClick.bind(this)}>Enviar</Button>
                  </div>

                </div>
              </div>
            </div>


          </ReactSwipe>
        </form>
      </div>
    )
  }
}