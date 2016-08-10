'use strict';

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Text,
    TouchableWithoutFeedback
} from 'react-native';

class Button1 extends Component {

    handlePress(){
        if (this.props.enabled !== false && this.props.onPress){
            this.props.onPress();
        }
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress = {this.handlePress.bind(this)}>
                <View style = {[Styles.button, this.props.enabled ? {} : Styles.buttonDisabled]}>
                    <Text style={Styles.buttonText}>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const Styles = StyleSheet.create({
    button:{
        flex: 0.5,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray'
    },
    buttonDisabled:{
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.25)',
        borderColor: 'transparent',
        borderRadius: 3
    },
    buttonText:{
        color: 'white',
        fontSize: 13
    }
});

export default Button1;