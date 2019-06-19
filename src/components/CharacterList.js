import React from 'react';
import { arrayOf, object } from 'prop-types';
import styled from 'styled-components';

import Character from './Character';

const StyledCharacterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const CharacterList = ({ characters }) => (
  <StyledCharacterList>
    {characters.map(character => (
      <Character key={character.name} character={character} />
    ))}
  </StyledCharacterList>
);

CharacterList.propTypes = {
  characters: arrayOf(object).isRequired,
};

export default CharacterList;
