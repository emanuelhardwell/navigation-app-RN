import { Drawer } from "expo-router/drawer";
import React from "react";

const LayoutDrawer = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "User title",
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Schedule",
          title: "Schedule title",
        }}
      />
    </Drawer>
  );
};

export default LayoutDrawer;
