'use strict';

import React, {Component} from 'react';
import {
    Modal,
    StyleSheet,
    Switch,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';

import Button from './widgets/Button.js';
import HeaderToolbar from './widgets/HeaderToolbar.js'; 

class ModalTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            animationType: 'none',
            modalVisible: false,
            transparent: false,
        };
    }

    setModalVisible(visible){
        this.setState({modalVisible: visible});
    }

    setAnimationType(type){
        this.setState({animationType: type});
    }

    toggleTransparent(){
        this.setState({transparent: !this.state.transparent});
    }
    
    render() {

        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent ? {backgroundColor: '#ffffff', padding: 20} : null;
        var activeButtonStyle = {
            backgroundColor: '#dddddd'
        };

        return (
            <View style={{flex: 1}}>
                <HeaderToolbar title         = {this.props.title}
                               backImage     = {require('./images/back_white.png') }
                               onBackPressed = {this.props.navigator.pop}
                               titleColor    = {'#FFFFFF'} />
                <Modal animationType={this.state.animationType}
                       transparent={this.state.transparent}
                       visible={this.state.modalVisible}
                       onRequestClose={()=>{this.setModalVisible(false)}}>
                    <View style={[Styles.container, modalBackgroundStyle]}>
                        <View style={[Styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text>
                                This modal was presented {this.state.animationType == 'none' ? 'without' : 'with'} animation.
                            </Text>
                            <Button onPress={this.setModalVisible.bind(this, false)}
                                    style={Styles.modalButton}>
                                Close
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View>
                <Text style={[Styles.rowTitle]}>
                        Animation Type
                </Text>
                <View style={Styles.row}>    
                    <Button onPress={this.setAnimationType.bind(this, 'none') }
                            style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
                        none
                    </Button>
                    <Button onPress={this.setAnimationType.bind(this, 'slide') }
                            style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
                        slide
                    </Button>
                    <Button onPress={this.setAnimationType.bind(this, 'fade') }
                            style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
                        fade
                    </Button>
                </View>
                <View style={Styles.row}>
                    <Text style={Styles.rowTitle}>Transparent</Text>
                    <Switch value={this.state.transparent} onValueChange={this.toggleTransparent.bind(this)}/>
                </View>
                <Button onPress={this.setModalVisible.bind(this, true)}
                        style={{height: 25}}>
                    Present
                </Button>
                </View>
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer:{
        borderRadius: 10,
        alignItems: 'center'  
    }, 
    row:{
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 20
    },
    rowTitle: {
        flex: 1,
        fontWeight: 'bold',
    },
    modalButton: {
        marginTop: 10,
    }
});

export default ModalTest;