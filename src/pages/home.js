import React from 'react'
import { useState, useEffect } from "react";
import CustomAppBar from '../components/appBar'
import ToDoList from '../components/toDoList'
import axios from "axios";

function Home() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [taskName, setTaskName] = useState();
    const [description, setDescription] = useState();
    const [email, setEmail] = useState('nramyashan@gmail.com');
    const [file, setFile] = useState();

    const fetch = async () => {
        await axios.get(`http://localhost:3000/user/getTodo?email=${email}`).then((res) => {
          console.log(res.data)
          setTasks(res.data);
          setLoading(false);
        });
      };
      useEffect(() => {
        fetch();
      }, [loading]);

      const taskSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formdata = new FormData();
        formdata.append('taskName',taskName)
        formdata.append('description',description)
        formdata.append('email',email)
        formdata.append('file',file)
        await axios.post("http://localhost:3000/user/addTodo",formdata).then((res) => {
          console.log('todo added')
          setLoading(false);
        });
      };

      const taskUpdate = async (status,id) => {
        setLoading(true);
        const body = {
          status : status,
          todoId : id
        };
        await axios.post("http://localhost:3000/user/updateTodo",body).then((res) => {
          console.log('todo updated')
          setLoading(false);
        });
      };

  return (
    <div>
        <CustomAppBar/>
        <ToDoList  tasks={tasks} onChange={taskUpdate}/>
    </div>
  )
}

export default Home