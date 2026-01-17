import ButtonCustom from "@/components/ButtonCustom";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-5 mx-3">
        <Link href={"/drawer/tab/(stack)/products"} asChild>
          {/* forma 1 */}
          <ButtonCustom color="primary" onLongPress={() => {}}>
            Product
          </ButtonCustom>
        </Link>

        <ButtonCustom
          className="mt-2"
          color="primary"
          onPress={() => router.push("/drawer/tab/profile")} /* forma 2 */
          onLongPress={() => {}}
        >
          Profile
        </ButtonCustom>

        <ButtonCustom
          className="mt-2"
          variant="text-only"
          onPress={() => router.push("/drawer/tab/settings")}
          onLongPress={() => {}}
        >
          Settings
        </ButtonCustom>

        {/*  <Link className="mt-3" href={"/products"}>
          Product
        </Link>
        <Link className="mt-3" href={"/profile"}>
          Profile
        </Link>
        <Link className="mt-3" href={"/settings"}>
          Settings
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
