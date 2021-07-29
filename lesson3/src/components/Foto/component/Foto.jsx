import React from 'react'
import './../../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AlignItemsList from '../../ListContact/AlignItemsList';
import TextArea from './../../TextArea/TextArea'
import MassegeUserlist from './../../MassegeUserlist/MassegeUserlist'
import faker from 'faker';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
  }));

  function red(event){
    const classes = event.target
    console.log(classes)
    // const currentClass = document.getElementsByClassName('MuiListItemAvatar-root');;
    // console.log(currentClass)
    // for (let i = 0; i < currentClass.length; i++) {
    //   currentClass[i].classList.toggle("yyy");
    //   console.log(currentClass[i]);
    // }
}

  const r = Array.from({
    length:7
}).map(()=>({
    id:faker.datatype.uuid(),
    ava:faker.image.avatar(),
    name:faker.name.firstName(),
    text:faker.lorem.words(5)
}))

let fac = Array.from({
  length:1
}).map(()=>({
    id:faker.datatype.uuid(),
    autor:faker.name.firstName(),
    text:faker.lorem.words(9),
}))
  
  export default function AutoGrid() {
    const classes = useStyles();  
let imSay = {
    autor:'',
    textSay:'ytyttrtyrtytgrtyrt'
  }
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper} ><div><AlignItemsList r= {r} red={red} fac = {fac}/></div></Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper} className = "paper"><MassegeUserlist fac = {fac} imSay={imSay} r= {r} red={red}/></Paper>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}><TextArea /></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }

function Foto(props) {
    return(
        <AutoGrid />
    )
}

