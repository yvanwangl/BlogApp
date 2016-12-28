/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
var ToolbarAndroid = require('ToolbarAndroid');

export default class AwesomeProject extends Component {
    render() {
        return (
              <View style={styles.container}>
                    <ToolbarAndroid
                        /*logo={require('image!launcher_icon')}*/
                        style={styles.toolbar}>
                            <View style={{height: 56, flexDirection: 'row', alignItems: 'center'}}>
                                <Text>{'\'Tis but a switch'}</Text>
                            </View>
                    </ToolbarAndroid>
                    <Text style={styles.welcome}>
                        Here is my first React Native App!!
                    </Text>
                    <Text style={styles.work}>
                        Hot reload is working!!
                    </Text>
                    <Text>
                        Test
                    </Text>

                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.android.js
                    </Text>
                    <Text style={styles.instructions}>
                        Double tap R on your keyboard to reload,{'\n'}
                        Shake or press menu button for dev menu
                    </Text>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbar: {
        backgroundColor: '#e9eaed',
        height: 56,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    work: {
        textAlign: 'center',
        fontSize:20,
        padding: 10
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
