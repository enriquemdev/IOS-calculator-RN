import { ThemeText } from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 * 500000000000</ThemeText>

      <ThemeText variant="h2">25000</ThemeText>
    </View>
  );
};

export default CalculatorApp;
