import React, { Component } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import './style/Insertsection.css'

export default class Insertsection extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      value: 'ini_val'
    };
    //this.handleEnter = this.handleEnter.bind(this);
    //this.textArea = document.getElementById("textarea");
  }

  /*
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log("new_val");
  }
  */
  clearInsertSection(){
    document.getElementById("title").value = "";
    document.getElementById("category").value="";
    document.getElementById("location").value = "";
    document.getElementById("url").value = "";
    document.getElementById("img").value = "";
    document.getElementById("discription").value = "";
  }

  componentDidMount(){
    //console.log("insertSec"+this.props.socket)
    const socket = this.props.socket;
    //console.log(socket);
    /*
    const socket = io.connect("http://localhost:3001");
    console.log("Client socket connected!")
    */
    if(socket === undefined){
      console.log('socket undefined');
    }
    else{
      document.addEventListener('keydown', event =>{
        if (event.keyCode === 13) {
          console.log('handleEnter');
          /*
          const mes = document.getElementById("textarea").value;
          console.log(mes);
          document.getElementById("textarea").value = "";
          socket.emit('txt',mes);
          event.preventDefault();
          */
          const title= document.getElementById("title").value;
          const category= document.getElementById("category").value;
          const location= document.getElementById("location").value;
          const url= document.getElementById("url").value;
          const img= document.getElementById("img").value;
          const discription= document.getElementById("discription").value;
          console.log(title,category,location,url,img,discription);
          this.clearInsertSection();
          socket.emit("input",{
            title: title,
            category: category,
            location: location,
            url: url,
            img: img,
            discription: discription
          });
        }
      });
      const clear_btn = document.getElementById("clear-btn");
      clear_btn.addEventListener("click",e =>{
        console.log("clear click");
        socket.emit('clear');
      });

    }

  }
  
  render() {
    return (
      <div className = "ins-sec">
        <div className = "ins-col">
          <div className = "ins-line">
            <div className = "ins-name">Title :</div>
            <input type="text" id="title" placeholder="Enter title." size="35"/>
          </div>
          <div className = "ins-line">
            <div className = "ins-name">Category :</div>
            <input type="text" id="category" size="29" placeholder="Choose from above category." />
          </div>
          <div className = "ins-line">
            <div className = "ins-name">Location :</div>
            <input type="text" id="location" placeholder="Enter URL." size="30"/>
          </div>
          <button id="clear-btn">clear</button>
        </div>
        <div>
          <div className = "ins-line">
            <div className = "ins-name">URL :</div>
            <input type="text" id="url" placeholder="Enter URL." size="35"/>
          </div>
          <div className = "ins-line">
            <div className = "ins-name">Picture :</div>
            <input type="text" id="img" placeholder="Enter image link." size="32"/>
          </div>
          <div className = "ins-line">
            <div className = "ins-name">Discription :</div>
            <input type="text" id="discription" size="27" placeholder="Some discription." />
          </div>
        </div>
        <br></br>
        {
          //<textarea id="textarea" placeholder="Enter message..."></textarea>
        }
      </div>
    );
  }
}
//<textarea value={this.state.value} onChange={this.handleChange} />