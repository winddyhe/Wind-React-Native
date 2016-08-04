'use strict'

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

import HeaderToolbar from './widgets/HeaderToolbar.js';
import ToggleActivityIndicator from './widgets/ToggleActivityIndicator.js';

class ActivityIndicatorTest extends Component {
    render() {
        return (
            <View style = { styles.container }>
                <HeaderToolbar title         = {this.props.title}
                               backImage     = {require('./images/back_white.png') }
                               onBackPressed = {this.props.navigator.pop}
                               titleColor    = {'#FFFFFF'} />
                <View style={ {paddingTop: 100} }>
                    <ToggleActivityIndicator />
                </View>

                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff" />
                    <ActivityIndicator color="#aa00aa" />
                    <ActivityIndicator color="#aa3300" />
                    <ActivityIndicator color="#00aa00" />
                </View>

                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                        />
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                        style={{transform: [{scale: 5}], height: 150}}
                        />
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"
                        />
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"
                        />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ActivityIndicatorTest;