import "react-native-gesture-handler";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Auth/Login";
import SignUp from "./screens/Auth/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./screens/Details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

// import {
//   StyleSheet,
//   ImageBackground,
//   SafeAreaView,
// } from "react-native";
// import { LinearGradient } from "expo-linear-gradient";

// import Colors from "./constants/colors";
// import { StatusBar } from "expo-status-bar";
// import SplashScreen from "./screens/SplashScreen";
// import Login from "./screens/Login";

// export default function App() {
//   return (
//     <LinearGradient
//       colors={[Colors.primary700, Colors.accent500]}
//       style={styles.rootScreen}
//     >
//       <ImageBackground
//         source={require("./assets/images/dice.jpg")}
//         style={styles.rootScreen}
//         resizeMode="cover"
//         imageStyle={styles.backgroundImage}
//       >
//         <SafeAreaView style={styles.rootScreen}>
//           <SplashScreen />
//           {/* <Login/> */}
//           <StatusBar style="light" />
//         </SafeAreaView>
//       </ImageBackground>
//     </LinearGradient>
//   );
// }

// const styles = StyleSheet.create({
//   rootScreen: {
//     flex: 1,
//   },
//   backgroundImage: { opacity: 0.15 },
// });
