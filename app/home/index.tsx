import ButtonCustom from "@/components/ButtonCustom";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="mt-5 mx-3">
        <Link href={"/products"} asChild>
          <ButtonCustom color="primary" onLongPress={() => {}}>
            Product
          </ButtonCustom>
        </Link>

        {/* <ButtonCustom
          color="primary"
          onPress={() => router.push("/products")}
          onLongPress={() => {}}
        >
          Product
        </ButtonCustom> */}

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
