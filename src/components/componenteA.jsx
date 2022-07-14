import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../models/contacto.class';
import ComponenteB from './componenteB';

function componenteA({ contacto }) {
  return (
    <div>
      <h2>Name: {contacto.name}</h2>
      <h3>Lastname: {contacto.lastname}</h3>
      <h3>Email: {contacto.email}</h3>
      <ComponenteB estateUser={true} />
    </div>
  );
}

componenteA.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default componenteA;