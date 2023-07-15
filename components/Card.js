import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
// import Colors from "../constants/colors";

const Card = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardContainer}>
      <View style={styles.productContainer}>
        <View style={styles.productWrapper}>
          <Image
            style={styles.productImage}
            source={require("../assets/images/product_one.png")}
          />
        </View>
        <Text style={styles.productName}>Black Simple Lamp</Text>
        <Text style={styles.productPrice}>$ 12.00</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    width: "50%",
    height: "80%",
    borderRadius: 60,
  },
  productContainer: {
    height: 300,
  },
  productWrapper: {
    height: "90%",
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productName: {
    marginVertical: 10,
  },
  productPrice: {
    fontWeight: "bold",
    fontSize: 14,
    width: "100%",
  },
});
