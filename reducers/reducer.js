import { combineReducers } from "redux";
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  values: null
};

const womenFormula = {};

const menFormula = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GENDER:
      return {
        ...state,
        values: {
          ...state.values
        }
      };
    case actionTypes.ADD_AGE:
      return {
        ...state,
        values: {
          ...state.values
        }
      };
    case actionTypes.ADD_HEIGHT:
      return {
        ...state,
        values: {
          ...state.values
        }
      };
    case actionTypes.ADD_WEIGHT:
      return {
        ...state,
        values: {
          ...state.values
        }
      };
    case actionTypes.ADD_ACTIVITY:
      return {
        ...state,
        values: {
          ...state.values
        }
      };
    default:
      return state;
  }
};

export default reducer;
