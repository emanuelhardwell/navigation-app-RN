import ButtonCustom from "@/components/ButtonCustom";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleToggle = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="mt-5 mx-3">
        <Link href={"/(drawer)/(tab)/(stack)/products"} asChild>
          {/* forma 1 */}
          <ButtonCustom color="primary" onLongPress={() => {}}>
            Product
          </ButtonCustom>
        </Link>

        <ButtonCustom
          className="mt-2"
          color="primary"
          onPress={() => router.push("/profile")} /* forma 2 */
          onLongPress={() => {}}
        >
          Profile
        </ButtonCustom>

        <ButtonCustom
          className="mt-2"
          variant="text-only"
          onPress={() => router.push("/settings")}
          onLongPress={() => {}}
        >
          Settings
        </ButtonCustom>

        <ButtonCustom className="mt-2" color="secondary" onPress={handleToggle}>
          Open Menu
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
