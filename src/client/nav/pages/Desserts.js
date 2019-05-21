import React, {Component} from "react";

import "../style/Travel.css"
import Slide from "../../component/slide"

export default class Desserts extends Component{
    constructor(props){
        super(props); 
        this.state = {
            slides: [' ']
        };
    }
    componentWillMount = () =>{
        //console.log("travel socket: "+this.props.socket);
        const socket = this.props.socket;
        //console.log(socket);
        socket.emit('need_slide_desserts');
        socket.on('add_slide_desserts',data=>{
            //console.log("data",data.length);
            let temp_slides=[];
            if(data.length>0){
                var mod = data.length%3;
                var iter = (data.length-mod)/3;
                //console.log("mod"+mod);
                //console.log(iter+"iter")
                for (let x = 0; x < iter; x++) {
                    /*
                    const message = document.createElement("div");
                    message.setAttribute("class", "chat-message");
                    message.textContent = data[x].name + ": " + data[x].body;
                    messages.appendChild(message);
                    */ 
                    const tmp = <div>
                        <Slide img={data[x].img}
                        title = {data[x].title} cat = {data[x].category} location = {data[x].location} url = {data[x].url} 
                        discription = {data[x].discription} id = {x}
                        ></Slide>
                        <Slide img={data[x+1].img}
                        title = {data[x+1].title} cat = {data[x+1].category} location = {data[x+1].location} url = {data[x+1].url} 
                        discription = {data[x+1].discription} id = {x+1}
                        ></Slide>
                        <Slide img={data[x+2].img}
                        title = {data[x+2].title} cat = {data[x+2].category} location = {data[x+2].location} url = {data[x+2].url} 
                        discription = {data[x+2].discription} id = {x+2}
                        ></Slide>
                    </div>
                    temp_slides.push(tmp);
                }
                if(mod===2){
                    let x=data.length-2;
                    const tmp = <div>
                        <Slide img={data[x].img}
                        title = {data[x].title} cat = {data[x].category} location = {data[x].location} url = {data[x].url} 
                        discription = {data[x].discription} id = {x}
                        ></Slide>
                        <Slide img={data[x+1].img}
                        title = {data[x+1].title} cat = {data[x+1].category} location = {data[x+1].location} url = {data[x+1].url} 
                        discription = {data[x+1].discription} id = {x+1}
                        ></Slide>
                    </div>
                    temp_slides.push(tmp);
                }
                if(mod===1){
                    let x=data.length-1;
                    const tmp = <div>
                        <Slide img={data[x].img}
                        title = {data[x].title} cat = {data[x].category} location = {data[x].location} url = {data[x].url} 
                        discription = {data[x].discription} id = {x}
                        ></Slide></div>
                    temp_slides.push(tmp);
                }
                else if(mod===3){
                    let x=data.length-3;
                    const tmp = <div>
                        <Slide img={data[x].img}
                        title = {data[x].title} cat = {data[x].category} location = {data[x].location} url = {data[x].url} 
                        discription = {data[x].discription} id = {x}
                        ></Slide>
                        <Slide img={data[x+1].img}
                        title = {data[x+1].title} cat = {data[x+1].category} location = {data[x+1].location} url = {data[x+1].url} 
                        discription = {data[x+1].discription} id = {x+1}
                        ></Slide>
                        <Slide img={data[x+2].img}
                        title = {data[x+2].title} cat = {data[x+2].category} location = {data[x+2].location} url = {data[x+2].url} 
                        discription = {data[x+2].discription} id = {x+2}
                        ></Slide>
                        </div>
                    temp_slides.push(tmp);
                }
                else if(mod===4){
                    let x=data.length-4;
                    const tmp = <div>
                        <Slide img={data[x].img}
                        title = {data[x].title} cat = {data[x].category} location = {data[x].location} url = {data[x].url} 
                        discription = {data[x].discription} id = {x}
                        ></Slide>
                        <Slide img={data[x+1].img}
                        title = {data[x+1].title} cat = {data[x+1].category} location = {data[x+1].location} url = {data[x+1].url} 
                        discription = {data[x+1].discription} id = {x+1}
                        ></Slide>
                        <Slide img={data[x+2].img}
                        title = {data[x+2].title} cat = {data[x+2].category} location = {data[x+2].location} url = {data[x+2].url} 
                        discription = {data[x+2].discription} id = {x+2}
                        ></Slide>
                        <Slide img={data[x+3].img}
                        title = {data[x+3].title} cat = {data[x+3].category} location = {data[x+3].location} url = {data[x+3].url} 
                        discription = {data[x+3].discription} id = {x+3}
                        ></Slide>
                        </div>
                    temp_slides.push(tmp);
                }
                this.setState({
                    slides :temp_slides
                });
 
            }
        })
    }
    render(){
        //console.log('render'+this.slides[1]);
        return(
            <div>
                <h3>Desserts</h3>
                <div>
                    {this.state.slides}
                </div>
            </div>
            
        );
    }
}