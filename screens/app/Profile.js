import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Pressable,
  Button,
} from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import ListItem from "../../components/ListItem";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  const num = 10;
  const onSettingPress = () => {
    return navigation.navigate("Settings");
  };
  const onNewListingPress = () => {
    return navigation.navigate("CreateListing");
  };
  return (
    <SafeAreaView style={styles.profileWrapper}>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>User name</Text>
          <Text style={styles.email}>User email</Text>
          <ListItem title="My Orders" subtitle={`You have ${num} listings`} />
          <ListItem
            onPress={onSettingPress}
            title="Settings"
            subtitle="Account, FAQ, Contact"
          />
        </View>
      </View>
      <Pressable onPress={onNewListingPress} style={styles.listBtn}>
        <Text style={styles.buttonText}>Add New Listing</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  profileWrapper: {
    flex: 1,
    paddingHorizontal: 16,
  },
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  content: {},
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 16,
  },
  listBtn: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 0,
    marginBottom: 60,
    backgroundColor: Colors.blue,
    marginHorizontal: 16,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
});
