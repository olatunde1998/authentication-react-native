import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const FavoriteItem = ({ onPress, image, price, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={{ url: image }} />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      <Image
        source={require("../assets/images/close_icon.png")}
        style={styles.icon}
      />
    </Pressable>
  );
};
export default FavoriteItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    paddingVertical: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
  title: {
    color: Colors.textGrey,
    paddingVertical: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    flex: 1,
  },

  price: {
    color: Colors.black,
    paddingBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 8,
  },
});
