import React, { useState } from 'react';

// Components
import {
  makeStyles,
  IconButton,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

const AddCode = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <IconButton className={classes.icon} onClick={handleOpen} aria-label='add' size='large'>
        <Add />
      </IconButton>

      <Dialog className={classes.root} open={open} onClose={handleClose}>
        <DialogTitle className={classes.title}>Add Event Code</DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.description}>
            To increase your points, please type the event code here given by the organizers.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            id='code'
            label='Code'
            type='code'
            fullWidth
            variant='outlined'
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCode;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    marginLeft: '5px',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.action.active,
    },
  },
  title: {
    color: theme.palette.text.primary,
  },
  description: {
    color: theme.palette.text.secondary,
  },
}));
