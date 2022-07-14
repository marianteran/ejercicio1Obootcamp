import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import { Contacto } from '../models/contacto.class';

function ComponenteB(estateUser) {
  console.log(estateUser)
  const [conectado, setConectado] = useState(estateUser);
  return (
    <div>
      <h3> {conectado === false ? 'User Not available' : 'User Online'}</h3>
      <button onClick={() => setConectado(!conectado)}>{conectado === false ? 'Connect' : 'Disconnected'}</button>
    </div>
  );
}

ComponenteB.propTypes = {
  estateUser: PropTypes.bool,
};

export default ComponenteB;