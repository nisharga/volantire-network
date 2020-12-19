import React, { useContext } from 'react';
import './Login.css';
import LOGO from './../../images/logos/logo.png';
import G from './g.jpeg';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebase from "firebase/app";
import "firebase/auth";
import config from "./config";
import { UserContext } from '../../App';
firebase.initializeApp(config);


const Login = () => {
    const [user, setUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/register" } };

    const GoogleLoginFireBase = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var token = result.credential.accessToken; 
            var user = result.user;
            setUser(user);
            history.replace(from);
          })
          .catch(function(error) { 
            var errorCode = error.code;
            var errorMessage = error.message; 
            var email = error.email; 
            var credential = error.credential; 
          });
    }

    
    return (
        <div className="login">
            <img src={LOGO} alt="" className="loginLogo"></img>
            <div className="googleLogin">
                 <h1>Login With</h1>
                <Link onClick={GoogleLoginFireBase} to="/login" className="googleLoginLink">
                <img src={G} alt=""></img>Continue with Google
                </Link>
            </div>
        </div>
    );
};

export default Login;