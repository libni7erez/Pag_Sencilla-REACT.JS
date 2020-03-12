import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';


class Botonn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            botoness:"Button"
        }
    }
    render(){
        return(
            <Button   variant="contained" color="primary">
              {this.props.name}
            </Button>
           

        )
    }
}

export default Botonn;
