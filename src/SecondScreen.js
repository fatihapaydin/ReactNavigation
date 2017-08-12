import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Button } from 'react-native';


export default class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Second Screen Başlığı'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (

            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Home')}
                    title="Go to Home"
                />
                <Text style={styles.welcome}>
                    THIS IS THE SECOND SCREEN!
                </Text>

            </View>
        );
    }
}
const styles = StyleSheet.create({
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
});


AppRegistry.registerComponent('SecondScreen', () => SecondScreen);