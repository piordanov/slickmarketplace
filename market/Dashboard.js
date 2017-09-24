import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';

export default class Dashboard extends React.Component {
    render() {
        return (<View style={{flex: 1}}>
                    <WebView
                        source={{uri: 'bit.ly/slickresale'}}
                        style={{flex: 1}}
                    />
                </View>);
    }
}
