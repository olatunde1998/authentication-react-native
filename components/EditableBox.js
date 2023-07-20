import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import Colors from "../constants/colors";

const EditableBox = ({ value, label, onChangeText, onPress, editable }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder="" value={value} onChangeText={onChangeText} editable={editable} />
    </View>
  );
};

export default EditableBox;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  label: {
    color: Colors.grey,
    fontSize: 12,
    marginBottom: 6,
  },
    input: {
    color: Colors.blue,
    fontSize: 14,
    fontWeight: "500",
    },

});
