import React,{Component} from "react";

class CounterClass extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
    }


   IncrementTimer=()=>{
     this.setState((prev,prop)=>({count:prev.count+1}));
   }

    render(){
        return(
              <div>
                   <h3>{this.state.count}</h3>
                   <button onClick={this.IncrementTimer}>Incremet</button>
              </div>
        );
    }
}



export default CounterClass;