import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import About from './components/About';
import Topic from './components/Topic';
import TaskEdit from './components/TaskEdit'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

if (document.getElementById('root')) {
    ReactDOM.render(
        <BrowserRouter>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul> */}
            <div>
                <Switch>
                    <Route exact path="/:id/edit" component={TaskEdit} />
                    <App />
                    {/* <Route exact path="/about" component={About} />
                    <Route exact path="/topics" component={Topic} /> */}
                </Switch>
            </div>
        </BrowserRouter>

        , document.getElementById('root'));
}
