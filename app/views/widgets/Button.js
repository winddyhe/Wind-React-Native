'use strict';

import React, {Component} from 'react';
import{
    StyleSheet,
    TouchableHighlight,
    View,
    Text
} from 'react-native';

class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active : false
        };
    }
    
    onHighlight(){
        this.setState({ active: false });
    }

    onUnHightlight(){
        this.setState({ active: true });
    }

    render() {
        var colorStyle = {
            color: this.state.active ? '#fff' : '#000',
        };

        return (
            <TouchableHighlight onHideUnderlay={this.onUnHightlight.bind(this)}
                                onPress={this.props.onPress}
                                onShowUnderlay={this.onHighlight.bind(this)}
                                style={[Styles.button, this.props.style]}
                                underlayColor='#a9d9d4'>
                <Text style={[Styles.buttonText, colorStyle]}>
                    {this.props.children}
                </Text>
            </TouchableHighlight>    
        );
    }
}

const Styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#FF6600'
    },

    buttonText:{
        fontSize: 18,
        margin: 5,
        textAlign: 'center'
    }
});

export default Button;