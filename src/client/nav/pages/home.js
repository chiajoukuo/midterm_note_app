import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Card from '../component/Card';
import Travel from './pages/Travel';
import Desserts from './pages/Desserts';
import Eat from './pages/Eat';

export default class Routes extends Component {
  /*
  constructor() {
    super();
    this.state = {
      
    };
  }

  componentDidMount() {

  }
  */
  render() {
    return (
      <div>
        <NavLink to="/home"  className = "head">  My Phubbing Note</NavLink>

        <div className = "cards">
          <NavLink to="/travel">
            <Card>Travel</Card>
          </NavLink>

          <NavLink to="/desserts">
            <Card>Desserts</Card>
          </NavLink> 

          <NavLink to="/eat">
            <Card>Eat</Card>
          </NavLink>
        </div>

        <div className = "cards">
          <NavLink to="/travel">
            <Card>Travel</Card>
          </NavLink>

          <NavLink to="/desserts">
            <Card>Desserts</Card>
          </NavLink> 

          <NavLink to="/eat">
            <Card>Eat</Card>
          </NavLink>
        </div>

        <Switch>
          <Route exact path="/travel" component={Travel} />
          <Route exact path="/desserts" component={Desserts} />
          <Route exact path="/eat" component={Eat} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    );
  }
}
