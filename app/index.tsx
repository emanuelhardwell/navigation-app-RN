import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  return (
    <SafeAreaView>
      <View className="mt-5 mx-3">
        <Text className="text-5xl color-blue-500 font-work-black">App</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
