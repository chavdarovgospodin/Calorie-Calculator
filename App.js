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

class App extends Component {
  state = {
    disabled: false,
    values: null
  };
  results = null;
  size = 0;
  calculateButtonHandler = () => {
    this.size = this.props.values ? Object.keys(this.props.values).length : 0;
    if (this.size === 5) {
      const values = this.props.values;
      this.setState(state => {
        return {
          values: state.values + values
        };
      });
      this.calculating();
    }
  };

  calculating = () => {
    const values = this.props.values;
    let result = null;
    let active = null;

    // const activity = {
    //   0: 1.2,
    //   1: 1.375,
    //   2: 1.55,
    //   3: 1.75,
    //   4: 1.9
    // };
    const activity = [1.2, 1.375, 1.55, 1.75, 1.9];
    for (let i = 0; i <= activity.length; i++) {
      if (values.activity == i) {
        active = activity[i];
      }
    }
    if (values.gender === 0) {
      //if male
      result =
        (66 + (13.7 * values.weight) + (5 * values.height) - (6.8 * values.age)) *
        active;
      return result.toFixed(0);
    }
    else if (values.gender === 1) { //if female
     result = (655 + (9.6 * values.weight) + (1.8 * values.height) - (4.7 * values.age)) * active;
     return result.toFixed(0);
    }
  };

  // componentWillReceiveProps = () => {
  //   console.log(this.props.values);
  //   this.size = this.props.values ? Object.keys(this.props.values).length : 0;
  //   if (this.size === 5) {
  //     const values = this.props.values;
  //     if (values.age === 0 || values.weight === 0 || values.height === 0) {
  //       this.setState(state => {
  //         return {
  //           disabled: (state.disabled = true)
  //         };
  //       });
  //     } else {
  //       this.setState(state => {
  //         return {
  //           disabled: (state.disabled = false)
  //         };
  //       });
  //     }

  //   } else {
  //     this.setState(state => {
  //       return {
  //         disabled: (state.disabled = true)
  //       };
  //     });
  //   }
  // }; //TODO

  render() {
    let calculatedValue = null;
    if (this.state.values) {
      let res = this.calculating();
      calculatedValue = <Result text={res} />;
    } else {
      calculatedValue = null;
    }
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
        {calculatedValue}
        <View style={styles.button}>
          <Button
            style={styles.button}
            title="Calculate"
            onPress={this.calculateButtonHandler}
            disabled={this.state.disabled}
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
    onResultCalculate: () => dispatch(actions.calculateMale)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
