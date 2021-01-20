import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";

const NightLifeScreen = () => {
  return (
    <View style={styles.container}>
      <Text> night life screen</Text>
    </View>
  );
};

export default NightLifeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    alignItems: "center",
    justifyContent: "center",
  },
});
