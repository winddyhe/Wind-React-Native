import React, {Component} from 'react';

import {
    StyleSheet
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';

class HeaderToolbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            onBackPressed: this.props.onBackPressed
        };
    }

    render() {
        return (
            <ToolbarAndroid style={styles.toolbar}
                            title={this.props.title}
                            navIcon={this.props.backImage}
                            onIconClicked={this.state.onBackPressed}
                            titleColor={this.props.titleColor}/>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        height: 56,
        backgroundColor: '#DD4400',
    }
});

export default HeaderToolbar;