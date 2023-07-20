import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Linking,
  Image,
  Pressable,
  Button,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ListItem from "../../components/ListItem";
import Colors from "../../constants/colors";
import EditableBox from "../../components/EditableBox";

const Settings = () => {
  const [editing, setEditing] = useState(false);
  const [values, setValues] = useState({
    name: "User",
    email: "user@mail.com",
  });

  const onEditPress = () => {
    setEditing(true);
  };
  const onSave = () => {
    setEditing(false);
  };

  const onChange = (key, value) => {
    setValues((v) => ({ ...v, [key]: value }));
  };

  const onItemPress = () => {
    return Linking.openURL("https://www.google.com");
  };
  return (
    <SafeAreaView style={styles.settingWrapper}>
      <ScrollView>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Pressable onPress={onEditPress}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/edit_icon.png")}
            />
          </Pressable>
        </View>
        <EditableBox
          label="Name"
          value={values.name}
          editable={editing}
          onChangeText={(v) => onChange("name", v)}
        />
        <EditableBox
          label="Email"
          value={values.email}
          editable={editing}
          onChangeText={(v) => onChange("email", v)}
        />
        {editing ? (
          <View style={styles.buttonWrapper}>
            <Button title="Save" onPress={onSave} style={styles.button} />
          </View>
        ) : null}

        <Text style={[styles.sectionTitle, { marginTop: 40 }]}>
          Help Center
        </Text>
        <ListItem onPress={onItemPress} title="FAQ" />
        <ListItem onPress={onItemPress} title="Contact Us" />
        <ListItem onPress={onItemPress} title="Privacy & Terms" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
    settingWrapper: {
        paddingHorizontal: 16,
    },
  sectionTitle: {
    fontWeight: "500",
    fontSize: 16,
    color: Colors.grey,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    width: 24,
    height: 24,
  },
  buttonWrapper: {
    borderColor: Colors.blue,
    backgroundColor: Colors.blue,
    paddingVertical: 12,
    marginTop: 16,
    color: Colors.white,
  },
  button: {
   color: "white",
  },
});
