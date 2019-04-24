import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Instabug from 'instabug-reactnative';
import { INSTABUG_TOKEN } from './config'

export default class App extends Component {
  constructor(props) {
    super(props);
    if (Platform.OS === 'ios') {
      Instabug.startWithToken(INSTABUG_TOKEN, Instabug.invocationEvent.shake);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
