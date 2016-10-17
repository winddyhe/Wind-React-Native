/**
 * components 
 * @class NavigatorBar
 * @author WinddyHe
 */
'use strict'

import React, {Component} from 'react';

import {  
  StyleSheet,
  Navigator,
  BackAndroid,
  View,
} from 'react-native';

class NavigatorBar extends Component {

  constructor(props) {
    super(props);

    this.renderNavigatorScene = this.renderNavigatorScene.bind(this);

    this.__navigator = null;
    this.__curRouteId = '';
  }
  
  componentDidMount() {
    // 注册后退按钮事件
    BackAndroid.addEventListener('hardwareBackPress', () => {
      let navigator = this.__navigator;
      if (navigator.getCurrentRoutes().Length === 1) {
        return false;
      }
      navigator.pop();
      return true;
    });
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress');
  }

  render() {
    return (
      <View style = {{ flex: 1 }}>
        <View style={{ height: this.props.barHeight, backgroundColor:this.props.barBGColor }}>
          {this.props.barLeft}
          {this.props.barRight}
          {this.props.barTitle}
        </View>
        <Navigator
          style={this.props.style}
          tintColor={this.props.tintColor}
          initialRoute={this.props.initialRoute}
          renderScene={this.renderNavigatorScene}
          configureScene={this.props.configureScene}
          />
      </View>
    );
  }

  renderNavigatorScene(route, navigator) { 
    this.__navigator = navigator;
    this.__curRouteId = route.id;

    let content = (<View/>);
    if (route.renderView){
      content = (
        <View>
          { route.renderView(route, navigator) }
        </View>
        );
    }

    return content; 
  }
}

export default NavigatorBar;