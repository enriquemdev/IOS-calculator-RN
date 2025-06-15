import { globalStyles } from "@/styles/global-styles";
import React from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  variant?: "h1" | "h2";
}

export const ThemeText = ({ children, variant = "h1", ...rest }: Props) => {
  return (
    <Text
      style={[
        { color: "white", fontFamily: "SpaceMono" },
        variant === "h1" && globalStyles.mainResult,
        variant === "h2" && globalStyles.subResult,
      ]}
      numberOfLines={1} // Puts a limit on the quantity of lines a text can have (if it doenst fit, it puts ... at the end)
      adjustsFontSizeToFit // If text doensnt fit on the screen with its og font size, it reduces font size to make it fit
      {...rest}
    >
      {children}
    </Text>
  );
};
