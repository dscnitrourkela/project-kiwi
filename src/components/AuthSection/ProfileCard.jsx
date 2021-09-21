import React from 'react';

// Components
import { makeStyles, Typography, IconButton, Avatar } from '@material-ui/core';
import { ExitToApp } from '@material-ui/icons';

import { AddCode } from '.';

const ProfileCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.button}>
        <AddCode />
        <IconButton className={classes.icon} aria-label='signout' size='large'>
          <ExitToApp />
        </IconButton>
      </div>

      <div className={classes.container}>
        <Avatar alt='name' src='profileImage.png' className={classes.avatar} />
        <Typography className={classes.name}>Sambit Sankalp</Typography>
        <div className={classes.nameDivider} />
        <Typography className={classes.description}>Points: 60 | Position: 65</Typography>
      </div>

      <div className={classes.container}>
        <Typography className={classes.eventTitle}>Events Attended</Typography>
        <div className={classes.eventDivider} />
        <div className={classes.event}>
          {/* mapping to be done */}
          <Typography className={classes.eventText}>Lorem Ipsum</Typography>
          <Typography className={classes.eventText}>Lorem Ipsum</Typography>
          <Typography className={classes.eventText}>Lorem Ipsum</Typography>
          <Typography className={classes.eventText}>Lorem Ipsum</Typography>
          <Typography className={classes.eventText}>Lorem Ipsum</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 428,
    height: 641,
    padding: theme.spacing(4),
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
    borderRadius: '8px',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
    color: theme.palette.action.active,
  },
  icon: {
    marginLeft: '5px',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.action.active,
    },
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: '25px',
  },
  name: {
    fontSize: '36px',
    marginTop: '25px',
    color: theme.palette.text.primary,
  },
  nameDivider: {
    width: '60%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.4,
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    marginTop: '2px',
  },
  eventTitle: {
    fontSize: '20px',
    marginTop: '10px',
    color: theme.palette.text.primary,
  },
  eventDivider: {
    width: '30%',
    height: '1px',
    backgroundColor: '#ffffff',
    opacity: 0.4,
  },
  event: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '5px',
  },
  eventText: {
    fontSize: '12px',
    margin: '2px',
    padding: '5px 20px',
    borderRadius: '15px',
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.secondary,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.text.primary,
    },
  },
}));
