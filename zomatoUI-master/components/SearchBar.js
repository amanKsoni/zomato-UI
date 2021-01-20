import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
import colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name={"ios-search"} size={24} color={colors.dark} />
        <View style={{ paddingRight: 20 }}>
          <TextInput
            style={{ marginLeft: 20 }}
            placeholder={"Enter any item"}
          />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listing}
      >
        <Text
          style={{ color: colors.danger, fontSize: 25, marginHorizontal: 20 }}
        >
          food
        </Text>
        <Text style={styles.items}>grocery</Text>
        <Text style={styles.items}>self pickup</Text>
        <Text style={styles.items}>food details</Text>
        <Text style={styles.items}>delivery details</Text>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../assets/zomatoOffer1.jpg")}
          />
          <Image
            style={styles.image}
            resizeMode="stretch"
            source={require("../assets/zomatoOffer2.jpg")}
          />
          <Image
            style={styles.image}
            resizeMode="cover"
            source={require("../assets/zomatoOffer1.jpg")}
          />
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: colors.medium,
    padding: 12,
    margin: 8,
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
  },
  listing: {
    flexDirection: "row",
    marginTop: 5,
  },
  items: {
    fontSize: 25,
    marginHorizontal: 20,
    color: colors.medium,
  },
  imageContainer: {
    flexDirection: "row",
    marginRight: 5,
    marginTop: 15,
    overflow: "hidden",
  },
  image: {
    height: 200,
    width: 200,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
