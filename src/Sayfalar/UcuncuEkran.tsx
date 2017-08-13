import React from 'react';
import { StyleSheet, Text, View, AppRegistry, Button, Alert } from 'react-native';
import { NavigationScreenProps } from 'react-navigation';
import INav from "./../Arayuzler/Navigasyon";


interface NextScreenProps extends NavigationScreenProps<INav.EkranNavigasyonParametreler> { }

export default class UcuncuEkran extends React.Component<NextScreenProps, {}> {


    render() {

        return (

            <View style={styles.container}>
                <Button onPress={() => Alert.alert(this.props.navigation.state.params.id + " " + this.props.navigation.state.params.name)} title="Üçüncünün Değerlerini Göster" />
                <Button onPress={this.navigateToNextScreen} title="Go to Home" />
                <Text style={styles.welcome}>
                    THIS IS THE SECOND SCREEN!
                </Text>

            </View>
        );
    }


    private navigateToNextScreen = (): void => {
        this.props.navigation.navigate(
            "Yeniden",
            {
                id: this.props.navigation.state.params.id,
                name: this.props.navigation.state.params.name,
            } as INav.EkranNavigasyonParametreler,
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


AppRegistry.registerComponent('UcuncuEkran', () => UcuncuEkran);