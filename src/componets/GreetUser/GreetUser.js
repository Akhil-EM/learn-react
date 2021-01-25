import React from 'react';                      
import './GreetUser.css';                 
                                                
                                                
class GreetUser extends React.Component { 
  constructor(name,age){
    super();

  }
render() {                                      
  return (                                      
          <div class="GreetUser" >     
             <h1 >{this.props.name}</h1>
             <h1 >{this.props.age}</h1>
          </div>                              
    );                                          
 }                                              
 }                                              
                                                
                                                
export default GreetUser;                 
