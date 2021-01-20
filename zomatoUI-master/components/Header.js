import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={SimpleLineIcons}
      iconSize={27}
      color="black"
    />
  );
};

const styles = StyleSheet.create({});
export default CustomHeaderButton;
