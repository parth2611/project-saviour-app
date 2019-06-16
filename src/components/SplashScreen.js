import React, {Component} from 'react';
import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import TPS from '../Images/TPS.gif';

export default class SplashScreen extends React.Component{


    static navigationOptions = {
        header: null,
    };
    performTimeConsumingTask = async () => {
        return new Promise((resolve) =>
            setTimeout(
                () => { resolve('result') },
                9000
            )
        )
    }

    async componentDidMount() {
        // Preload data from an external API
        // Preload data using AsyncStorage
        const data = await this.performTimeConsumingTask();

        if (data !== null) {
            this.props.navigation.navigate('Login');
        }
    }

    render() {

        
        return (
            <Image
                source={TPS}
                style={{ width: "100%", height: "100%" }}
            />
        );

    }

}


const styles = {
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#16363b"
  },
  textStyles: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  }
};