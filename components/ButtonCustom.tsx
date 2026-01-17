import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonCustomProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
  variant?: "contained" | "text-only";
  className?: string;
}
const ButtonCustom = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className,
}: ButtonCustomProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        className={`p-3 ${className}`}
        onPress={onPress}
        onLongPress={onLongPress}
      >
        <Text className={`text-center ${textColor}`}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-3 rounded-md visible ${btnColor} active: opacity-70 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default ButtonCustom;
