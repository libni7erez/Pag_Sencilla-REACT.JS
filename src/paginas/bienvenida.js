import React from 'react';
import '../App.css';
import foto from '../imagen/niño.png';

/*Nuevas Importaciones*/
import AppBar from '../encabezado-Bar/app-bar'
import BUTTON from '../botones/boton'


import { Link } from "react-router-dom";


class Bienvenida extends React.Component{
  render(){
      return(
        <div class="root" >
          <AppBar/>
          <div class="figuras">
              <div class="circulo"></div>
              <div class="circulo1"></div>
              <div class="circulo2"></div>
              <div class="circulo3"></div>
              <div class="circulo4"></div>
              <div class="circulo5"></div>
              <div class="circulo6"></div>
              <div class="circulo7"></div>
              <div class="circulo8"></div>
              <div class="circulo9"></div>
              <div class="circulo10"></div>
              <div class="circulo11"></div>
              <div class="circulo12"></div>
            </div>
          <div class="bloque">
            
           <div class="izquierda">
            
            <img alt= "algo" src={foto} />
          </div>
          <div class="center">
          <div class="centro">
            <h1 class="h1s"> Bienvenidos</h1> 
            <h2> Descarga tu CNB de Preferencia</h2> 
            <Link  class="text_link" to= '/home'  >
            <BUTTON  name="Iniciemos"/> 
            </Link>
              </div> 
           
          </div>
          </div>
          </div>
             
           
      )
  }
}

export default Bienvenida;