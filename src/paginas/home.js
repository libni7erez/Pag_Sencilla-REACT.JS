import React, { Component } from "react";
import Drawers from '../paginas/drawer'
import Fotos from '../imagen/menu_img'
import '../App.css'

class Home extends Component {
    render(){
        return (
            <div>
                <Drawers/>

            <div class="contenido_home">
            <h1 >Descargas</h1>
            {/*Empieza la lista de archivos */}
            <div >
             <Fotos/>
          </div>
          </div>



            </div>

        )
    }
}
export default  Home;
 
