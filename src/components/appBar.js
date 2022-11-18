import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AddCircleRounded } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import { logout } from "../firebase/firebase";
import SimpleDialogDemo from './dialogComponent';

export default function CustomAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To-Do App
          </Typography>
          <SimpleDialogDemo triggerCloseDialog={props.triggerCloseDialog} addTodo={props.addTodo}/>
          <Button color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
