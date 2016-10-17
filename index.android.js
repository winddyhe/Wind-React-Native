/**
 * Wind React Native App
 * @author WinddyHe
 */
'use strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Navigator,
  Text
} from 'react-native';

//import { NavigatorBar } from './core';
import NavigatorBar from './core/components/NavigatorBar/index.js';
import TestView1 from './test/test1.js';

class WindReactNative extends Component {
    constructor(props) {
      super(props);
      
      this.configureNavigatorScene = this.configureNavigatorScene.bind(this);
      this.renderTestView1 = this.renderTestView1.bind(this);
    }

    render() {
      return (
        <NavigatorBar style={styles.container}
                      tintColor={'#F6F6EF'}
                      initialRoute={{ id: 'TestView1', renderView: this.renderTestView1 }}
                      configureScene={this.configureNavigatorScene}
                      barHeight = { 46 }
                      barBGColor = { 'red' }
                      barLeft = { <Text>123</Text> }
        />);
    }

    configureNavigatorScene(route, routeStack) {
      return Navigator.SceneConfigs.FloatFromRight;
    }

    renderTestView1(route, navigator){
      return (<TestView1 navigator = { navigator }/>);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  }
});

AppRegistry.registerComponent('WindReactNative', () => WindReactNative);
