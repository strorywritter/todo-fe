import React from "react";
import { useState, useEffect } from "react";
import CustomAppBar from "../components/appBar";
import ToDoList from "../components/toDoList";
import axios from "axios";
import Grid from "@mui/material/Grid";
import TextField from '@mui/material/TextField';

function Home({ token, email }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [taskName, setTaskName] = useState();
  const [description, setDescription] = useState();
  const [triggerFetch,settriggerFetch] = useState(false)
  // const [email, setEmail] = useState("");
  const [file, setFile] = useState();
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
  useEffect(() => {
    if (token) {
      fetch(token);
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
      <CustomAppBar />
      <Grid container spacing={2} style={{margin:'10px'}}>
        <Grid item xs={6} >
          <ToDoList tasks={tasks} onChange={taskUpdate} />
        </Grid>
        <Grid item xs={6}>
          <form styles={{padding:'5px'}} onSubmit={taskSubmit}>
          <TextField id="standard-basic" label="Task Name" variant="standard" margin="normal" fullWidth value={taskName} onChange={(e)=>setTaskName(e.target.value)}/>
          <TextField id="standard-basic" label="Description" variant="standard" margin="normal" fullWidth value={description} onChange={(e)=>setDescription(e.target.value)}/>
          {/* <TextField id="standard-basic" label="Email" variant="standard" margin="normal" fullWidth value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
            <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>

            <button type="submit" style={{backgroundColor:'blue',color:'white',padding:'10px', borderRadius:'5px'}}>Submit</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
