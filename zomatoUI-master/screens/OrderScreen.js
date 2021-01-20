import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import colors from "../constants/colors";
import SearchBar from "../components/SearchBar";
import FoodItems from "../components/FoodItems";
import Header from "../components/Header";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
// import { ScrollView } from "react-native-gesture-handler";

const OrderScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SearchBar />
        <FoodItems />
      </View>
    </ScrollView>
  );
};

OrderScreen.navigationOptions = () => {
  return {
    headerTitle: "User Location",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={Header}>
        <Item title="locate" iconName="location-pin" />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default OrderScreen;
