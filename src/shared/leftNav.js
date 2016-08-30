import React,{Component} from 'react';
import AppLeftNav from 'material-ui/lib/left-nav';

class LeftNav extends Component{
    constructor(props){
        super(props);
        this.state={
            open: false
        }
    }

    handleToggle(){
        this.setState({
            open: !this.state.open
        })
    }

    render(){
        return(
            <LeftNav open={this.state.open} docked={false} onRequestChange={open => this.setState(open)}/>
        )
    }
}

export default LeftNav;
