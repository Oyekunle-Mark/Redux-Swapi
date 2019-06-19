import React from 'react';
import { object } from 'prop-types';

const Character = ({ character }) => {
  return <li>{character.name}</li>;
};

Character.propTypes = {
  character: object.isRequired,
};

export default Character;
