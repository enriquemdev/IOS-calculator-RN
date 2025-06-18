import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import React from "react";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  buttonColor?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  buttonColor = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: buttonColor,
        opacity: pressed ? 0.8 : 1, // This gives the effect of being pressed
        width: doubleSize ? 180 : 80, // 180 is 80 times 2 plus the 10 of padding each side
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
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
