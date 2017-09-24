/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import CameraController from './CameraController.js';
import Dashboard from './Dashboard.js';
// import { NativeRouter, Route, Link } from 'react-router-native';

export default class slickResale extends Component {
  render() {
    return (
      <View style={styles.container}>
          {/* <NativeRouter style={{flex: 1}}>
            <View style={{flex: 1}}>
              <Route exact path="/" component={Dashboard}/>
              <Route path="/camera" component={CameraController}/>
            </View>
          </NativeRouter> */}
          <CameraController />
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('slickResale', () => slickResale);
