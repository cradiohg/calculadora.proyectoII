import Display from "./Display"
import PaneldeBotones from "./PaneldeBotones"
import { Component } from "react"
import operaciones from "../logic/operaciones"
import "./App.css"

class App extends Component {

    state = {
      total: null,
      siguiente: null,
      operador: null,
    }

    handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))

    render () {
    return (
    <div className="component-app">
      <h1>Calculadora</h1>
     <Display value={this.state.siguiente || this.state.total || "0"} />
     <PaneldeBotones clickHandler={this.handleClick}  />
    </div>
    );
  }
}

export default App;
