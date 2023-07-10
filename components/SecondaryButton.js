import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const SecondaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default SecondaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 3,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    borderColor: Colors.primary500,
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 16,
    fontSize: 20,
    color: Colors.primary500,
    fontWeight: "bold",

  },
  pressed: {
    opacity: 0.75,
  },
});
