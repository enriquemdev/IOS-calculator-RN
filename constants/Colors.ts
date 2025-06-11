export const Colors = {
  darkGray: "#2d2d2d",
  lightGray: "#9B9B9B",
  orange: "#ff9427",

  textPrimary: "white",
  textSecondary: "#666666",
  background: "#000000",
} as const;
// The as const is for indicating that the values inside the object are not gonna change, this improves visibility of the colors with ts
