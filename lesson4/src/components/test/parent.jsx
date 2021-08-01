import React from 'react';
import ChatList from './child';
import c from './dry.module.css'

function ListDialogs(props){
    return(
        <div>
        <ChatList bres = {<p>ouhgiue</p>} 
        />   
        <h3>{props.number}</h3>  
        <span className={c.red}>{props.nuv}</span>
        </div> 
    )
}
export default ListDialogs;