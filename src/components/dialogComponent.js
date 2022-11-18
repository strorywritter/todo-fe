import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';

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
