import axios from 'axios';

export const actionTypes = {
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
};

export const success = () => ({
  type: actionTypes.FETCHING,
});

const addPeople = payload => ({
  type: actionTypes.SUCCESS,
  payload,
});

export const failure = payload => ({
  type: actionTypes.FAILURE,
  payload,
});

export const fetchPeople = () => dispatch => {
  axios
    .get('https://swapi.co/api/people')
    .then(res => dispatch(addPeople(res.data)))
    .catch(err => dispatch(failure(err.message)));
};
