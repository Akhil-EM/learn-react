import React,{Component} from "react";

class Welcome extends Component{
   constructor(props){
       super(props);
   }
    render(){
        return(
            <div>
                <h5>Welcome {this.props.name}</h5>
            </div>
        )
    }
}


export default Welcome;