import React, {Component} from 'react';

import {
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

class ToggleActivityIndicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animating: true
        };
    }

    setToggleTimeout() {
        this.timer = setTimeout(() => {
            this.setState({ animating: !this.state.animating });
            this.setToggleTimeout();
        }, 2000);
    }

    componentDidMount() {
        this.setToggleTimeout();
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <ActivityIndicator style = { styles.centering }
                animating = {this.state.animating}
                style = {[styles.centering, { height: 80 }]}
                size = 'large'
                color = '#DD4400'
                />
        );
    }
}

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    }
});

export default ToggleActivityIndicator;