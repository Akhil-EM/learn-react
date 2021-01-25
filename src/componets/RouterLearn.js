import React,{Component} from "react";

import Home from "./Home";
import About from "./About";
import Item from "./Item";


import {BrowserRouter,
        Switch,
        Route,
        Link } from "react-router-dom";

class RouterLearn extends Component{
     

     
     render(){
         return(
              <BrowserRouter>
                 <ul>
                     <li>
                         <Link  to="/">Home</Link>
                     </li>
                     <li>
                         <Link to="/about">About</Link>
                     </li>
                     <li>
                         <Link to="/item/1">Item 1</Link>
                     </li>
                     <li>
                         <Link to="/item/2">Item 2 </Link>
                     </li>
                     <li>
                         <Link to="/item/3">Item 3</Link>
                     </li>
                 </ul>
                 <Switch>
                       <Route exact path="/">
                           <Home></Home>
                       </Route>
                       <Route path="/about">
                           <About></About>
                       </Route>
                       <Route path="/item/:id">
                           <Item></Item>
                       </Route>
                 </Switch>
              </BrowserRouter>
         );
     }
}

export default RouterLearn;