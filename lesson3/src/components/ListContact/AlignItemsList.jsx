import  {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ListItemAvatar, List, ListItem, Avatar, ListItemText} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
},
inline: {
    display: 'inline',
},

}));

export default function AlignItemsList(props) {
const classes = useStyles();




    return (
    <List className={classes.root} >{
        props.r.map((item)=> <ListItem className='cursor' key = {item.id}>
            <ListItemAvatar onClick = {props.red}>
                <Avatar className='cursor' alt={item.name} src ={item.ava} />
                <ListItemText primary= {item.name} secondary ={item.text}></ListItemText>
            </ListItemAvatar>
        </ListItem>)
    }
    </List>
);
}