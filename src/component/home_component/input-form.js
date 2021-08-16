import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      marginTop: "90px",
    },
  }));
  
const InputForm = (props) => {
    const classes = useStyles();

    const [inState, setState] =  useState("");

    const passing = (e) => {
      setState(e.target.value);
    }    

    return(
        <div>
           <form className={classes.root} noValidate autoComplete="off">
           <TextField onChange={passing} id="outlined-basic" label="Name" variant="outlined" />
           </form>
           <Button onClick={() => props.clicked(inState)} variant="contained" color="primary">
             {props.label}
            </Button>

        </div>
    );
}
export default InputForm;