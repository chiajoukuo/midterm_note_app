import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import './app.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './nav/Routes';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "localhost:3000",
    };
  }

  componentDidMount() {

    //const socket = socketIOClient(this.state.endpoint);
    /*
    console.log('Didmount');
    const socket = io.connect("http://localhost:3000");
    if(socket === undefined){
      console.log('socket undefined');
    }
    else{
      socket.emit('clear');
      console.log("Connected to sockets!");
      socket.on('status',data =>{
        console.log(data);
      })
    }
    */

  }

  render() {
    //const { username } = this.state;
    /*
    <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    */
    return (
      <div className="note-app">
          <BrowserRouter>
            <div className="App">
              <Routes />
            </div>
          </BrowserRouter>
      </div>
    );
  }
}
