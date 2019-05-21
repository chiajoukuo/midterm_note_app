import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import Card from '../component/Card';
import Travel from './pages/Travel';
import Desserts from './pages/Desserts';
import Eat from './pages/Eat';
import "./style/Routes.css";
import InsertSection from "../container/InsertSection";

const socket = io.connect("http://localhost:3001");
console.log("Client socket connected!")

export default class Routes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
        soc:''
    };
    
  }

  componentDidMount() {

    this.state.soc = socket;
    //console.log(socket);
    //console.log(this.state.soc);
  }
  
  render() {
    return (
      <div>
        <div>
          <NavLink to="/home"  className = "hd">  <h1>My Phubbing Note</h1></NavLink>
        </div>
        <div className = "top">
          <div className = "cards">
            <NavLink to="/travel">
              <Card>Travel</Card>
            </NavLink>
            <NavLink to="/eat">
              <Card>Eat</Card>
            </NavLink>
            <NavLink to="/desserts">
              <Card>Desserts</Card>
            </NavLink> 
          </div>
          <InsertSection socket = {socket}></InsertSection>
        </div>
        <Switch>
          <Route exact path="/travel" component={() => <Travel soc="socket_try" socket={socket}></Travel>}/>
          <Route exact path="/desserts" component={() => <Desserts soc="socket_try" socket={socket}></Desserts>} />
          <Route exact path="/eat" component={() => <Eat soc="socket_try" socket={socket}></Eat>} />
          <Redirect from="/home" to="/" />
        </Switch>
      </div>
    );
  }
}
//render={() => <div>Home</div>}
//<Route exact path="/travel" component={Travel} socket="socket_try"/>
//component={() => <Dashboard isAuthed={true}