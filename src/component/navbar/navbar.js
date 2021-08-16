import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  Link: {
    textDecoration: "none",
  },
  Btn: {
    color: "#ffffff",
  },
}));

const Navbar=(props)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Fish Redux
          </Typography>
          <Link className={classes.Link} to="/">
          <Button className={classes.Btn} >home</Button>
          </Link>
          <Link className={classes.Link} to="/Fish">
          <Badge badgeContent={props.AN.length} color="secondary">
          <Button className={classes.Btn}> fish</Button>
          </Badge>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStatetoProps = state => {
  return{
      AN: state.anyName
  };
}

export default connect(mapStatetoProps)(Navbar);
