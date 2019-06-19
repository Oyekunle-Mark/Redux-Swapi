import React from 'react';
import { object } from 'prop-types';
import styled from 'styled-components';

const StyledCharacter = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 500px;
  border-radius: 2px;
  background: rgb(24, 23, 17);
  color: rgb(240, 227, 158);
  margin: 20px 0;
  padding: 20px;

  img {
    width: 50px;
    height: 50px;
  }

  p {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 25px;
    margin-left: 30px;
  }
`;

const Character = ({ character }) => (
  <StyledCharacter>
    <img
      src="https://image.flaticon.com/icons/png/512/922/922854.png"
      alt="light_saber"
    />
    <p>{character.name}</p>
  </StyledCharacter>
);

Character.propTypes = {
  character: object.isRequired,
};

export default Character;
