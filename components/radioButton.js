import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, ToastAndroid } from "react-native";

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from "react-native-simple-radio-button";


var gender = [{ label: "Male", value: 0 }, { label: "Female", value: 1 }];

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You Are</Text>
        <RadioForm
          radio_props={gender}
          initial={2}
          onPress={(value) => {
            this.props.genderAdded(value);
          }}
          buttonSize={20}
          buttonOuterSize={30}
          selectedButtonColor={"green"}
          selectedLabelColor={"green"}
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
    backgroundColor: "#F5FCFF"
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    marginBottom: 10
  }
});
