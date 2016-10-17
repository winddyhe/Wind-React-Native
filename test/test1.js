
import React, {Component} from 'react';

import { 
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity
 } from 'react-native';

const { width, height } = Dimensions.get('window');

import TestView2 from './test2.js';

class Test1View extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: this.props.navigator
    }

    this.onPress = this.onPress.bind(this);
    this.renderView2 = this.renderView2.bind(this);
  }
  

  render() {
    return (
      <View style={ styles.container }>
        <TouchableOpacity onPress = { this.onPress }>
          <Text>Navigator View 1...</Text>
        </TouchableOpacity>
      </View>
    );
  }

  onPress(){
    this.state.navigator.push({ id:'Test2View', renderView: this.renderView2 });
  }

  renderView2(route, navigator){
    return (<TestView2 navigator = { navigator }/>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F6F6EF',
    width: width - 40,
    height: height - 80,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  }
});

export default Test1View;