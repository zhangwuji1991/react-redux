import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { counter,addGun,removeGun,addGunAsync } from './index.redux'

const store = createStore(counter,applyMiddleware(thunk))

function render(){
    reactDom.render(
        <App  store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync}/>,
        document.getElementById('root')
    )
}

render()
store.subscribe(render)