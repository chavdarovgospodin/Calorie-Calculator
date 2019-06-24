import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import RadioForm from "react-native-simple-radio-button";

var gender = [{ label: "Male", value: 0 }, { label: "Female", value: 1 }];

export default class RadioButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You Are</Text>
        <RadioForm
          radio_props={gender}
          initial={2}
          onPress={value => {
            this.props.genderAdded(value);
          }}
          buttonSize={20}
          buttonOuterSize={30}
          selectedButtonColor={"blue"}
          selectedLabelColor={"blue"}
          labelStyle={{ fontSize: 15 }}
          disabled={false}
          formHorizontal={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: "center",
    backgroundColor: "#eff5ff"
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10
  }
});
