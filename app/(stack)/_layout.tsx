import { Stack } from "expo-router";
import React from "react";

const LayoutStack = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        animation: "fade_from_bottom",
        contentStyle: { backgroundColor: "white" },
      }}
    >
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="products/index" options={{ title: "Product" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="settings/index" options={{ title: "Setting" }} />
    </Stack>
  );
};

export default LayoutStack;
