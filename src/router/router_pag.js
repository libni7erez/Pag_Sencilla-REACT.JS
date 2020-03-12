import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
 
/*Otras importaciones */
import Home from "../paginas/home";
import Bienv from '../paginas/bienvenida';
import Pre_primaria from '../paginas/pre_primaria'
import Primaria from '../paginas/primaria'

class Routers extends Component {
  render() {
    return (
      <Router>
        <div>
         
 
          <Switch>
            <Route exact path="/" component={Bienv} />
            <Route path="/home" component={Home} />
            <Route path="/descargarPrePrimaria" component={Pre_primaria} />
            <Route path="/descargarPrimaria" component={Primaria} />
          </Switch>
 
    
        </div>
      </Router>
    );
  }
}

export default Routers;
  