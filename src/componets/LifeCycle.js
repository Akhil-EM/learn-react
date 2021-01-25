import React,{Component} from 'react'

class LifeCycle extends Component {
   constructor(){
       super();
       console.log("constuctor");
       this.state={
           counter:0
       }
   }
   
   IncrementCounter=()=>{
        this.setState((prev,prop)=>({counter:prev.counter+1}))
   }


   componentWillMount(){
       console.log('component will mount');
   }
   render(){
       console.log("render");
       return(
           <div>
              <button onClick={this.IncrementCounter}>Increment</button>
              <h1>clicked {this.state.counter}</h1>
           </div>
       );
   }
//    to avoid rendering
//    returns true or false
   shouldComponentUpdate(){
       console.log('should update');
       return false;

   }
   componentDidMount(){
       console.log('component did mount');
   }
   componentDidUpdate(){
       console.log("did update ");
   }
   componentWillUnmount(){
       console.log('un mounting of component');
   }

}

export default LifeCycle;
