import React,{Component} from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import background from '../Images/LoginBackground.jpeg';
import AppLogo from '../Images/AppLogo.png';
import { ScrollView } from 'react-native-gesture-handler';
import { Container, Header, Content, Item, Input, Icon, Button, Textarea} from 'native-base';

export default class Register extends Component {


  constructor(props) {

    super(props)

    this.state = {

      TextInputName: '',
      TextInputEmail: '',
      TextInputPhoneNumber: '',
      TextInputPassword: '',
      TextInputAddress: '',
      TextInputPincode: ''
    }

  }

  InsertDataToServer = () => {


    const { TextInputName } = this.state;
    const { TextInputEmail } = this.state;
    const { TextInputPhoneNumber } = this.state;
    const { TextInputPassword } = this.state;
    const { TextInputAddress } = this.state;
    const { TextInputPincode } = this.state;

    console.log(TextInputName);
    console.log(TextInputEmail);
    console.log(TextInputPhoneNumber);
    console.log(TextInputPassword);
    console.log(TextInputAddress);
    console.log(TextInputPincode);


    fetch("http://192.168.43.62/environment/api/user-sing-up.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: TextInputName,
        email: TextInputEmail,
        phone_number: TextInputPhoneNumber,
        password: TextInputPassword,
        address: TextInputAddress,
        pincode: TextInputPincode
      })
    })
      .then(response => response.text())
      .then(responseJson => {
        // Showing response message coming from server after inserting records.
        console.log("hello");
        Alert.alert(JSON.stringify(responseJson));
      })
      .catch(error => {
        console.error(error);
      });


  }
    static navigationOptions = {
        header: null,
    };

        render(){
            return (
              <ImageBackground
                source={background}
                style={{ width: "100%", height: "100%" }}
              >
                <ScrollView>
                  <View style={styles.container}>
                    <View style={styles.registerForm}>
                      {/* <TextInput
                        style={styles.input}
                        placeholder="Enter Name"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          this.emailInput.focus()
                        }
                        onChangeText={user_name =>
                          this.setState({ user_name })
                        }
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter Your Email"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          this.passwordInput.focus()
                        }
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={input => (this.emailInput = input)}
                        onChangeText={user_email =>
                          this.setState({ user_email })
                        }
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        secureTextEntry
                        ref={input => (this.passwordInput = input)}
                        returnKeyType="go"
                        onChangeText={user_password =>
                          this.setState({ user_password })
                        }
                      />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter Your Mobile Number"
                        returnKeyType="next"
                        onSubmitEditing={() =>
                          this.passwordInput.focus()
                        }
                        keyboardType="number"
                        ref={input => (this.numberInput = input)}
                        onChangeText={user_mobile =>
                          this.setState({ user_mobile })
                        }
                      />

                      <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress = { () => {
                          this.userRegister
                        } }
                      >
                        <Text style={styles.buttonText}>
                          Sign up
                        </Text>
                      </TouchableOpacity> */}

                      <Content>
                        <Item >
                          <Input
                            style={styles.formInput}
                            placeholder="Enter Your name"
                            onChangeText={TextInputName =>
                              this.setState({ TextInputName })
                            }
                          />
                        </Item>
                        <Item>
                          <Input
                            style={styles.formInput}
                            placeholder="Enter email ID"
                            onChangeText={TextInputEmail =>
                              this.setState({ TextInputEmail })
                            }
                            keyboardType="email-address"
                          />
                        </Item>

                        <Item>
                          <Input
                            style={styles.formInput}
                            placeholder="Enter Phone Number"
                            onChangeText={TextInputPhoneNumber =>
                              this.setState({
                                TextInputPhoneNumber
                              })
                            }
                            keyboardType="number-pad"
                          />
                        </Item>

                        <Item>
                          <Input
                            style={styles.formInput}
                            placeholder="Enter Password"
                            onChangeText={TextInputPassword =>
                              this.setState({ TextInputPassword })
                            }
                            secureTextEntry={true}
                          />
                        </Item>

                        <Textarea
                          style={styles.formInput}
                          rowSpan={5}
                          bordered
                          placeholder="Textarea"
                          onChangeText={TextInputAddress =>
                            this.setState({ TextInputAddress })
                          }
                        />

                        <Item>
                          <Input
                            style={styles.formInput}
                            placeholder="Pincode"
                            onChangeText={TextInputPincode =>
                              this.setState({ TextInputPincode })
                            }
                            keyboardType="number-pad"
                          />
                        </Item>

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
                          onPress={this.InsertDataToServer}
                        >
                          <Text style={{ padding: 20 }}>
                            {" "}
                            Submit{" "}
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
                            textAlign: "center",
                            alignContent: "center"
                          }}

                          onPress={() => this.props.navigation.navigate('Login')}
                        >
                          <Text style={{ padding: 20 }}>
                            {" "}
                            Back To Login Page{" "}
                          </Text>
                        </Button>
                      </Content>

                      {/* <Button style={styles.buttonContainer} >
                        <Text style= {styles.buttonText} >Hello</Text>

                      </Button> */}
                    </View>
                  </View>
                </ScrollView>
              </ImageBackground>
            );
        }

}



const styles = {
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    input: {
        paddingLeft: 20,
        
        fontSize: 16,
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
    }, logo: {
        height: 150,
        width: 150,
        alignSelf: 'center',
    },

  formInput:{
    marginTop: 15,
    paddingLeft: 15,
  }
}