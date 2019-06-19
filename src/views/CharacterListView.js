import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, bool } from 'prop-types';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

import CharacterList from '../components/CharacterList';
import { fetchPeople, stillFetching } from '../actions/index';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(24, 23, 17);
  color: rgb(240, 227, 158);

  h1 {
    font-size: 34px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    padding: 15px;
  }

  img {
    width: 40px;
    height: 40px;
    margin: 20px;
  }
`;

const StyledCharacterList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 100%;
  /* min-height: 100%; */
  background: rgb(187, 161, 14);
`;

class CharacterListView extends React.Component {
  componentDidMount() {
    const { stillFetching, fetchPeople } = this.props;
    stillFetching();
    fetchPeople();
  }

  render() {
    const { characters, fetching, error } = this.props;

    return (
      <div>
        <StyledHeader>
          <img
            src="https://image.flaticon.com/icons/png/512/236/236606.png"
            alt="darth"
          />
          <h1>Star Wars</h1>
          <img
            src="https://image.flaticon.com/icons/png/512/236/236606.png"
            alt="darth"
          />
        </StyledHeader>

        {fetching && (
          <StyledCharacterList>
            <Loader type="TailSpin" color="black" height={80} width={80} />
          </StyledCharacterList>
        )}

        {error && (
          <StyledCharacterList>
            <h3>Error fetching data.</h3>
          </StyledCharacterList>
        )}

        <StyledCharacterList>
          <CharacterList characters={characters} />
        </StyledCharacterList>
      </div>
    );
  }
}

CharacterListView.propTypes = {
  characters: arrayOf(object).isRequired,
  fetching: bool.isRequired,
  error: bool,
  stillFetching: func.isRequired,
  fetchPeople: func.isRequired,
};

const mapStateToProps = ({ charsReducer }) => ({
  characters: charsReducer.characters,
  fetching: charsReducer.fetching,
  error: charsReducer.error,
});

export default connect(
  mapStateToProps,
  { fetchPeople, stillFetching },
)(CharacterListView);
