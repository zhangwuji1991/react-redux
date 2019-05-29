import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import { counter } from './index.redux'

const store = createStore(counter,applyMiddleware(thunk))

reactDom.render(
    (<Provider store={store} >
        <App />
     </Provider>),
    document.getElementById('root')
)

