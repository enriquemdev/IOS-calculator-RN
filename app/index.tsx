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
        <CalculatorButton
          label="÷"
          onPress={() => console.log("1")}
          buttonColor={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="7"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="8"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="9"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="X"
          onPress={() => console.log("1")}
          buttonColor={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          label="4"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="5"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="6"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="-"
          onPress={() => console.log("1")}
          buttonColor={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="1"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="2"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="3"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="+"
          onPress={() => console.log("1")}
          buttonColor={Colors.orange}
        />
      </View>
      <View style={globalStyles.row}>
        <CalculatorButton
          label="0"
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
          doubleSize={true}
        />
        <CalculatorButton
          label="."
          onPress={() => console.log("1")}
          buttonColor={Colors.darkGray}
        />
        <CalculatorButton
          label="="
          onPress={() => console.log("1")}
          buttonColor={Colors.orange}
        />
      </View>
    </View>
  );
};

export default CalculatorApp;
