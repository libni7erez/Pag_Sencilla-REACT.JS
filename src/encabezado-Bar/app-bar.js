import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import '../App.css'

class AppBars extends React.Component{
    render(){
        return(
            <div>
                <AppBar  Position="fixed">
                    <Toolbar >

                    </Toolbar>
                </AppBar>

            </div>

        )
    }
}

export default AppBars;