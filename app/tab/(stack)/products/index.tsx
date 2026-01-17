import { product } from "@/store/products.store";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductsScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text className="mb-5 text-center color-primary text-2xl">
          Products list
        </Text>
      </View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="m-5">
            <Text className="font-work-black">{item.title}</Text>
            <Text>{item.description}</Text>
            <View className="flex-row justify-between">
              <Text className="color-red-600">{`$ ${item.price}`}</Text>
              <Link href={`/tab/products/${item.id}`}>Ver detalles</Link>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ProductsScreen;
