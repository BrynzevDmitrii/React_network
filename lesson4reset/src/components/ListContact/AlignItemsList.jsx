import  {React, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItemAvatar, List, ListItem, Avatar, ListItemText} from '@material-ui/core';
import { Link, NavLink} from 'react-router-dom';


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
const[state, setState]= useState();
let name = props.r.map((i)=> i.nameFrend)
let www = name.forEach(element => {
   console.log ('uhu')
});

const uuu = ()=>{
console.log(www)
};

    return (
    <List className={classes.root} onClick={uuu} >{
        props.r.map((item)=>
        <NavLink  to={`/Render/${item.id}`}> 
        <Link component = 'button' variant = 'body2' >
        <ListItem className='cursor' key = {item.id}>           
            <ListItemAvatar onClick = {props.red}>
                <Avatar className='cursor' alt={item.nameFrend} src ={item.ava} />
                <ListItemText primary= {item.name} secondary ={item.text} >{item.text}</ListItemText>
            </ListItemAvatar>
        </ListItem>
        </Link>
        </NavLink>
    
    )
    }
    </List>
);
} 