import React from 'react';


function ChangeName(props){

    return(
        <div>
            <h1 style={props.st}>{props.name}</h1>
        </div>
    )
}

export default ChangeName;