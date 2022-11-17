import "firebase/auth";
import firebase from "firebase/compat/app";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";

function Register() {
  // const [user, loading, error] = useAuthState(auth);

  // const navigate = useNavigate();
  
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) navigate("/home");
  // }, [user, loading]);

  const loginwithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCre) => {
        console.log(userCre);
      });

    return (
      <div style={{ width: "100vw" }}>
        <button onClick={loginwithGoogle}> Login with Google</button>
      </div>
    );
  };
}
export default Register;
