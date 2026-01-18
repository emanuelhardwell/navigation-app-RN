import { product } from "@/store/products.store";
import { Redirect, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ProductDetail = () => {
  const params = useLocalSearchParams();
  console.log(params);

  const productDetail = product.find((p) => p.id === params.id);

  if (!productDetail) {
    return <Redirect href={"/drawer/tab/home"} />;
  }

  return (
    <View className="mx-4 mb-2">
      <Text className="mb-2 text-xl">{productDetail.title}</Text>
      <Text className="mb-2 ">{productDetail.description}</Text>
      <Text className="mb-2 color-red-700">{`$ ${productDetail.price}`}</Text>
    </View>
  );
};

export default ProductDetail;
