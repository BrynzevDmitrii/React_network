import React from 'react'
import { List, ListItem , Avatar, ListItemAvatar, ListItemText} from "@material-ui/core";
function MesegFrendsList(props){
   
    return(
    <List  >{
        props.fac.map((item)=> <ListItem className='cursor' key = {item.id}>
                
                <ListItemText primary= {item.name} secondary ={item.text} className = 'freandSay'></ListItemText>
    
        </ListItem>)
    }
    </List>
    )
}

export default MesegFrendsList;