import * as actionTypes from "../actions/actionTypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GENDER:
      return {
        ...state,
        gender: action.values
      };
    case actionTypes.ADD_AGE:
      return {
        ...state,
        age: action.values
      };
    case actionTypes.ADD_HEIGHT:
      return {
        ...state,
        height: action.values
      };
    case actionTypes.ADD_WEIGHT:
      return {
        ...state,
        weight: action.values
      };
    case actionTypes.ADD_ACTIVITY:
      return {
        ...state,
        activity: action.values
      };
    default:
      return state;
  }
};

export default reducer;
