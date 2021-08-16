// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//     root: {
//       marginTop: "90px",
//       display: 'flex',
//       flexWrap: 'wrap',
//       '& > *': {
//         padding: theme.spacing(8),
//       },
//     },
//   }));

// const PaperT = (props) => {
//     const classes = useStyles();
     
//     const a = props.value.map((abc)=>{
//     return<Grid item xs={12} sm={6} md={3}>
//               <Paper className={classes.root}>{abc}</Paper>
//           </Grid>
//     })


//     return(
//         <div >
//        <Grid container justify="space-evenly">
//          <Grid container item xs={10} spacing={3}>
//            {a}
//          </Grid>
//        </Grid>      
//         </div>
//     );
// }
// export default PaperT;