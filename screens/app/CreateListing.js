import {
  Text,
  ScrollView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import {launchImageLibrary} from 'react-native-image-picker';

const CreateListing = () => {
  const navigation = useNavigation();
  const goBackHandler = () => {
    navigation.goBack();
  };

  const uploadNewImage = async() => {
    const result = await launchImageLibrary()
    console.log(result, "====result====")

  }
  return (
    <SafeAreaView style={styles.settingWrapper}>
      <Pressable onPress={goBackHandler}>
        <Text>Go Back</Text>
      </Pressable>
      <ScrollView style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
        <TouchableOpacity onPress={uploadNewImage}>
          <Text>+</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateListing;

const styles = StyleSheet.create({
  settingWrapper: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 14,
    color: Colors.blue,
    marginBottom: 16,
  },
  container: {
    padding: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
