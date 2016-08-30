import React,{Component} from 'react';

class UserInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const userInfo = this.props.userInfo;
        return (
          <div className='user-info'>
            <img src={userInfo.avatar_url} />
            <ul>
              <li>
                <b>{userInfo.followers}</b>
                <span>followers</span>
              </li>
              <li>
                <b>{userInfo.following}</b>
                <span>following</span>
              </li>
              <li>
                <b>{userInfo.public_repos}</b>
                <span>repos</span>
              </li>
            </ul>
          </div>
        );
    }
}

export default UserInfo;
