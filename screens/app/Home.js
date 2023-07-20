import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import Card from "../../components/Card";
// import Colors from "../constants/colors";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.rootScreen}>
      <View style={styles.headerCrumb}>
        <Image
          style={styles.searchImage}
          source={require("../../assets/images/search_icon.png")}
        />
        <Text style={styles.headerCrumbText}>Find All You Need</Text>
      </View>
      <View style={styles.cardBox}>
        <Card />
        <Card />
      </View>
      <View style={styles.cardBox}>
        <Card />
        <Card />
      </View>
      <StatusBar style="dark" />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: 68,
    paddingHorizontal: 18,
  },
  headerCrumb: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchImage: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  headerCrumbText: {
    marginLeft: 64,
    fontSize: 16,
    fontWeight: "bold",
  },
  cardBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 20,
    padding: 10,
  },
});
