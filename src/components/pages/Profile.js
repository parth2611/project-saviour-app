import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  AsyncStorage,
  StatusBar,
  Image,
  Linking,
  Animated,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input } from 'native-base';
import { Rating } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import {TPS} from '../../Images/AppLogo.png';
import earth from '../../Images/earth.jpeg';
export default class Profile extends Component {


  constructor(props) {
        super(props);

        this.state = {
          ProfileEmail: []
        };
      AsyncStorage.multiGet(['email']).then((data) => {
        let email = data[0][1];
        this.state.ProfileEmail = email;
      })


    }

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "http://192.168.43.62//environment/api/get-score.php?user_email=A"
    );


    const json = await response.json();
    this.setState({ data: json.data });

  }


    render() {
        return (
          <View style={styles.Container}>
            <StatusBar backgroundColor="#16363b" />

            <View style={styles.topBar}>
              <Text style={styles.txtBar}> Profile </Text>
              <View style={styles.menuViewright} />
            </View>

          <View style={styles.container}>
            <View style={styles.header} />
            <Image
              style={styles.avatar}
              source={require("../../Images/user.png")}
            />
            <View style={styles.body}>
              <View style={styles.bodyContent}>
                <Text style={styles.name}>
                  {this.state.ProfileEmail}
                </Text>
              </View>

              <Image

                style={{height:180, width:180, marginLeft:110, marginTop:10}}
                source={earth}
              />

              <FlatList
                style={{ flex: 0, marginTop:20 }}
                data={this.state.data}
                keyExtractor={(x, i) => i}
                renderItem={({ item }) => (
                  <Content style={{ backgroundColor: "#fff" }}>
                    <List>
                      <ListItem>
                        <Left>
                          <Text style={{
                            fontSize: 18,
                            textAlign: "center",

                            fontWeight: "bold",
                            color: "green"
                          }}>You have earned :</Text>
                        </Left>
                        <Body>
                          <Text
                            style={{
                              fontSize: 18,
                              textAlign: "center",

                              fontWeight: "bold",
                              color: "green"
                            }}
                          >
                            {item.Earned_Score}
                          </Text>
                        </Body>
                      </ListItem>

                    </List>
                  </Content>
                )}
              />



            </View>

          </View>

          </View>
        );
    }
}



const styles = StyleSheet.create({
    header: {
        backgroundColor: "#00BFFF",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130
    },
    name: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 50,
        marginLeft: 100,
        height: 250,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 360,
        backgroundColor: "#ff0000",
    },
    buttonContainer2: {
        marginTop: 10,
        marginLeft: 160,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 100,
        borderRadius: 360,
        backgroundColor: "#ffd700",
    },

  Container: {
    flex: 1,
    flexDirection: "column"
  },
  topBar: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#256d7b"
  },

  leftHeader: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "flex-start"
  },

  rightHeader: {
    flex: 1,
    justifyContent: "flex-end"
  },

  txtBar: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16, marginLeft: 10
  },

  contentBar: {
    flex: 1
  },

  imgMenu: {
    width: 20,
    height: 20
  },

  imgClick: {
    width: 40,
    height: 40,
    justifyContent: "center"
  },

  imgHome: {
    width: 200,
    height: 200
  }

});
