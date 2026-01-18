import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";
import React from "react";

const LayoutStack = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack) {
      //navigation.dispatch(StackActions.pop()); //no funicona en expo 54.0.31
      router.back();
      return;
    }
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        animation: "fade_from_bottom",
        contentStyle: { backgroundColor: "white" },
        headerLeft: ({ canGoBack }) => (
          <Ionicons
            className="mr-5"
            name={canGoBack ? "arrow-back-outline" : "menu-outline"}
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
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
