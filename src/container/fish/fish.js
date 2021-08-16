import React from 'react';
import PaperT from '../../component/fish_component/paper';
import {connect} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "90px",
    //   display: 'flex',
    //   flexWrap: 'wrap',
      justifyContent:"center",
      backgroundColor:"grey",
      color:"#ffffff",
    },
  }));


const Fish = (props) => {
    const classes = useStyles();

    const a = props.AN.map((abc)=>{
        return<Grid item xs={12} sm={6} md={3}>
                  <Paper className={classes.root}>{abc}</Paper>
              </Grid>
    });

    return(
        <div>
            {/* <PaperT value={props.AN}/> */}
            
            <Grid container justify="space-evenly">
         <Grid container item xs={10} spacing={3}>
           {a}
         </Grid>
       </Grid>  
        </div>
    );
}

const mapStatetoProps = state => {
      return{
          AN: state.anyName
      };
}

export default connect(mapStatetoProps)(Fish);