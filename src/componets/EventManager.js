import React,{Component} from "react";

function showName(){
     alert('name is not given')
}

function Eventer(){
    return(
        <div>
            {/* <button onMouseEnter={ ()=>{alert('helloo')} }>Click ME</button> */}
            <button onClick={showName}>Clik Me</button>
        </div>
    )
}

export default Eventer;