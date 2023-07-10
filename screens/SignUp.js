import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View>
        <Image
          source={require("../assets/images/react-img-3.png")}
          style={styles.imageContainer}
        />
      </View>
      <View>
        <Text style={styles.headingText}>Welcome back.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBody}
          placeholder="Email"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBody}
          placeholder="Password"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputBody}
          placeholder="Confirm Password"
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPasswordText}>Forgot your Password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("SignUp")}>
          Sign Up
        </PrimaryButton>
      </View>
      <View>
        <Text style={styles.dontHaveAccount}>
          Already have an account?{" "}
          <Text onPress={() => navigation.navigate("Login")}>Login</Text>
        </Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  headingText: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  inputContainer: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    color: "black",
    marginVertical: 12,
  },
  inputBody: {
    padding: 24,
    color: "black",
    fontSize: 16,
    borderRadius: 10,
  },
  forgetPasswordContainer: {
    marginLeft: "auto",
  },
  forgetPasswordText: {
    fontSize: 18,
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 12,
  },
  dontHaveAccount: {
    fontSize: 18,
  },
});
