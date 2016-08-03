import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight
}  from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';

import WListView from '../components/ListView/index.js';
import ListViewConfig from './config/ListViewConfig.json';

class ListViewTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            RowArrays: ListViewConfig.ListViewRows
        };
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <ToolbarAndroid style={styles.toolbar}
                    title={'ListViewTest'}
                    navIcon={require('./images/back_white.png')}
                    onIconClicked={this.props.navigator.pop}
                    titleColor={'#FFFFFF'}/>
                <WListView
                    style      = { styles.container }
                    dataSource = {this.state.RowArrays}
                    renderRow  = {(rowData) => this.renderListViewRow(rowData) }
                />
            </View>
        );
    }

    renderListViewRow(rowData) {
        return (
            <TouchableHighlight key={rowData.Title} 
                                style={styles.row}
                                onPress={()=>this.onListViewRowPressed(rowData)}
                                underlayColor='#DD4400'>
                <View >
                    <Text style={styles.rowText}>{rowData.Title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    onListViewRowPressed(rowData) {
        this.props.navigator.push({
            id: rowData.RouteID,
            title: rowData.Title
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee'
    },
    row: {
        padding: 10,
        backgroundColor: '#FF6600',
        height: 60,
        margin: 1
    },
	rowText: {
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 30,
    },
    toolbar: {
        height: 56,
        backgroundColor: '#DD4400',
    }
});

export default ListViewTest;