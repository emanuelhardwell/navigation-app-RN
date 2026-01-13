import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-5 mx-3">
        <Link className="mt-3" href={"/products"}>
          Product
        </Link>
        <Link className="mt-3" href={"/profile"}>
          Profile
        </Link>
        <Link className="mt-3" href={"/settings"}>
          Settings
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
