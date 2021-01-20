import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text> explore screen</Text>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
