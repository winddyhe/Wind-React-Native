'use strict'

import React, {Component} from 'react';

import { 
    StyleSheet, 
    ListView,
    Text,
    View,
} from 'react-native';

class WListView extends Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this.props.dataSource),
            renderRow:  this.props.renderRow,
        };
    }

    render() {
        return (
            <ListView 
                style      = { this.props.style }
                dataSource = { this.state.dataSource }
                renderRow  = { this.state.renderRow } 
            />
        );
    }
}

export default WListView;