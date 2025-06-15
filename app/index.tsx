import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text
        style={globalStyles.mainResult}
        numberOfLines={1} // Puts a limit on the quantity of lines a text can have (if it doenst fit, it puts ... at the end)
        adjustsFontSizeToFit // If text doensnt fit on the screen with its og font size, it reduces font size to make it fit
      >
        50 * 500000000000
      </Text>

      <Text style={globalStyles.subResult}>25000</Text>
    </View>
  );
};

export default CalculatorApp;
