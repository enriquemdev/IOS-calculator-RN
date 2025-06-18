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
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: buttonColor,
        opacity: pressed ? 0.8 : 1, // This gives the effect of being pressed
      })}
      onPress={onPress}
    >
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
