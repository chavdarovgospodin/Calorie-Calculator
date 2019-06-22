import * as actionTypes from './actionTypes';

export const addGender = (gender) => {
   
  return {
    type: actionTypes.ADD_GENDER,
    values: gender
  }
};

export const addAge = (age) => {
  return {
    type: actionTypes.ADD_AGE,
    values: age
  }
};

export const addHeight = (height) => {
  return {
    type: actionTypes.ADD_HEIGHT,
    values: height
  }
};

export const addWeight = (weight) => {
  return {
    type: actionTypes.ADD_WEIGHT,
    values: weight
  }
};

export const addActivity = (activity) => {
  return {
    type: actionTypes.ADD_ACTIVITY,
    values: activity
  }
};