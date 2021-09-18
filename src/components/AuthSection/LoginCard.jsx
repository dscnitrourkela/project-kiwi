import React from 'react';

// Components
import { makeStyles, Typography, Button } from '@material-ui/core';

// Assets
import { beALeader } from '../../../content';

const LoginCard = () => {
  const classes = useStyles();

  const { title, description, image, buttonText } = beALeader;
  return (
    <div className={classes.root}>
      <div className={classes.text}>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>{description}</Typography>
      </div>
      <div className={classes.img}>
        <img src={image} />
      </div>
      <Button variant='contained' className={classes.button}>
        <Typography className={classes.buttonText}>{buttonText}</Typography>
      </Button>
    </div>
  );
};

export default LoginCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 428,
    height: 641,
    padding: theme.spacing(4),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
  },
  text: {
    textAlign: 'left',
    fontFamily: 'Roboto',
  },
  img: {
    marginTop: '30px',
  },
  title: {
    fontSize: '44px',
    fontWeight: '400',
    lineHeight: '59px',
    color: theme.palette.text.primary,
  },
  description: {
    marginTop: '16px',
    fontSize: '16px',
    lineHeight: '22px',
    color: theme.palette.text.secondary,
  },
  button: {
    width: '200px',
    height: '60px',
    padding: '20px 60px',
    borderRadius: '36px',
    backgroundColor: theme.palette.action.active,
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.action.hover,
    },
  },
  buttonText: {
    color: '#000000',
    fontWeight: '400',
    fontSize: '14px',
  },
}));
