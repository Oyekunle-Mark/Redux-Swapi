import React from 'react';
import { connect } from 'react-redux';
import { func, arrayOf, object, bool } from 'prop-types';
import Loader from 'react-loader-spinner';

import CharacterList from '../components/CharacterList';
import { fetchPeople, stillFetching } from '../actions/index';

class CharacterListView extends React.Component {
  componentDidMount() {
    const { stillFetching, fetchPeople } = this.props;
    stillFetching();
    fetchPeople();
  }

  render() {
    const { characters, fetching, error } = this.props;

    if (fetching) {
      return (
        <h1>
          <Loader type="TailSpin" color="red" height={80} width={80} />
        </h1>
      );
    }
    if (error) return <h1>Error fetching data.</h1>;

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
