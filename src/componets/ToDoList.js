import React,{Component} from "react";


class ToDo extends Component{
    constructor(props){
        super(props);

        this.state={
               toDoArray:[],
               textContent:""
        }
    }

     addToList=()=>{
         let text=this.state.textContent
         if(text==null){
             alert("this field can't be null");
             return;
         }
         
         let currentArray=this.state.toDoArray;
         currentArray.push({task:text,completed:false});
         this.setState({
             toDoArray:currentArray
         })

     }
     deleteToDo=(key)=>{
        //  console.log({'deleted':key});
         var MyArray=this.state.toDoArray;

         MyArray.splice(key,1);
         this.setState({
             toDoArray:MyArray
         })
     }
     onTextValueChange=(e)=>{
        //console.log(e.target.value);
        this.setState({textContent:e.target.value})
     }
     taskCompleted=(key)=>{
           var curruntArray=this.state.toDoArray;

           curruntArray[key].completed=true;

           this.setState({
               toDoArray:curruntArray
           })

     }
    render(){
        return(
            <div>
                <br/>
                <input type="text" onChange={this.onTextValueChange} placeholder="Enter a task"  /><button onClick={this.addToList}>Add</button>

                 <p>To Do</p>

                 <ul>
                     {
                         this.state.toDoArray.map((items,key)=>{

                            return (
                                <li key={key}>
                                   
                                    <p><span onClick={()=>{this.taskCompleted(key)}}>{
                                             items.completed?<strike>{items.task}</strike>:items.task
                                          }   
                                        </span> 
                                                <button onClick={()=>{this.deleteToDo(key)}}>Delete</button></p>
                                    
                               </li>
                            )
                         })
                     }
                     
                 </ul>
                
            </div>

        );

    }
}

export default ToDo;