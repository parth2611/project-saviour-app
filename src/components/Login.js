
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  AsyncStorage,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import background from '../Images/LoginBackground.jpeg';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Register from'./Register';
import HomeComponent from './HomeComponent';
import { Container, Header, Content, Item, Input, Icon, Button, Textarea, Right } from 'native-base';
import SplashScreen from './SplashScreen';
import AppLogo from '../Images/AppLogo.png';

export class Login extends Component {


  static navigationOptions = {
    header: null,
  };
    constructor(props) {
          super(props);

      this.state = { isLoading: true };
        this.state = {
            UserEmail: '',
            UserPassword: ''
        }

    }


  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

    UserLoginFunction = () => {

        const { UserEmail } = this.state;
        const { UserPassword } = this.state;


      fetch("http://192.168.43.62/environment/api/login.php",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: UserEmail,

          password: UserPassword
        })
      })
        .then(response => response.text())
        .then(responseJson => {
          // If server response message same as Data Matched
          if (responseJson === '\r\n\r\n"Data Matched"') {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigation.navigate("Home");

            AsyncStorage.multiSet([["email", UserEmail]]);

          } else {
            Alert.alert(JSON.stringify(responseJson));
            console.log(JSON.stringify(responseJson));
          }
        })
        .catch(error => {
          console.error(error);
        });


    }

    forgotPassword = () =>{

    }

    static navigationOptions = {
        header: null,
    };

    render() {
      if (this.state.isLoading) {
        return <SplashScreen />;
      }

        return (
          <ImageBackground
            source={background}
            style={{ width: "100%", height: "100%" }}
          >

            <Image
              source={AppLogo}
              style={{width:100, height:100, padding:100, marginLeft:110, marginTop:20}}
            />

            <View style={styles.container}>
              <Content>
                <Item>
                  <Input
                    style={styles.formInput}
                    placeholder="Enter email ID"
                    onChangeText={UserEmail => this.setState({ UserEmail })}
                    keyboardType="email-address"
                  />
                </Item>

                <Item>
                  <Input
                    style={styles.formInput}
                    placeholder="Enter Password"
                    onChangeText={UserPassword => this.setState({ UserPassword })}
                    secureTextEntry={true}
                  />
                </Item>


               <Right>
                 <TouchableOpacity
                  onPress = {this.forgotPassword}
                 >
                 <Text style={{marginTop:20}}>
                   Forgot Password???
                 </Text>

                  </TouchableOpacity>
                </Right>

                <Button
                  bordered
                  dark
                  style={{
                    marginTop: 15,
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    textAlign: "center",
                    alignContent: "center"
                  }}
                            onPress={this.UserLoginFunction}
                >
                  <Text style={{ padding: 20 }}>
                    {" "}
                    Click Here to Login{" "}
                  </Text>
                </Button>

                <Button
                  bordered
                  dark
                  style={{
                    marginTop: 15,
                    alignContent: "center",
                    alignItems: "center",
                    alignSelf: "stretch",
                    textAlign: "center"
                  }}
                  onPress={() =>
                      this.props.navigation.navigate("Register")
                  }
                >
                  <Text style={{ padding: 20 }}>
                    {" "}
                    Create A New Account{" "}
                  </Text>
                </Button>
              </Content>
            </View>

          </ImageBackground>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <Stack />
        );
    }
}

const AppStackNavigator = createStackNavigator({
  Splash: SplashScreen,
  Login: Login,
  Register: Register,
  Home: HomeComponent
});

const Stack = createAppContainer(AppStackNavigator);



const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderWidth: 1,
        marginBottom: 20,
        borderColor: '#1abc9c',
        color: '#34495e'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center',
    },
    buttonText: {

        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20,
    },
    logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },
    buttonContainerRegister: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#1abc9c',
        paddingVertical: 10,
        justifyContent: 'center',
        marginTop: 50,
    },
    formInput: {
        marginTop: 15,
        paddingLeft: 15,
    }
});
