import React,{Component} from "react";

// call axios
import axios from 'axios'

// GET,POST,PUT,PATCH

class APi extends Component{
     constructor(){
         super();

         this.state={
             posts:[]
         }

     }
   
 
   componentDidMount(){
       axios.get("https://jsonplaceholder.typicode.com/posts", {
            
       })
       .then( (response)=>{
           console.log(response.data);
           this.setState({posts:response.data})
       })
       .catch((error)=>{
           console.log(error);
       })
   }
   render(){
       
       return(
           <div>
               <ul>
                   {
                       this.state.posts.map((items,key)=>{
                           return(
                               <li key={key}>{key+1}==={items.title}</li>
                           )
                       })
                   }
               </ul>
           </div>
       )
   }
}



export default APi;