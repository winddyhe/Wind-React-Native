
import React, {Component} from 'react';

import { 
  View,
  Text,
  Dimensions,
  StyleSheet
 } from 'react-native';

const { width, height } = Dimensions.get('window');

class Test2View extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>Navigator View 2...</Text>
      </View>
    );
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

export default Test2View;