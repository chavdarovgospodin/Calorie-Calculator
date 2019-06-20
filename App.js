import React, {Component} from 'react';
import {Button} from 'react-native';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Input from './components/input';
import Dropdown from './components/dropdown';
import RadioButton from './components/radioButton';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.container}>Calorie Calculator</Text>
        <RadioButton/>
        <Input text='Age' inputText ="Type your age here!"/>
        <Input text='Height' inputText ="Type your height here!"/>
        <Input text='Weight' inputText ="Type your weight here!"/>
        <Dropdown/>
        <Button title="btn"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
