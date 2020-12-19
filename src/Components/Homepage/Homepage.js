// import { Container } from '@material-ui/core';
import React from 'react';
import FakeData from '../FakeData/FakeData';
import Event from './Event/Event';
import { Container, Grid } from '@material-ui/core';
import './Homepage.css';

const Homepage = () => {
    return ( 
        <Container className="homepage">
            <h1 className="Hometitle">I grow by helping people need.</h1>
            <form className="homeForm">
            <input type="text" placeholder="Search"></input>
            <input type="submit" value="Search"></input>
            </form>
    <Grid container spacing={4}>
        {
            FakeData.map(data => <Event value={data} key={data.id}></Event>)
        }
    </Grid>            
        </Container> 
    );
};

export default Homepage;