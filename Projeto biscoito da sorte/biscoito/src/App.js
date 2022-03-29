import React, {Component} from "react";
import './estilo.css';
class App extends Component{
  constructor(props){
    super(props)
    this.state ={
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['frase1', 'frase2', 'frase3']
  }
  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = this.frases[numeroAleatorio];
    this.setState(state);
  }
  render(){
    return(
      <div className="container">
        <img className="img" src={require('./Assets/biscoito.png')} alt="biscoito"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}
class Botao extends Component{
  render(){
    return(
      <div>
        <button id="botao" onClick={this.props.acaoBtn}> {this.props.nome}</button>
      </div>
    )
  }
}
export default App;
