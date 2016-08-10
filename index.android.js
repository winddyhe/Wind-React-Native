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

import ListViewTest           from './app/views/ListViewTest.js';
import ActivityIndicatorTest  from './app/views/ActivityIndicatorTest.js';
import ModalTest              from './app/views/ModalTest.js';
import WebViewTest            from './app/views/WebViewTest.js';

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
        Component = this.renderWListViewTest(route, navigator);
        break;
      case 'ActivityIndicatorTest':
        Component = this.renderWActivityIndicatorTest(route, navigator); 
        break;
      case "ModalTest":
        Component = this.renderWModalTest(route, navigator);
        break;
      case "WebViewTest":
        Component = this.renderWWebViewTest(route, navigator);
        break;
    }
    return Component;
  }

  renderWListViewTest(route, navigator){
    return (
      <ListViewTest title = {route.title} navigator = {navigator}/>
    );
  }

  renderWActivityIndicatorTest(route, navigator){
    return (
      <ActivityIndicatorTest title = {route.title} navigator = {navigator} />
    );
  }

  renderWModalTest(route, navigator){
    return (
      <ModalTest title = {route.title} navigator = {navigator} />
    );
  }

  renderWWebViewTest(route, navigator){
    return (
      <WebViewTest title = {route.title} navigator = {navigator} />
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
