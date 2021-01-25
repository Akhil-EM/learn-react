import React,{Component} from "react";

export default class CounterWithClass extends Component{
     constructor(props){
         super(props);

         this.state={
             counter:0
         }
     }
     
     increment(){
    //    this.setState((pre,props)=>{
        //   pre gets old state
        // props gets new state
         

    //    })
         

    //    setTimeout( ()=>{
    //       this.setState((pre,props)=>({counter:pre.counter+1}));
    //    },1000);
     }

    render(){
        this.increment();
        return(
               <div>
                   <p>{this.state.counter}</p>
               </div>

        );
    }
}