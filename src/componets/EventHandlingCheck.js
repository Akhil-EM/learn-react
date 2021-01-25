import React,{Component} from "react";

class EventHandling extends Component{
      constructor(props){
          super(props);
          this.state={
              textValue:"",
          }
      }
       onTextValueChange=(e)=>{
             console.log(e.target.value);
             this.setState({textValue:e.target.value})
       }
       
      render(){
          return(
              <div>
                   <input type="text" onChange={this.onTextValueChange} placeholder="Enter a text"  />
                    <br/>
                   <h3>{this.state.textValue}</h3>
              </div>
          );
      }
}

export default EventHandling;