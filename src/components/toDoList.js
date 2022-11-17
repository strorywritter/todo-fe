import React from 'react'
import TodoCard from './todoCard'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function ToDoList({ tasks, onChange }) {



  return (
    <>
 
    {tasks.map((task,i) => (
      <div key={i} style={{padding:'10px', justifyContent:'center', display:'flex'}}>
        <TodoCard task={task} onChange={onChange}/>
      </div>
      ))}
 
  </>
  )
}

export default ToDoList