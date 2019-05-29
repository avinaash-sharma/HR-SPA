import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './users';
import Contact from './contact';

// import * as serviceWorker from './serviceWorker';

const routing=(
    <Router>
        <div  >
            <thead >
            <div style={{justifyContent:'left',marginLeft:'600%'}}>
                <th>
                    <Link to="/">Home</Link>
                </th>
               <th  style={{padding:'20px'}}>
                    <Link to="/users">Users</Link>
                </th>
                <th>
                    <Link to="/contact">Contact</Link>
                </th>
                </div>
            </thead>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        </div>
    </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

