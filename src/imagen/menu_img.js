import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import fot from '../imagen/niños.png'
import { Link } from "react-router-dom";

class Menu_fotos extends Component {
  render() {
    return (

        <div>
          <div>
              <List class="listafotos" >
                  <div class="fotos1">
                  <Link class="text_Link" to="/descargarPrePrimaria">
                  <ListItem button>
                      <ListItemAvatar> 
                            <img class="primer" alt="" src={fot}/>   
                      </ListItemAvatar>
                      <ListItemText primary="CNB Pre-Primaria" secondary="Enero 9, 2020" />
                 
                  </ListItem>
                  </Link>
                  </div>

                  {/*segunda foto */}
                  <div class="fotos2">
                <Link class="text_Link" to="/descargarPrimaria">
                  
                  <ListItem button>
                      <ListItemAvatar> 
                          
                            <img class="primer" alt="" src={fot}/>  
                          
                      </ListItemAvatar>
                      <ListItemText primary="CNB Primaria" secondary="Enero 9, 2020" />
                 
                  </ListItem>
                  </Link>
                  </div>

              </List>
          </div>
 
          
 
    </div>
    );
  }
}
 
export default Menu_fotos;