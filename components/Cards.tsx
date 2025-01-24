import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

import images from "@/constants/images";
import icons from "@/constants/icons";

interface CardData {
  id: number;
  title: string;
  location: string;
  price: string;
  rating: number;
  image: string;
}

interface CardProps {
  data: CardData;
  onPress?: () => void;
}

const getImageByKey = (key: string) => {
  switch (key) {
    case "images/newYork":
      return images.newYork;
    case "images/japan":
      return images.japan;
    default:
      return images.newYork;
  }
};

export const FeaturedCard = ({ data, onPress }: CardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image
        source={getImageByKey(data.image)}
        className="size-full rounded-2xl"
      />

      <Image
        source={images.cardGradient}
        className="size-full rounded-2xl absolute bottom-0"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-5 right-5">
        <Image source={icons.star} className="size-3.5" />
        <Text className="text-xs font-bold text-primary-100 ml-1">
          {data.rating}
        </Text>
      </View>

      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text className="text-xl text-white font-extrabold" numberOfLines={1}>
          {data.title}
        </Text>
        <Text className="text-base text-white" numberOfLines={1}>
          {data.location}
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-extrabold text-white">{data.price}</Text>
          <Image source={icons.heart} className="size-5" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const Card = ({ data, onPress }: CardProps) => {
  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
      onPress={onPress}
    >
      <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
        <Image source={icons.star} className="size-2.5" />
        <Text className="text-xs font-bold text-primary-100 ml-0.5">
          {data.rating}
        </Text>
      </View>

      <Image
        source={getImageByKey(data.image)}
        className="w-full h-40 rounded-lg"
      />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-bold text-black-300">{data.title}</Text>
        <Text className="text-xs text-black-100">{data.location}</Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-bold text-primary-100">
            {data.price}
          </Text>
          <Image
            source={icons.heart}
            className="w-5 h-5 mr-2"
            tintColor="#191D31"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
