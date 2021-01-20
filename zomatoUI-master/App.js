import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "./constants/colors";
import SearchBar from "./components/SearchBar";
import FoodItems from "./components/FoodItems";

import AppNavigator from "./navigation/AppNavigator";

const App = () => {
  return (
    <AppNavigator />
    // {/* <ScrollView style={{ backgroundColor: colors.white }}>

    //  <StatusBar style="auto" />
    // </ScrollView> */}
  );
};
export default App;
