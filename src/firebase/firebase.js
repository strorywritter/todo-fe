import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAB5j8lAb3j6rGBZgKOwkcWo7R-OjCKww",
  authDomain: "todo-9abdf.firebaseapp.com",
  projectId: "todo-9abdf",
  storageBucket: "todo-9abdf.appspot.com",
  messagingSenderId: "699664736044",
  appId: "1:699664736044:web:37733554a2debd8485d689",
};

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();

const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  logout,
};
