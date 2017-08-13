import React from 'react';
import { AppRegistry, StyleSheet, Button, View, Text } from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationActions } from 'react-navigation';
import SecondScreen from "./Sayfalar/SecondScreen";
import UcuncuEkran from "./Sayfalar/UcuncuEkran";
export default class Yeniden extends React.Component {
    constructor() {
        super(...arguments);
        this.navigateToNextScreen = () => {
            this.props.navigation.navigate("SecondScreen", {
                id: 500,
                name: "İkinci Ekrana gelen"
            });
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Button, { onPress: () => this.props.navigation.navigate("DrawerOpen"), title: "Menüyü Aç" }),
            React.createElement(Button, { onPress: this.navigateToNextScreen, title: "Go to Second Screen" }),
            React.createElement(Text, { style: styles.welcome }, "Welcome to React Native Navigation !")));
    }
}
const routeConfigMap = {
    "Yeniden": {
        path: "start",
        screen: Yeniden,
        navigationOptions: {
            title: "Ana Ekran Güncel",
        }
    },
    "SecondScreen": {
        path: "next",
        screen: SecondScreen,
        navigationOptions: {
            title: "İkinci Ekran Güncel",
        }
    },
    "UcuncuEkran": {
        path: "next3",
        screen: UcuncuEkran,
        navigationOptions: {
            title: "Üçüncü Ekran Güncel",
        }
    }
};
const AppNavigator = StackNavigator(routeConfigMap, {
    navigationOptions: {
        headerLeft: React.createElement(Button, { onPress: () => NavigationActions.navigate({ routeName: "Menu" }), title: "A" }),
        headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: "cornflowerblue" }
    }
});
export const Menu = DrawerNavigator({
    Yeniden: {
        screen: AppNavigator,
        navigationOptions: {
            drawerLabel: "Ana Sayfa"
        }
    },
    SecondScreen: {
        screen: SecondScreen, navigationOptions: {
            drawerLabel: "İkinci Ekran"
        }
    },
    UcuncuEkran: {
        screen: UcuncuEkran,
        navigationOptions: {
            drawerLabel: "Üçüncü Ekran"
        }
    }
});
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
AppRegistry.registerComponent('Yeniden', () => Menu);
//# sourceMappingURL=index.android.js.map