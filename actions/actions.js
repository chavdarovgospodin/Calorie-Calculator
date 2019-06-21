import * as actionTypes from './actionTypes';

export const addGender = (gender) => {
  return {
    type: actionTypes.ADD_GENDER,
    values: gender
  }
}

export const addAge = (age) => {
  return {
    type: actionTypes.ADD_AGE,
    values: age
  }
}

export const addAge = (height) => {
  return {
    type: actionTypes.ADD_HEIGHT,
    values: height
  }
}

export const addAge = (weight) => {
  return {
    type: actionTypes.ADD_WEIGHT,
    values: weight
  }
}

export const addAge = (activity) => {
  return {
    type: actionTypes.ADD_ACTIVITY,
    values: activity
  }
}