import { product } from "@/store/products.store";
import { Redirect, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { Text, View } from "react-native";

const ProductDetail = () => {
  const params = useLocalSearchParams();
  const navigation = useNavigation();

  const productDetail = product.find((p) => p.id === params.id);
  useEffect(() => {
    navigation.setOptions({ title: productDetail?.title });
  }, [productDetail]);

  if (!productDetail) {
    return <Redirect href={"/home"} />;
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
