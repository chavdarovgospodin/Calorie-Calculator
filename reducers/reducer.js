import * as actionTypes from "../actions/actionTypes";

const initialState = null;

const activity = {
  0: 1.2,
  1: 1.375,
  2: 1.55,
  3: 1.75,
  4: 1.9
}



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
    case actionTypes.CALCULATE_MALE:
      let active = null;
      for (let i = 0; i<= values.activity; i++) {
        if (values[i] === activity[i]) {
          active = activity[i];
        }
      }
        return {
          ...state,
          result: (66 + (13.7 * values.weight)+ (5 * values.height) - (6.8 * values.age)) * active
        };  
    default:
      return state;
  }
};

export default reducer;
