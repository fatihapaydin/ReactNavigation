import React from 'react';
import { AppRegistry } from 'react-native';
import App from "./src/App";
import { StackNavigator } from 'react-navigation';
import SecondScreen from "./src/SecondScreen";


export default class Yeniden extends React.Component {

  static navigationOptions = {
    title: "Home Screen"
  };

  render() {
    const { navigation } = this.props;

    return (
      <App navigation={navigation} />
    );
  }
}


const SimpleApp = StackNavigator({
  Home: { screen: Yeniden },
  SecondScreen: { screen: SecondScreen }
});

AppRegistry.registerComponent('Yeniden', () => SimpleApp);