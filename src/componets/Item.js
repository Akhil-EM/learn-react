import React,{Component} from "react";

// using use params to get item
import {useParams} from 'react-router-dom'

export default function Item(){
    let {id}=useParams()
    return(
        <div>
            <h1>Item page</h1>
            <h1>Having id {id}</h1>
        </div>
    );
}

