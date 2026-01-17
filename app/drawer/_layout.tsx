import DrawerCustom from "@/components/DrawerCustom";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import React from "react";

const LayoutDrawer = () => {
  return (
    <Drawer
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: "purple",
        drawerActiveTintColor: "green",
        //drawerContentStyle: { backgroundColor: "black" },
        overlayColor: "rgba(0,0,0,0.3)",
        sceneStyle: { backgroundColor: "white" },
      }}
      drawerContent={DrawerCustom}
    >
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "User title",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          title: "Schedule title",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="calendar-clear-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default LayoutDrawer;
