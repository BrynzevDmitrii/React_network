import React from "react";
import { ListItemAvatar, List, ListItem, Avatar, ListItemText} from '@material-ui/core';
import { Link, NavLink} from 'react-router-dom';
import faker from 'faker';


export default function MessagesList() {

    const contactList =  Array.from({
        length: 6,
    }).map((_, index) => ({
        id: 'id' + (index +1) ,
        ava: faker.image.avatar(),
        nameFrend: faker.name.firstName(),
        text: faker.lorem.word(3)
    }));

    return (
        <List >{
            contactList.map((item)=>
            <NavLink  to={`/MassageSend/${item.id}`}> 
            <Link component = 'button' variant = 'body2' >
            <ListItem className='cursor' key = {item.id}>           
                <ListItemAvatar>
                    <Avatar className='cursor' alt={item.nameFrend} src ={item.ava} />
                    <ListItemText primary= {item.name} secondary ={item.text} >{item.text}</ListItemText>
                </ListItemAvatar>
            </ListItem>
            </Link>
            </NavLink>
        
        )
        }
        </List>
    )
}
