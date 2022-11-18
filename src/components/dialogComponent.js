import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import AddTodo from './addTodo';
import DialogContent from '@mui/material/DialogContent';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { onClose, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Add Todo</DialogTitle>
      <DialogContent>
      {props.addTodo}
      </DialogContent>
    </Dialog>
  );
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
//   children
// };

const SimpleDialogDemo = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    React.useEffect(() => {
      handleClose()
    }, [props.triggerCloseDialog])

  return (
    <div>
      <Button variant="inherit" sx={{border:'1px solid white'}} endIcon={<AddIcon />} onClick={handleClickOpen}>
        Add Todo
      </Button>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        addTodo={props.addTodo}
      />
    </div>
  );
}

export default SimpleDialogDemo
