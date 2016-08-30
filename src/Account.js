import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './shared/UserInfo';

class Account extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {}
        }
    }

    _onSdubmitValue(e){
        e.preventDefault();
        const account = this.refs.textFiled.getValue();

        console.log(account);

        axios.get(`https://api.github.com/users/${account}`)
             .then((res) => {
                  this.setState({
                      user: res.data
                  })
             })
             .catch((res) => {
                 console.log(res);
             })

    }

    render(){

        return(
            <div className="account">
                <div className="account-con">
                    <form onSubmit={this._onSdubmitValue.bind(this)}>
                        <MuiThemeProvider>
                            <TextField hintText="Hint Text" ref="textFiled"/>
                        </MuiThemeProvider>
                        <MuiThemeProvider>
                            <RaisedButton label="sub" type="submit"/>
                        </MuiThemeProvider>
                    </form>
                </div>
                <UserInfo userInfo={this.state.user}/>
            </div>
        );
    }
}

export default Account;
