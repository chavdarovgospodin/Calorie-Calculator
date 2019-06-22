import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Dropdown from "./dropdown";

const input = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.text}</Text>
    <TextInput
      style={styles.input}
      placeholder={props.inputText}
      keyboardType="numeric"
      maxLength={3}
      onChangeText={value => {
   
        if (props.text == "Age") {
          props.ageAdded(Number(value));
        } else if (props.text == "Height") {
          props.heightAdded(Number(value));
        } else if (props.text == "Weight") {
          props.weightAdded(Number(value));
        }
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 40,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#000000",
    fontSize: 15,
    textAlign: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 65
  },
  text: {
    margin: 10,
    fontSize: 15,
    marginBottom: 25,
    justifyContent: "center"
  }
});

export default input;
