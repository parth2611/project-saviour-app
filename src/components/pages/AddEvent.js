import React, {Component} from 'react';
import { View, Text, FlatList, StyleSheet, Image, Linking, ScrollView, StatusBar } from 'react-native';
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
export default class AddEvent extends Component{



    static navigationOptions = {
        header: null,
    };


    render(){
        return (
          <View style={styles.container}>
            <StatusBar backgroundColor="#16363b" />

            <View style={styles.topBar}>
              <Text style={styles.txtBar}>Add Event</Text>
            </View>

            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text style={{ color: "#256d7b", fontSize: 18 }}>
                Add Event Via Emailing to under listed Email
                {"\n"}
              </Text>

              <Text style={{ fontSize: 15, color: "#256d7b" }}>
                You have to attached Event Name, Event Details and
                Photo.
                {"\n"}
                {"\n"}
              </Text>

              <Text style={{ fontSize: 16 }}>
                Email : gari.jani30@gmail.com
              </Text>
            </View>
          </View>
        );
    }

}


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
        fontSize: 16, margin: 10,
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
