import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './Home'
import Customer from './Customer'
import EventHandler from './EventHandler'
import Product from './Product'


ReactDOM.render(
    
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/Home" component={Home} />
            <Route path="/Customer" component={Customer} />
            <Route path="/EventHandler" component={EventHandler} />
            <Route path="/Product" component={Product} />
        </div>
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
