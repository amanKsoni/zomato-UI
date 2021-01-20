import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const DinningScreen = () => {
  return (
    <View style={styles.container}>
      <Text> DinningScreen</Text>
    </View>
  );
};

export default DinningScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
