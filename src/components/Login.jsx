import React, { Component } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../config/firebase";
import Dashboard from "./views/Dashboard";

const firebaseApp = firebase.initializeApp(firebaseConfig);

class Login extends Component {
  render() {
    const { user, signOut, signInWithGoogle } = this.props;
    return (
      <div>
        {user ? <Dashboard user={user.displayName} /> : <p>Autenticate...</p>}
        {user ? (
          <button className="btn waves-effect waves-light" onClick={signOut}>
            Sign Out
          </button>
        ) : (
          <button className="btn waves-effect waves-light"onClick={signInWithGoogle}>Ingresa con Google</button>
        )}
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(Login);
