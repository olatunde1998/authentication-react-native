import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const ListItem = ({ title, subtitle, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {!!subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      <Image
        style={styles.arrow}
        source={require("../assets/images/arrow_icon.png")}
      />
    </Pressable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.white,
    marginVertical: 12,
    borderRadius: 4,
  },
  content: {},
  title: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: "bold",
    
  },
  subtitle: {
    color: Colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
  arrow: {
    width: 32,
    height: 32,
  },
});
