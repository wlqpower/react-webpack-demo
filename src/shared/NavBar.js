import React, { Component } from 'react';
import Tabs from 'material-ui/tabs/tabs';
import Tab from 'material-ui/tabs/tab';

class NavBar extends Component {
   constructor(props){
      super(props);
      this.state = {
          value: '/home'
      }

   }

   componentWillMount(){
        this.setState({
              value: this._getIndex()
        });
   }

   componentWillReceiveProps(nextProps){
        this.setState({
            value: this._getIndex()
        });
   }

   _getIndex(){
       return this.context.router.isActive('/home') ? '/home' :
              this.context.router.isActive('/account') ? '/account' :
              this.context.router.isActive('/about') ? '/about' : '/home';
   }


   _handleOnchange(value){
        this.context.router.push(value);
   }

   render() {
     let styles = {
        tabs: {
            width: '390px',
            position: 'absolute',
            right: '60px',
            textTransform: 'uppercase',
        },
        tab: {
            height: '64px',
            color: '#fff',
        },
        inkBar: {
            height: '4px',
            marginTop: '-4px',
        },
    };
     return (
       <div className="app-header">
           <Tabs value={this.state.value} tabItemContainerStyle={{backgroundColor: 'transparent'}} style={styles.tabs} inkBarStyle={styles.inkBar} onChange={this._handleOnchange.bind(this)}>
               <Tab style={styles.tab} value="/home" label='Home'/>
               <Tab style={styles.tab} value="/account" label='Account' />
               <Tab style={styles.tab} value="/about" label='About' />
           </Tabs>
       </div>
     );
   }
 }

 NavBar.contextTypes = {
     router: React.PropTypes.object.isRequired
 };

 export default NavBar;
