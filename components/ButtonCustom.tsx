import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface ButtonCustomProps extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";
}
const ButtonCustom = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
}: ButtonCustomProps) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  return (
    <Pressable
      className={`p-3 rounded-md visible ${btnColor} active: opacity-70`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center">{children}</Text>
    </Pressable>
  );
};

export default ButtonCustom;
