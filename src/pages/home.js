import React from "react";
import { useState, useEffect } from "react";
import CustomAppBar from "../components/appBar";
import ToDoList from "../components/toDoList";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BasicDateRangePicker from "../components/dateRangePicker";
import { Button } from "@mui/material";
import { Diversity1 } from "@mui/icons-material";

function Home({ token, email }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskName, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [triggerFetch,settriggerFetch] = useState(false)
  // const [email, setEmail] = useState("");
  const [file, setFile] = useState();
  const [filterOption, setFilterOption] = React.useState('all');
  const [value, setValue] = React.useState([null, null])
  const [triggerCloseDialog,setTriggerCloseDialog] = useState(false)

  const handleChange = (event) => {
    setFilterOption(event.target.value);
    settriggerFetch(!triggerFetch)
  };

  const fetch = async (token) => {
    await axios
      .get(`http://localhost:4000/user/getTodo?email=${email}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
        setLoading(false);
      });
  };

  const getTodoByStatus = async (token,status) => {
    await axios
      .get(`http://localhost:4000/user/getTodoByStatus?status=${status}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
        setLoading(false);
      });
  };

  const getTodoByDate = async (token) => {
    const bodyData = {
      startDate: value[0].$d.toISOString(),
      endDate: value[1].$d.toISOString()
    }
    // bodyData.append("startDate", value[0].$d.toISOString().split('Z')[0]);
    // bodyData.append("endDate", value[1].$d.toISOString().split('Z')[0]);
    await axios
      .post(`http://localhost:4000/user/getTodoByDate`,bodyData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setTasks(res.data);
        setLoading(false);
      });
  };



  const updateTaskList = (token) => {
    switch (filterOption){
      case "all":{
        fetch(token);
        break;
      }
      case 'todo':{
        getTodoByStatus(token,'Todo')
        break;
      }
      case 'inProgress':{
        getTodoByStatus(token,'In progress')
        break;
      }
      case 'done':{
        getTodoByStatus(token,'Done')
        break;
      }
      default:{
        fetch(token);
      }
    }
  }

  useEffect(() => {
    if (token) {
      updateTaskList(token);
    }
  }, [token,triggerFetch]);

  const taskSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("taskName", taskName);
    formdata.append("description", description);
    formdata.append("email", email);
    formdata.append("file", file);
    await axios
      .post("http://localhost:4000/user/addTodo", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("todo added");
        setLoading(false);
        settriggerFetch(!triggerFetch)
      });
      setTriggerCloseDialog(!triggerCloseDialog)
      setTaskName('')
      setDescription('')
  };

  const taskUpdate = async (status, id) => {
    setLoading(true);
    const body = {
      status: status,
      todoId: id,
    };
    await axios
      .post("http://localhost:4000/user/updateTodo", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("todo updated");
        setLoading(false);
        settriggerFetch(!triggerFetch)
        // window.location.reload()
      });
  };

  return (
    <div>
      <CustomAppBar triggerCloseDialog={triggerCloseDialog} addTodo={<div  styles={{margin:'15px'}}>
        <form styles={{padding:'5px'}} onSubmit={taskSubmit}>
          <TextField id="standard-basic" label="Task Name" variant="standard" margin="normal" fullWidth value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
          <TextField id="standard-basic" label="Description" variant="standard" margin="normal" fullWidth value={description} onChange={(e)=>setDescription(e.target.value)}/>
          {/* <TextField id="standard-basic" label="Email" variant="standard" margin="normal" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

            <button type="submit" style={{backgroundColor:'blue',color:'white',padding:'10px', borderRadius:'5px'}}>Submit</button>
          </form>
      </div>}/>
      <Grid container spacing={2} style={{margin:'10px'}}>
        <Grid item xs={6}>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterOption}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={'all'}>All</MenuItem>
          <MenuItem value={'todo'}>Todo</MenuItem>
          <MenuItem value={'inProgress'}>In progress</MenuItem>
          <MenuItem value={'done'}>Done</MenuItem>
        </Select>

        </Grid>
        <div style={{display:'flex',flexDirection:'row'}}>
        <BasicDateRangePicker value={value} setValue={setValue}/>
        <Button onClick={()=>getTodoByDate(token)}>Filter</Button>
        </div>
      </Grid>
      <Grid>
      <Grid item xs={6} >
          <ToDoList tasks={tasks} onChange={taskUpdate} />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
