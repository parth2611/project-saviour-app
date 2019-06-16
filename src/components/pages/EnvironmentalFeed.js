import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet,Image ,Linking ,ScrollView, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content, Card, CardItem, Thumbnail, ListItem, List, Form, Textarea, Item, Input } from 'native-base';
import { createStackNavigator, createAppContainer } from "react-navigation";

import AddEvent from './AddEvent';

export class EnvironmentalFeed extends Component {

    state = {
        data:[]
    }


  static navigationOptions = {
    header: null,
  };



    componentWillMount(){
        this.fetchData();
        
    }

    fetchData = async () => {
      const response = await fetch(
        "http://192.168.43.62/environment/api/get-event-list.php"
      );
        const json = await response.json();
        this.setState({ data: json.data});
     
        
    } 

 
    render() {

        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#16363b" />

            <View style={styles.topBar}>
              <Text style={styles.txtBar}>E-Feed</Text>
              <Right>
                <Button
                  style={{ backgroundColor: "#256d7b" }}
                  onPress={() =>
                    this.props.navigation.navigate("AddEvent")
                  }
                >
                  <Text style={styles.txtBar}> Add </Text>
                </Button>
              </Right>
            </View>

            <FlatList
              style={{ flex: 0 }}
              data={this.state.data}
              keyExtractor={(x, i) => i}
              renderItem={({ item }) => (
                <Content style={{ backgroundColor: "#fafafa" }}>
                  <List>
                    <ListItem>
                      <Body>
                        <Text
                          style={{
                            fontSize: 18,
                            textAlign: "center",

                            fontWeight: "bold",
                            color: "green"
                          }}
                        >
                          {item.event_title}
                        </Text>
                        <Text
                          style={{
                            fontSize: 18,
                            textAlign: "center",

                            fontWeight: "bold",
                            color: "green"
                          }}
                        >
                          {item.event_details}
                        </Text>
                        <View>
                          
                          <Text style={{ color: 'blue' }}
                            onPress={() => Linking.openURL(`${item.event_photo}`)}>
                            Click Here to see Event Photo
                          </Text>
                        </View>
                      </Body>
                    </ListItem>
                  </List>
                </Content>
              )}
            />
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
  EnvironmentalFeed: EnvironmentalFeed,
  AddEvent: AddEvent
});

const Stack = createAppContainer(AppStackNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  topBar: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#256d7b",
    alignItems: 'center'
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
    fontSize: 16, margin:10,
    textAlign: 'center'
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
