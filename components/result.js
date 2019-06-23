import React from "react";
import { View, Text, StyleSheet } from "react-native";

const result = props => (
  <View style={styles.container}>
    <Text style={styles.text}>Calories to maintain {props.minimum}</Text>
    <Text style={styles.text}>20 % Calorie deficit {props.deficit}</Text>
    <Text style={styles.text}>20 % Calorie surplus {props.surplus}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    textAlign: "center"
  },
  text: {
    margin: 10,
    fontSize: 15,
    marginBottom: 25,
    justifyContent: "center"
  }
});

export default result;
