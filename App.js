import {
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import Colors from "./constants/colors";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";

export default function App() {
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        style={styles.rootScreen}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
          <SplashScreen />
          {/* <Login/> */}
          <StatusBar style="light" />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: { opacity: 0.15 },
});
