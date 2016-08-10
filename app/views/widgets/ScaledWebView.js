'use strict';

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    WebView
} from 'react-native';

import Button from './widgets/Button1.js';

class ScaledWebView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scalingEnabled: true
        };
    }
    
    render() {
        return (
            <View>
                <WebView style={{backgroundColor: 'rgba(255, 255, 255, 0.8)', height: 200}}
                         source={{uri:'https://www.baidu.com'}}
                         scalesPageToFit={this.state.scalingEnabled}
                />
                <View style={Styles.buttons}>
                    {
                        this.state.scalingEnabled ?
                            <Button text = 'Scaling: ON'
                                    enabled = {true}
                                    onPress={()=>this.setState({scalingEnabled: false})}
                            />
                            :
                            <Button text = 'Scaling: OFF'
                                    enabled = {true}
                                    onPress={()=>this.setState({scalingEnabled: true})} 
                            />
                    }
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    buttons:{
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default ScaledWebView;