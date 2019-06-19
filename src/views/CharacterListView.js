import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, bool } from 'prop-types';

import CharacterList from '../components/CharacterList';
import { fetchPeople, stillFetching } from '../actions/index';

class CharacterListView extends React.Component {
  componentDidMount() {
    const { stillFetching, fetchPeople } = this.props;
    stillFetching();
    fetchPeople();
  }

  render() {
    const { characters, fetching } = this.props;

    if (fetching) {
      return <h1>Getting characters...</h1>;
    }

    return (
      <div>
        <CharacterList characters={characters} />
      </div>
    );
  }
}

CharacterListView.propTypes = {
  characters: arrayOf(object).isRequired,
  fetching: bool.isRequired,
  stillFetching: func.isRequired,
  fetchPeople: func.isRequired,
};

const mapStateToProps = ({ charsReducer }) => ({
  characters: charsReducer.characters,
  fetching: charsReducer.fetching,
});

export default connect(
  mapStateToProps,
  { fetchPeople, stillFetching },
)(CharacterListView);
