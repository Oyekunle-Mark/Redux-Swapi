import { actionTypes } from '../actions/index';

const initialState = {
  characters: [],
  fetching: false,
  error: null,
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING:
      return { ...state, fetching: true };
    case actionTypes.SUCCESS:
      return { ...state, characters: action.payload, fetching: false };
    case actionTypes.FAILURE:
      return { ...state, error: true, fetching: false };
    default:
      return state;
  }
};
