import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, View } from "react-native";

const isAndroid = Platform.OS === "android";

if (isAndroid) {
  NavigationBar.setBackgroundColorAsync("black");
}

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      {/* <Text>RootLayout</Text> */}
      <Slot />
      {/* <Text>Footer</Text> */}

      {/* Indicator of the wifi, battery, etc */}
      <StatusBar style="auto" />
    </View>
  );
};

export default RootLayout;
