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
  buttonHandler() {
    
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
        <Input text="Age" inputText="Type your age here!" />
        <Input text="Height" inputText="Type your height here!" />
        <Input text="Weight" inputText="Type your weight here!" />
        <Dropdown activityAdded={this.props.onActivityAdd}/>
        <Button title="Calculate" onPress={this.buttonHandler} />
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
    onGenderAdd: (gen) => dispatch(actions.addGender(gen)),
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
