import React from 'react'
import { connect } from 'react-redux'
import { login } from './Auth.redux'
import { Redirect } from 'react-router-dom'
@connect(
    state=>state.auth,
    { login }
)
class Auth extends React.Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        console.log(this.props.isAuth)
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard' /> : null}
                <h2>你没有权限,需要登录</h2>
                <button onClick={this.props.login}>登录</button>
            </div>
        )
    }
}

export default Auth