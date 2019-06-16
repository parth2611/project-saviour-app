import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ActivityIndicator,
  ListView,
  Text,
  View,
  Alert,FlatList, StatusBar
} from "react-native";
import Leaderboard from 'react-native-leaderboard';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Card,
  CardItem,
  Thumbnail,
  ListItem,
  List,
  Form,
  Textarea,
  Item,
  Input
} from "native-base";


export default class LeaderBoards extends Component {
   
    state = {
        data: [] 
    }

    componentWillMount() {
        this.fetchData();
    }

     fetchData = async () => {
      const response = await fetch(
        "http://192.168.43.62/environment/api/leader-board.php"
      );
        const json = await response.json();
        this.setState({ data: json.data});
        
    } 


    static navigationOptions = {
        title: 'Leaderboards',
    };

    render() {

        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#16363b" />

            <View style={styles.topBar}>
              <Text style={styles.txtBar}>Leaderboard</Text>
              <View style={styles.menuViewright} />
            </View>

          <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) => (
              <List>
                <ListItem>
                  
                      <Left>
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "bold",
                        color: "green"
                      }}
                    >
                                {`${item.User_id} `}
                    </Text>
                         

                 
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "green",
                            marginLeft: 30,
                        }}
                    >
                        {`${item.user_name} `}
                    </Text>
                 
                        </Left>


                  <Right>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "green"
                        }}
                    >
                        {`${item.Earned_Score} `}
                    </Text>
                  </Right>
                </ListItem>
              </List>
            )}
          />

          </View>
        );
    }

}

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

