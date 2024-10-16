import React, {Component} from 'react';
import './estilo.css'
 
import biscoito from './assets/biscoito.png';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.','o bom-senso vale mais do que muito conhecimento.',
      'O riso e a menor distancia entre duas pessoas.',
      'Deixe de lado as preocupaçoes e seja feliz.',
      'Realize o obvio, pense no improvavel e conquiste o impossivel.',
      'Acredite em milagres, mas nao dependa deles.',
      'A maior barreira para o sucesso e o medo do fracasso.'];

  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = ' "' + this.frases[numeroAleatorio] + ' "'  }
  this.setState(state);

render(){
  return(
    <div className='container'>
      <img src={biscoito} className='img' />
      <botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
      <h3 className='textoFrase'>{this.state.textoFase}</h3>
    </div>

  );
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn} >{this.props.nome}</button>

      </div>
    );
  }
}

export default App;
