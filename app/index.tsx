import CalculatorButton from "@/components/CalculatorButton";
import { ThemeText } from "@/components/ThemeText";
import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { View } from "react-native";

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
        <ThemeText variant="h1">50 * 500000000000</ThemeText>
        <ThemeText variant="h2">25000</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label="C"
          onPress={() => console.log("1")}
          blackText
          buttonColor={Colors.lightGray}
        />
        <CalculatorButton
          label="+/-"
          onPress={() => console.log("1")}
          blackText
          buttonColor={Colors.lightGray}
        />
        <CalculatorButton
          label="del"
          onPress={() => console.log("1")}
          blackText
          buttonColor={Colors.lightGray}
        />
        <CalculatorButton label="÷" onPress={() => console.log("1")} />
      </View>
    </View>
  );
};

export default CalculatorApp;
