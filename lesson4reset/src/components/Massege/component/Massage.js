import './../../../App.css';
import React, { useState, useEffect} from 'react';
import e from './Massage.module.css';
import Render from '../../Renedr/Renedr';
import './../../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AlignItemsList from '../../ListContact/AlignItemsList';
import TextArea from './../../TextArea/TextArea'
import faker from 'faker';
import { BrowserRouter, Route } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
  }));


  const r = Array.from({
    length:7
}).map(()=>({
    id:faker.datatype.uuid(),
    ava:faker.image.avatar(),
    nameFrend:faker.name.firstName(),
    text:faker.lorem.words(5),
}))

let pathUserlist = ()=>{
  return `<div> cfdfdfdf</div>`
}


  export default function AutoGrid() {
    const classes = useStyles();  
    
    return (
    <BrowserRouter>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper} ><div><AlignItemsList  r= {r} pathUserlist = {pathUserlist}/></div></Paper>
          </Grid>
          <Grid item xs={3}>
          <Route path = '/Render' component = {Render}/>
          </Grid>
          <Grid item xs={12}>
          <Massage />
          </Grid>
        </Grid>
      </div>
      </BrowserRouter>
    );
  }

function Massage(props) {
  const [messageList, setMessageList] = useState([]);

useEffect(() => {
      if(messageList.length > 0 && messageList[messageList.length-1].author !== 'Bot') {
          setTimeout(() => {
            gluing(bot);
          }, 1200);

          let bot = {
              author: 'Bot',
              text: 'Hi',
          };
      }
  },
      [messageList]
  );

  const gluing = (send) => {
      setMessageList(List => List.concat(send));
  }
  return (
      <div className={e.masseg}>
              <TextArea className={e.input} gluing={gluing} />
      </div>
  )
}
