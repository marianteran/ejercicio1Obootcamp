import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../models/contact.class'



const ComponentB = ({ user }) => {
    return (
        <div>
        <h1>Name: {  user.name }</h1>
        <h2>Lastname: {  user.lastname }</h2>
        <h3>Email: {  user.email }</h3>
        <h5>User is: { user.conected ? "Online" :"Not available"}</h5>
        </div>
    );
};


ComponentB.propTypes = {
    user:PropTypes.instanceOf(Contact) //recibe una tarea
};


export default ComponentB;