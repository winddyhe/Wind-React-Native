/**
 * Wind React Native App
 * @Winddy
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator,
  BackAndroid
} from 'react-native';

import ListViewTest  from './app/views/ListViewTest.js';

class WindReactNative extends Component {

  componentDidMount() {
    var navigator = WindReactNative._navigator;
    BackAndroid.addEventListener('hardwareBackPress', ()=>{
      if (navigator.getCurrentRoutes().Length === 1){
        return false;
      }
      navigator.pop();
      return true;
    });
  }

  componentWillUnmount(){
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <Navigator 
        style={styles.container}
        tintColor='#FF6600'
        initialRoute={{id: 'ListViewTest'}}
        renderScene={this.renderNavigatorScene.bind(this)}
        />
    );
  }

  renderNavigatorScene(route, navigator){
    var Component = null;
    WindReactNative._navigator = navigator;
    switch (route.id) {
      case 'ListViewTest':
        Component = this.renderWListViewTest(navigator);
        break;
    }
    return Component;
  }

  renderWListViewTest(navigator){
    return (
      <ListViewTest navigator = {navigator}/>
    );
  }
}

WindReactNative._navigator = null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6EF',
  }
});

AppRegistry.registerComponent('WindReactNative', () => WindReactNative);
