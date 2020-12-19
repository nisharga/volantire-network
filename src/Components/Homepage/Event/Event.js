import React from 'react';
import './Event.css';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
// import ImgLink from '../../../images/';
/* <h1>Event {value.id} {value.name} {value.color}{value.pic}</h1>  */
const Event = ({value}) => {
    console.log('value:', value)

    return (
        <Grid item xs={3} className="eventSingle">
          <Link to={`/register/${value.name}`}>
              <img src={require(`../../../images/${value.pic}`)} alt=""></img>
              <div className="caption" style={{backgroundColor: value.color}}>
                 <h3>{value.name}</h3>
              </div>
          </Link>
        </Grid>  
    );
};

export default Event;