import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  buttonColor?: string;
  blackText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  buttonColor = Colors.darkGray,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable style={globalStyles.button} onPress={onPress}>
      {/* <Text style={[globalStyles.buttonText, blackText && { color: "black" }]}> */}
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : Colors.textPrimary,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
