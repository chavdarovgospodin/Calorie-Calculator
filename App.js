import React, { Component } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import Input from "./components/input";
import Dropdown from "./components/dropdown";
import RadioButton from "./components/radioButton";
import Result from "./components/result";
import styles from "./styles";
import * as actions from "./actions/actions";
import * as calculations from "./calculations/calculations";

class App extends Component {
  state = {
    disabled: false,
    values: null,
    calculatedValues: null
  };
  results = null;
  valuesSize = 0;
  
  calculateButtonHandler = () => {
    let calculatedValue = null
    this.valuesSize = this.props.values ? Object.keys(this.props.values).length : 0;
    const result = calculations.calculate(this.props.values);
    const deficit = calculations.calorieDeficit(result);
    const surplus = calculations.calorieSurplus(result);
    calculatedResults = <Result minimum={result} surplus={surplus} deficit={deficit}/>;
    this.setState({calculatedValues: calculatedResults})
  };

  static getDerivedStateFromProps (nextProps, prevState) {
    if(nextProps.values !== prevState.values) {
      return {values: nextProps.values}
    }
    else return null; 
  }

  validationHandler() {
    let valuesSize =  this.state.values ? Object.keys(this.state.values).length : 0;
    if(valuesSize ===5) {
      if(this.state.values.age === 0 || this.state.values.height === 0 || this.state.values.weight ===0) {
         return true
      }
     return false
    }
    else return true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>Calorie Calculator</Text>
        <RadioButton genderAdded={this.props.onGenderAdd} />
        <Input
          text="Age"
          inputText="Type your age here!"
          ageAdded={this.props.onAgeAdd}
        />
        <Input
          text="Height"
          inputText="Type your height here!"
          heightAdded={this.props.onHeightAdd}
        />
        <Input
          text="Weight"
          inputText="Type your weight here!"
          weightAdded={this.props.onWeightAdd}
        />
        <Dropdown activityAdded={this.props.onActivityAdd} />
        {this.state.calculatedValues}
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Calculate"
            onPress={this.calculateButtonHandler}
            disabled={this.validationHandler()}
          />
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
    onGenderAdd: gender => dispatch(actions.addGender(gender)),
    onAgeAdd: age => dispatch(actions.addAge(age)),
    onHeightAdd: height => dispatch(actions.addHeight(height)),
    onWeightAdd: weight => dispatch(actions.addWeight(weight)),
    onActivityAdd: act => dispatch(actions.addActivity(act)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
