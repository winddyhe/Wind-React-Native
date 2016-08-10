import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    WebView
} from 'react-native';

import ScaledWebView from './widgets/ScaledWebView.js';

class WebViewTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: 'http://www.qq.com',
            status: 'No Page Loaded...',
            backButtonEnabled: false,
            forwardButtonEnabled: false,
            loading: true,
            scalesPageToFit: true,
        }
    }

    handleTextInputChange(event) {
        var url = event.nativeEvent.text;
        if (!/^[a-zA-Z-_]+:/.test(url)) {
            url = 'http://' + url;
        }
        WebViewTest.inputText = url;
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderToolbar title         = {this.props.title}
                               backImage     = {require('./images/back_white.png') }
                               onBackPressed = {this.props.navigator.pop}
                               titleColor    = {'#FFFFFF'} />
                <View style={[Styles.container]}>
                    <View style={[Styles.addressBarRow]}>
                        <TouchableOpacity onPress={this.goBack.bind(this)}
                                          style={this.state.backButtonEnabled ? Styles.navButton : Styles.disabledButton}>
                            <Text>
                                {'<'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.goForward}
                                          style={this.state.forwardButtonEnabled ? Styles.navButton : Styles.disabledButton}>
                            <Text>
                                {'>'}
                            </Text>
                        </TouchableOpacity>
                        <TextInput ref={'urlInput'}
                                   autoCapitalize='none'
                                   defaultValue={this.state.url}
                                   onSubmitEditing={this.onSubmitEditing.bind(this)}
                                   onChange={this.handleTextInputChange.bind(this)}
                                   clearButtonMode='white-editing'
                                   style={Styles.addressBarTextInput}
                        />
                        <TouchableOpacity onPress={this.pressGoButton.bind(this)}>
                            <View style={Styles.goButton}>
                                <Text>
                                    Go!
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <WebView ref={'webview'}
                             automaticallyAdjustContentInsets={false}
                             style={Styles.webView}
                             source={{uri: this.state.url}}
                             javaScriptEnabledAndroid = {true}
                             domStorageEnabled={true}
                             decelerationRate='normal'
                             onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                             onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest.bind(this)}
                             startInLoadingState={true}
                             scalesPageToFit={this.state.scalesPageToFit}
                    />
                    <View style={Styles.statusBar}>
                        <Text style={Styles.statusBarText}>
                            {this.state.status}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    goBack(){
        this.refs['webview'].goBack();
    }

    goForward(){
        this.refs['webview'].goForward();
    }

    reload(){
        this.refs['webview'].reload();
    }

    onShouldStartLoadWithRequest(event){
        return true;
    }

    onNavigationStateChange(navState){
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForword,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true
        });
    }

    onSubmitEditing(){
        this.pressGoButton();
    }

    pressGoButton(){
        var url = this.inputText.toLowerCase();
        if (url === this.state.url){
            this.reload();
        }
        else{
            this.setState({url: url});
        }
        this.refs['urlInput'].blur();
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3b5998',
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8,
    },
    webView: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 350,
    },
    addressBarTextInput:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14
    },
    navButton: {
        width: 20,
        padding: 3,
        paddingRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderColor: 'transparent',
        borderRadius: 3
    },
    disabledButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DISABLED_WASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 3,
        alignSelf: 'stretch'
    },
    statusBar:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22
    },
    statusBarText:{
        color: 'white',
        fontSize: 13,
    },
    spinner: {
        width: 20,
        marginRight: 6
    }
});

WebViewTest.inputText = '';

export default WebViewTest;