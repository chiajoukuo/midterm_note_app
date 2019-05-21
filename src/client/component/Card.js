import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import App from '../App';
import RH from './RH';
import RH1 from './RH_1';
import './component_style/Card.css'

export default class Card extends Component { 
  constructor(props) {
    super(props);
    this.category = this.props.children;

  }
  
  render() {
    return (
      <div className = "card">
        <div className="lines">
          {this.category} 
        </div>
      </div>
    );
  }
}
