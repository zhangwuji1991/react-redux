import React from 'react'
import reactDom from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter,Redirect, Route, Switch} from 'react-router-dom'
import reducers from './reducers';
import Auth from './Auth';
import Dashboard from './Dashboard';

const store = createStore(reducers,applyMiddleware(thunk))

reactDom.render(
    (<Provider store={store} >      
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth}></Route>
                <Route path='/dashboard' component={Dashboard}></Route>
                <Redirect to='/dashboard'></Redirect>
            </Switch>
        </BrowserRouter>
     </Provider>),
    document.getElementById('root')
)

