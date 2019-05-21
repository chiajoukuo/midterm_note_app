import React, {Component} from "react";

import "../style/Travel.css"
import Slide from "../../component/slide"


export default class Travel extends Component{
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
        socket.emit('need_slide_travel');
        socket.on('add_slide_travel',data=>{
            //console.log("data",data.length);
            let temp_slides=[];
            if(data.length>0){
                var mod = data.length%5;
                var iter = (data.length-mod)/5;
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
                        <Slide img={data[x+3].img}
                        title = {data[x+3].title} cat = {data[x+3].category} location = {data[x+3].location} url = {data[x+3].url} 
                        discription = {data[x+3].discription} id = {x+3}
                        ></Slide>
                        <Slide img={data[x+4].img}
                        title = {data[x+4].title} cat = {data[x+4].category} location = {data[x+4].location} url = {data[x+4].url} 
                        discription = {data[x+4].discription} id = {x+4}
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
                else if(mod===1){
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
                <h3>travel</h3>
                <div>
                    {this.state.slides}
                </div>
            </div>
            
        );
    }
}
/*
<Slide img='data:image/jpeg;base64,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'
    title = 'title_1' cat = 'cat_1' location = 'location_1' url = 'https://www.w3schools.com/' 
    discription = 'dis_1' id = 'slide0'
></Slide>
<Slide title = 'title_1_2' cat = 'cat_1_2'></Slide>*/