import React, { Component } from "react";
import { Button } from "react-native";
import { Platform, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import Input from "./components/input";
import Dropdown from "./components/dropdown";
import RadioButton from "./components/radioButton";
import * as actions from "./actions/actions";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

class App extends Component {
  calculatedValue = null;
  calculateButtonHandler() {
    if(this.props.values) {

    }
    console.log("aaa");
  }
  componentWillReceiveProps() {
    console.log(this.props.values)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>Calorie Calculator</Text>
        <RadioButton  genderAdded={this.props.onGenderAdd}/>
        <Input text="Age" inputText="Type your age here!" ageAdded={this.props.onAgeAdd} />
        <Input text="Height" inputText="Type your height here!" heightAdded={this.props.onHeightAdd}/>
        <Input text="Weight" inputText="Type your weight here!" weightAdded={this.props.onWeightAdd}/>
        <Dropdown activityAdded={this.props.onActivityAdd}/>
        {this.calculatedValue}
        <View style={styles.button}>
        <Button style={styles.button} title="Calculate" onPress={this.calculateButtonHandler} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    values: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGenderAdd: (gender) => dispatch(actions.addGender(gender)),
    onAgeAdd: (age) => dispatch(actions.addAge(age)),
    onHeightAdd: (height) => dispatch(actions.addHeight(height)),
    onWeightAdd: (weight) => dispatch(actions.addWeight(weight)),
    onActivityAdd: (act) => dispatch(actions.addActivity(act))
  };
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    fontSize: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  button: {
    margin: 20,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
