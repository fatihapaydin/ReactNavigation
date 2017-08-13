import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert } from 'react-native';
export default class UcuncuEkran extends React.Component {
    constructor() {
        super(...arguments);
        this.navigateToNextScreen = () => {
            this.props.navigation.navigate("Yeniden", {
                id: this.props.navigation.state.params.id,
                name: this.props.navigation.state.params.name,
            });
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Button, { onPress: () => Alert.alert(this.props.navigation.state.params.id + " " + this.props.navigation.state.params.name), title: "Üçüncünün Değerlerini Göster" }),
            React.createElement(Button, { onPress: this.navigateToNextScreen, title: "Go to Home" }),
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
AppRegistry.registerComponent('UcuncuEkran', () => UcuncuEkran);
//# sourceMappingURL=UcuncuEkran.js.map