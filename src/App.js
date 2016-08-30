import React,{Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './Home';
import './style/main.scss'
import NavBar from './shared/NavBar';
import AppBar from 'material-ui/AppBar';
import Test from './shared/Test';



class App extends Component{
    constructor(props,context){
        super(props,context);
        this.state = {
            renderNavBar: false,
            obj: {
                name: 'tt',
                age:  25
            }
        }
    }

    componentWillMount(){

        let renderBar = function(){
            this.setState({
                renderNavBar: document.body.clientWidth > 700,
                obj: {
                    name: 'ttt',
                    age:  22
                }
            },
            function(){
                let tt = new Test(this.state.obj);
                tt.show();
            });
        }.bind(this)

        renderBar();

        window.onresize = renderBar;

    }

    _getTitle(){
          let title = this.context.router.isActive('/home') ? 'home':
                      this.context.router.isActive('/account') ? 'account':
                      this.context.router.isActive('/about') ? 'about' : '';
          return <AppBar title={title} />
    }

    render(){
        return(
            <div className="app-wrap">
                 <MuiThemeProvider>
                    {this.state.renderNavBar ? <NavBar /> : this._getTitle()}
                 </MuiThemeProvider>

                {this.props.children}
                <div className="app-footer">app footer</div>
            </div>
        );
    }

}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default App;
