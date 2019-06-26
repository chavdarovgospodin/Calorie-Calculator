import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";


class Input extends Component {
  state = {
    orderForm: {
      age: {
        text: "Type your age here!",
        placeholder: "Age"
      },
      height: {
        text: "Type your height here!",
        placeholder: "Height"
      },
      weight: {
        text: "Type your weight here!",
        placeholder: "Weight"
      }
    }
  };

  validation () {
    
  }
  render() {
    const formElementsArray = [];
    

    for (let key in this.state.orderForm) {
    
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
       
      });
    }
 
   
    let form = (
      <View>
        {/* {formElementsArray.map(formElement => (
          <Text key={formElement.id}>{formElement.config.text}</Text>
        ))} */}
        {formElementsArray.map(formElement => (
       
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={3}
            key={formElement.id}
            placeholder={formElement.config.placeholder}
            onChangeText={(text)=>this.props.added(formElement.id,text)}
          />
        ))}
      </View>
    );
    return (form);
  }
}

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
    backgroundColor: "#F5FCFF",
    marginTop: 20
  },
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    marginRight: 60
  },
  text: {
    margin: 10,
    fontSize: 15,
    marginBottom: 25,
    justifyContent: "center"
  }
});

export default Input;
