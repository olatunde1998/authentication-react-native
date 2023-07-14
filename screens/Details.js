import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/colors";
import { StatusBar } from "expo-status-bar";
import PrimaryButton from "../components/PrimaryButton";

const Details = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rootScreen}>
      <View>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/product_one.png")}
        />
        <View style={styles.backIconContainer} >
          <Image
            style={styles.backIcon}
            source={require("../assets/images/back_icon.png")}
          />
        </View>
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.headingText}>Minimal Stand</Text>
        <Text style={styles.price}>$ 50</Text>
        <View>
          <Text style={styles.productInformation}>
            Minimal Stand is made of by natural wood. The design that is very
            simple and minimal. This is truly one of the best furnitures in any
            family for now. With 3 different colors, you can easily select the
            best match for your home.
          </Text>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={styles.markerContainer}>
            <Image
              style={styles.marker}
              source={require("../assets/images/marker.png")}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => navigation.goBack("Splash")}>
              Contact Seller
            </PrimaryButton>
          </View>
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    paddingTop: 24,
  },
  imageContainer: {
    width: "100%",
  },
  backIconContainer: {
    position: "absolute",
    top: 24,
    left: 24,
    borderRadius: 8,
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  backIcon: {
    width: 32,
    height: 32,
  },
  productContainer: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 18,
  },

  headingText: {
    fontSize: 32,
    marginBottom: 24,
    color: Colors.primary500,
  },
  price: {
    fontSize: 30,
    marginBottom: 40,
  },
  productInformation: {
    fontSize: 16,
    fontWeight: "semiBold",
    marginBottom: 24,
  },
  buttonWrapper: {
    flexDirection: "row",
  },
  markerContainer: {
    backgroundColor: "#F2F2F2",
    borderColor: "gray",
    borderWidth: 1,
    width: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 40,
    height: 40,
  },
  buttonContainer: {
    flex: 1,
  },
});
