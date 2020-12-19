import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FakeData from '../FakeData/FakeData';
import './Organize.css';
import SingleOrganize from './SingleOrganize';

const Organize = () => {
    const {anotherId, anotherId2} = useParams();
    return (
        <div>
            <Container className="Organize">
            <Grid container spacing={3}> 
                <Grid item xs={3}>
                    {
                    FakeData.filter(val => val.name == anotherId).map(data => <SingleOrganize val={data}></SingleOrganize>)
                    }
                    <div className="metaDataOrganize">
                    <h3 className='OrganizeName'>{anotherId}</h3>
                    <h4 className='TimeDate'>{anotherId2.slice(4,16)}</h4> 
                    <Link to='/' className='cancel'>Cancel</Link>
                    </div>
                </Grid> 
            </Grid>    
            </Container>
        </div>
    );
};

export default Organize;