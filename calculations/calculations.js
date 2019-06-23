export const calculate = values => {
  let result = null;
  let active = null;
  const activity = [1.2, 1.375, 1.55, 1.75, 1.9];
  
  for (let i = 0; i <= activity.length; i++) {
    if (values.activity == i) {
      active = activity[i];
    }
  }
  if (values.gender === 0) { //if male
    result = (66 + (13.7 * values.weight) + (5 * values.height) - (6.8 * values.age)) * active;
    return result.toFixed(0);
  }
  else if (values.gender === 1) { //if female
   result = (655 + (9.6 * values.weight) + (1.8 * values.height) - (4.7 * values.age)) * active;
   return result.toFixed(0);
  }
};

export const calorieDeficit=(calories) => {
  let deficitCalories = calories - (0.2 * calories); 
  return deficitCalories.toFixed(0);
}

export const calorieSurplus=(calories) => {
  let surplusCalories = Number(calories) + (0.2 * Number(calories));
  return surplusCalories.toFixed(0);
}