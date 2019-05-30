import React from 'react'
import {  Route, Link,Redirect} from 'react-router-dom'
import App from './App'
import { connect } from 'react-redux'
import { logout } from './Auth.redux'

@connect(
    state=>(state.auth),
    { logout }
)

// class Erying extends React.Component{
//    render(){
//     return <h2>二营</h2>
//    }
// }

// class Qibinglian extends React.Component{
//     render(){
//         return <h2>骑兵连</h2>
//     }
//  }

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={ }
    }
    render(){
        console.log(this.props)
        const redirectToLogin = <Redirect to='/login' /> 
        const app = (
            <div>
                <h1>杜兰特</h1>
                {this.props.isAuth ? <button onClick={this.props.logout}>退出</button> : null}
                <ul>
                    <li><Link to='/dashboard/' >一营</Link></li>
                    <li><Link to='/dashboard/erying'>二营</Link></li>
                    <li><Link to='/dashboard/qibinglian'>骑兵营</Link></li>
                    
                </ul>
                <Route path='/dashboard/' exact component={App}></Route>
                <Route path='/dashboard/erying' component={App}></Route>
                <Route path='/dashboard/qibinglian' component={App}></Route>
            </div>
        )
        return  this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard