import React, { Component } from 'react';
import './App.css';
import {Route,Switch,withRouter} from 'react-router-dom';
import LoginPage from './LoginPage/LoginPage';
import StorePage from './StorePage/StorePage';


class App extends Component {
  render() {
    return (
                <div className="">
                    <Switch>
                    <Route path="/store" component={StorePage} />
                    <Route path="/" component={LoginPage} />
                    </Switch>
                 </div>
         
    );
  }
}

export default withRouter(App);
