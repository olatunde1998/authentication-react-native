import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import colors from "../constants/colors";
import { Image } from "react-native";
import { useNavigation } from '@react-navigation/native';


const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <View>
        <Image
          source={require("../assets/images/react-img-3.png")}
          style={styles.imageContainer}
        />
      </View>
      <Text style={styles.headingText}>Login Template</Text>
      <Text style={styles.subHeadingText}>
        The easiest way to start your application
      </Text>
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate('Login')}>Login</PrimaryButton>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </SecondaryButton>
      </View>
    </View>
  );
};

export default SplashScreen;

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
    color: colors.primary500,
  },
  subHeadingText: {
    fontSize: 24,
    fontWeight: "semiBold",
    marginBottom: 24,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    marginVertical: 6,
  },
});
