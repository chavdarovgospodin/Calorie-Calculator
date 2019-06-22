import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Dropdown } from "react-native-material-dropdown";

const example = props => {
  let data = [
    {
      value: "Sedetary: little or no exercise"
    },
    {
      value: "Light: exercise 1-3 times/week"
    },
    {
      value: "Moderate: exercise 4-5 times/week"
    },
    {
      value: "Active: exercise 6-7 times/week"
    },
    {
      value: "Extra active: intense exercise daily, or physical job"
    }
  ];

  return (
    <View style={styles.view}>
      <Dropdown label="Activity" data={data} fontSize={15} itemCount={5} onChangeText={( value, index, data) => {
            props.activityAdded(index);
          }}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 250,
    height: 40,
    marginBottom: 25,
    // marginLeft: 40
  },
  container: {
    marginLeft: 40
  }
});

export default example;
