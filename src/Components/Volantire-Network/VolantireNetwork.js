import React, { useContext } from 'react';
import Homepage from '../Homepage/Homepage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
import Logo from '../../images/logos/logo.png';
import { Container } from '@material-ui/core';
import Login from '../Login/Login';
import { UserContext } from '../../App';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Organize from '../Organize/Organize';

const VolantireNetwork = () => {
  const [user, setUser] = useContext(UserContext)
    return (
        <div>
        
    <Router>
      <div>
    <Container maxWidth="lg">
        <nav className='navbar'>
            <Link to="/" className="logo">
                <img src={Logo} alt="logo"></img>
            </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/donation">donation</Link>
            </li>
            <li>
              <Link to="/event">event</Link>
            </li>
            <li>
              <Link to="/blog">blog</Link>
            </li>
            <li>
              <Link to="/register/:id" className="register">Register</Link>
            </li>
            <li>
              <Link to="/admin" className="admin">
                {user.displayName ? user.displayName : 'Admin'}
              </Link>
            </li>
          </ul>
        </nav>
    </Container>

        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin">
            <h1>admin</h1>
          </Route>
          
          
          <PrivateRoute path="/register/:id">
              <Register></Register>
          </PrivateRoute>    
          <Route path="/:anotherId/:anotherId2">
            <Organize></Organize>
          </Route>
          
          <Route path="/blog">
            <h1>blog</h1>
          </Route>
          <Route path="/donation">
            <h1>donation</h1>
          </Route>
          <Route path="/event">
          <h1>event</h1>
          </Route>
          <Route path="/">
            <Homepage></Homepage>
          </Route>

          

        </Switch>
      </div>
    </Router>
    
    </div>
    );
};

export default VolantireNetwork;

