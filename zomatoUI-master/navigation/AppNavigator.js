import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  SimpleLineIcons,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";

import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OrderScreen from "../screens/OrderScreen";
import DinningScreen from "../screens/DinningScreen";
import NightLifeScreen from "../screens/NightLifeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createStackNavigator({
  Orders: OrderScreen,
});

const BottomTab = createBottomTabNavigator(
  {
    Order: {
      screen: Stack,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Feather name="shopping-bag" size={25} color={tabInfo.tintColor} />
          );
        },
      },
    },
    dining: {
      screen: DinningScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="room-service-outline"
              size={35}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    NightLife: {
      screen: NightLifeScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name="md-wine" size={30} color={tabInfo.tintColor} />
          );
        },
      },
    },
    explore: {
      screen: ExploreScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <SimpleLineIcons
              name="compass"
              size={25}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <MaterialCommunityIcons
              name="face-profile"
              size={27}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: "#000",
      activeBackgroundColor: "white",
    },
  }
);

export default createAppContainer(BottomTab);
