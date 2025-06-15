import React from "react";
import { Text, type TextProps } from "react-native";

interface Props extends TextProps {
  children: string;
}

export const ThemeText = ({ children }: Props) => {
  return <Text style={{ color: "white" }}>{children}</Text>;
};
