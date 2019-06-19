import React from 'react';
import { arrayOf, object } from 'prop-types';

import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map(character => (
      <Character key={character.name} character={character} />
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: arrayOf(object).isRequired,
};

export default CharacterList;
