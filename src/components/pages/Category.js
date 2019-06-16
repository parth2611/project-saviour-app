import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Alert ,Image, TouchableOpacity ,SearchBar, StatusBar ,search, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
  import { createStackNavigator, createAppContainer } from 'react-navigation';
import News from '../../Images/news1.jpg';
import Land from '../../Images/land.jpg';
import ToDo from '../pages/ToDo';
import Img from '../../Images/AppLogo.png';
import dailytask from '../../Images/dailytask.jpg';
import earth from '../../Images/earth.jpeg';
import energy from '../../Images/energy.jpg';
import land from '../../Images/land.png';
import air from "../../Images/air.jpeg";


export class Category extends Component {


  static navigationOptions = {
    header: null,
  };

   

    render() {

        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#16363b" />

            <View style={styles.topBar}>
              <Text style={styles.txtBar}>Activities</Text>
              <View style={styles.menuViewright} />
            </View>
            <ScrollView>
              <View style={{ flex: 1 }}>
                <View>
                  <Card style={{ flex: 0 }}>
                    <CardItem cardBody>
                      <Image
                        source={dailytask}
                        style={{ height: 250, width: null, flex: 1 }}
                      />
                    </CardItem>
                  </Card>
                </View>

                {/* Bottom After first card */}
                <Container style={{ padding: 10 }}>
                  <Content style={{ flex: 1 }}>
                    <List>
                      <ListItem>
                        <Image
                          source={land}
                          style={{ height: 80, width: 80 }}
                        />
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 16 }}>
                            Land Related Tasks
                          </Text>

                          <Button
                            style={{
                              backgroundColor: "#FF7043",
                              marginTop: 10
                            }}
                            onPress={() =>
                              this.props.navigation.navigate("ToDo")
                            }
                          >
                            <Text style={{ padding: 20 }}>
                              Check Out
                            </Text>
                          </Button>
                        </View>
                      </ListItem>

                      <ListItem>
                        <Image
                          source={air}
                          style={{ height: 80, width: 80 }}
                        />
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 16 }}>
                            Water Related Tasks
                          </Text>
                          <Button
                            style={{
                              backgroundColor: "#FF7043",
                              marginTop: 10
                            }}
                            onPress={() =>
                              this.props.navigation.navigate("ToDo")
                            }
                          >
                            <Text style={{ padding: 20 }}>
                              Check Out
                            </Text>
                          </Button>
                        </View>
                      </ListItem>
                      <ListItem>
                        <Image
                          source={earth}
                          style={{ height: 80, width: 80 }}
                        />
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 16 }}>
                            Air Related Tasks
                          </Text>

                          <Button
                            style={{
                              backgroundColor: "#FF7043",
                              marginTop: 10
                            }}
                            onPress={() =>
                              this.props.navigation.navigate("ToDo")
                            }
                          >
                            <Text style={{ padding: 20 }}>
                              Check Out
                            </Text>
                          </Button>
                        </View>
                      </ListItem>
                      <ListItem>
                        <Image
                          source={energy}
                          style={{ height: 80, width: 80 }}
                        />
                        <View style={{ marginLeft: 20 }}>
                          <Text style={{ fontSize: 16 }}>
                            Energy Related Tasks
                          </Text>

                          <Button
                            style={{
                              backgroundColor: "#FF7043",
                              marginTop: 10
                            }}
                            onPress={() =>
                              this.props.navigation.navigate("ToDo")
                            }
                          >
                            <Text style={{ padding: 20 }}>
                              CheckOut
                            </Text>
                          </Button>
                        </View>
                      </ListItem>
                    </List>
                  </Content>
                </Container>
              </View>
            </ScrollView>
          </View>
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
    Category: Category,
    ToDo : ToDo
});

const Stack = createAppContainer(AppStackNavigator);

const styles = {

    Container: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  topBar: {
    height: 60,
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

}

