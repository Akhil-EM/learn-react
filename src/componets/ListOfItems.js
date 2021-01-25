import React,{Component} from "react";

class ListItems extends Component{
   constructor(props){
       super(props);
     this.state={
        items:[
            {
                component: 'First...',
                id: 1
             },
             {
                component: 'Second...',
                id: 2
             },
             {
                component: 'Third...',
                id: 3
             }
        ],
     }
   }



   render(){
        var list=this.state.items.map((items,key)=>{
             return <li key={key}>{key+1}-{items.component}</li>
        })
       return(
           <div>
             <p>Colors array</p>
             <ul >
                {list}
             </ul>

             {/* or */}
             <ul>
                 {
                     this.state.items.map((it,key)=><li key={key}>{it.component}</li>)
                     
                 }
             </ul>
           </div>
       );

   }
}

export default ListItems