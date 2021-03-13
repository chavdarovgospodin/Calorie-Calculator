import * as actionTypes from "./actionTypes";

const types = {
  age: "age",
  weight: "weight",
  height: "height"
};

export const addGender = gender => {
  return {
    type: actionTypes.ADD_GENDER,
    values: gender
  };
};

export const addValues = (id, value) => {
  switch (id) {
    case types.age: {
      return {
        type: actionTypes.ADD_AGE,
        values: value
      };
    }
    case types.height: {
      return {
        type: actionTypes.ADD_HEIGHT,
        values: value
      };
    }
    case types.weight: {
      return {
        type: actionTypes.ADD_WEIGHT,
        values: value
      };
    }
  }
};

export const addAge = age => {

  return {
    type: actionTypes.ADD_AGE,
    values: age
  };
};

export const addActivity = activity => {
  return {
    type: actionTypes.ADD_ACTIVITY,
    values: activity
  };
};
