import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert } from 'react-native';
export default class SecondScreen extends React.Component {
    constructor() {
        super(...arguments);
        this.navigateToNextScreen = () => {
            this.props.navigation.navigate("UcuncuEkran", {
                id: 100,
                name: "Fatih"
            });
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Button, { onPress: () => Alert.alert(this.props.navigation.state.params.id + " " + this.props.navigation.state.params.name), title: "Değerleri Göster" }),
            React.createElement(Button, { onPress: this.navigateToNextScreen, title: "Go to Üçüncü Ekran" }),
            React.createElement(Text, { style: styles.welcome }, "THIS IS THE SECOND SCREEN!")));
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
//# sourceMappingURL=SecondScreen.js.map