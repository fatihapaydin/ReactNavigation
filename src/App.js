import React from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from "react-navigation";


export default class App extends React.Component {


    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Button
                    onPress={() => navigate('Second')}
                    title="Go to Second Screen"
                />
                <Text style={styles.welcome}>
                    Welcome to React Native Navigation Sample!
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
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


AppRegistry.registerComponent('App', () => App);
