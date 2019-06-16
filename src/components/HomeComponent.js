import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { createBottomTabNavigator, createAppContainer, Navigation } from 'react-navigation';
import EnvironmentalFeed from './pages/EnvironmentalFeed';
import Category from './pages/Category';
import Profile from './pages/Profile';
import { Icon } from 'react-native-vector-icons';
import LeaderBoards from './pages/LeaderBoards';
import Camera from './pages/Camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from "react-native-vector-icons/AntDesign";

export default class HomeComponent extends Component {

    

  static navigationOptions = {
    header: null,
  };


    render() {
        return (
            <Stack />
        );
    }
}

const TabNavigator = createBottomTabNavigator(
  {
    EnvironmentalFeed: {
      screen: EnvironmentalFeed,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <SimpleLineIcons name="feed" color={tintColor} size={24} />
        )
      })
    },
    Category: {
      screen: Category,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Feather name="award" color={tintColor} size={24} />
        )
      })
    },
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" color={tintColor} size={24} />
        )
      })
    },
    LeaderBoards: {
      screen: LeaderBoards,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <AntDesign name="linechart" color={tintColor} size={24} />
        )
      })
    },
    Camera: {
      screen: Camera,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Foundation name="camera" color={tintColor} size={24} />
        )
      })
    }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true,
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      activeBackgroundColor: "#256d7b"
    }
  }
);

const Stack = createAppContainer(TabNavigator);
