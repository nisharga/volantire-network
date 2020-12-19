import React from 'react';

const SingleOrganize = (props) => {
    const {pic} = props.val;
    return (
        <div>
            <img src={require(`../../images/${pic}`)}></img>
        </div>
    );
};

export default SingleOrganize;