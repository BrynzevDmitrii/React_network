import './../../../App.css';
import React, { useState, useEffect} from 'react';
import './../../../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MessagesList from './MassageList'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
  }));

  export default function MassagePagest(props) {
    const classes = useStyles();  
    
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <Paper className={classes.paper} ><div><MessagesList /></div></Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
