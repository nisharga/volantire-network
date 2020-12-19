import DateFnsUtils from '@date-io/date-fns'; 
import React, { useContext } from 'react';
import LOGO from './../../images/logos/logo.png';
import './Register.css';
import { UserContext } from '../../App';
import { Link, useParams } from 'react-router-dom';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers'; 

const Register = () => {
    const [user, setUser] = useContext(UserContext);
    let { id } = useParams();
const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

    return (
        <div className="register">
            <img src={LOGO} alt="" className="loginLogo"></img>
            <div className="registerZone">
                 <h1>Register As Volunteer</h1>
                <form action="/add" method="post">
                    <input type="text" value={user.displayName} placeholder="Full Name" ></input>
                    <input type="text" placeholder="User Or Email" value={user.email} ></input>

    <MuiPickersUtilsProvider utils={DateFnsUtils}>               
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
    </MuiPickersUtilsProvider>

                     <input type="text" placeholder="Description" ></input>
                     <input id="organize" type="text" placeholder="Organize" value={id ? id : 'nothing'}></input>
                     <Link to={`/${id}/${selectedDate}`} className="inputSubmit">registration</Link>
                </form>
            </div>
        </div>
    );
};

export default Register;