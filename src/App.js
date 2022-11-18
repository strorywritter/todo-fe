import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import PageRoutes from "./Routes/Routes";
import firebase from "firebase/compat/app";
import "firebase/auth";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

function App() {
  const [auth, setAuth] = useState(false || window.localStorage.getItem("auth"==='true'));
  const [loading, setLoading] = useState(true);
  const [token, setToken] =useState('')
  const [email, setEmail] =useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userCre) => {
      if (userCre) {
        setAuth(true);
        window.localStorage.setItem('auth','true')
        userCre.getIdTokenResult().then((token)=>{
          setToken(token.token)
          setEmail(token.claims.email)
        })
      }
      setLoading(false)
    });
  }, []);

  const loginwithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCre) => {
        if (userCre) {
          setAuth(true);
        }
        console.log(userCre);
      });
  };
  return (
    <div className="App">
      {auth ? (
        <Home token={token} email={email}></Home>
      ) : loading ? (
        <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>Please wait....</div>
      ):      <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}><Button variant="outlined" onClick={loginwithGoogle} startIcon={<GoogleIcon />}>
      Login with Google
    </Button></div>}
    </div>
  );
}

export default App;
