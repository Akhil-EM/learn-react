import React from 'react';
// import Greeter from "./componets/GreetUser/GreetUser";
// import Name from './componets/Fuction';
// import ChangeName from "./componets/Properties";
// import Welcome from "./componets/Welcome";
// import CounterClass from "./componets/CounterWithClass";
// import Eventler from "./componets/EventManager";
// import Count from "./componets/CountIncrement";
// import InputEvent from "./componets/EventHandlingCheck";
// import List from "./componets/ListOfItems";

// import TableItems from "./componets/TableItems";
// import ToDoList from "./componets/ToDoList";
// import LifeCycle from './componets/LifeCycle';
// import Api from './componets/WorkingApi';
// https://www.youtube.com/watch?v=clxIxC3J2sc&list=PLBKJGko2JEdG8FUKu2hUF6K7irvbT8hIM&index=11

// import Form from './componets/Form'

import RouterLearn from "./componets/RouterLearn";


class App extends React.Component {
   
  constructor(){
     super();
   this.state = {
      header: "Header from state...",
      content: "Content from state..."
   }
  }
   age=15;
   greetUSer(name) {
      return <p>hello {name}</p>;
   }
   
   render() {
      return (
         <div>
            {
               //  this.greetUSer('akhil')
                
            }
            {/* <p>you  {this.age>=18?"can vote":"can't vote"}</p> */}
            {/* <Name></Name>
            <ChangeName st={{color:"green"}}  name="akhil" />
            <ChangeName st={{color:"red"}}  name="manoharan" />
            <Welcome name="akhil"/> */}
            {/* <CounterClass/> */}
            {/* <Eventler/> */}
            {/* <Count/> */}
            
             {/* <InputEvent ></InputEvent>
             <List></List> */}

             {/* <TableItems></TableItems> */}
             {/* <ToDoList></ToDoList> */}
             {/* <LifeCycle></LifeCycle> */}
             {/* <Api ></Api> */}
             {/* <Form></Form> */}
             <RouterLearn></RouterLearn>
         </div>
      );
   }
}

export default App;