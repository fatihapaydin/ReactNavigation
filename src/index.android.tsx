import React from 'react';
import { AppRegistry, ViewStyle, TextStyle, StyleSheet, Button, View, Text } from 'react-native';
import INav from "./Arayuzler/Navigasyon";
import { StackNavigator, NavigationScreenProps, NavigationRouteConfigMap, DrawerNavigator, NavigationActions } from 'react-navigation';
import SecondScreen from "./Sayfalar/SecondScreen";
import UcuncuEkran from "./Sayfalar/UcuncuEkran";

interface StartScreenProps extends NavigationScreenProps<INav.EkranNavigasyonParametreler> { }

export default class Yeniden extends React.Component<StartScreenProps, {}> {

  render() {

    return (
      <View style={styles.container}>
        <Button onPress={() => this.props.navigation.navigate("DrawerOpen")} title="Menüyü Aç" />
        <Button onPress={this.navigateToNextScreen} title="Go to Second Screen" />
        <Text style={styles.welcome}>
          Welcome to React Native Navigation !
        </Text>
      </View>
    );
  }

  private navigateToNextScreen = (): void => {

    this.props.navigation.navigate(
      "SecondScreen",
      {
        id: 500,
        name: "İkinci Ekrana gelen"
      } as INav.EkranNavigasyonParametreler,
    );
  }

}


const routeConfigMap: NavigationRouteConfigMap = {
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

const AppNavigator = StackNavigator(
  routeConfigMap,
  {
    navigationOptions: {
      headerLeft: <Button onPress={() => NavigationActions.navigate({ routeName: "Menu" })} title="A" />,
      headerStyle: { paddingRight: 10, paddingLeft: 10, backgroundColor: "cornflowerblue" }
    }
  }
);


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
  } as ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as TextStyle,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as TextStyle,
});

AppRegistry.registerComponent('Yeniden', () => Menu);

