import { List, ListItem , Avatar, ListItemAvatar, ListItemText} from "@material-ui/core";
import React from "react";
import MesegFrendsList from "../MesegFrendsList/MesegFrendsList";


function MassegeUserlist(props){
    return(
        <div>
            <List >{
        props.r.map((item)=> <ListItem className='cursor' key = {item.id}>
           
                <MesegFrendsList fac = {props.fac} r = {props.r}/>
                
    
        </ListItem>)
    }
    </List>
            <div className='imSay'>I'm :{props.imSay.textSay}</div>
        </div>
    )
}

export default MassegeUserlist;