import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import TodoCard from './todoCard';

function ToDoList({ tasks, onChange }) {



  return (
    <>
    <Box sx={{ flexGrow: 1, margin:'20px' }}>
    <Grid container spacing={2}>
    {tasks.map((task) => (
      <Grid item xs={3} key={task.id} >
        <TodoCard task={task} onChange={onChange}/>
      </Grid>
      ))}
    </Grid>
  </Box>
  </>
  )
}

export default ToDoList