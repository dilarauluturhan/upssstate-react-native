import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Platform,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";

import icons from "@/constants/icons";
import images from "@/constants/images";
import Comment from "@/components/Comment";
import { facilities } from "@/constants/data";

const Property = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();

  const windowHeight = Dimensions.get("window").height;

  return (
    <View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerClassName="pb-32 bg-white"
    >
      <View className="relative w-full" style={{ height: windowHeight / 2 }}>
        <Image
          source={images.japan}
          className="size-full"
          resizeMode="cover"
        />
        <Image
          source={images.whiteGradient}
          className="absolute top-0 w-full z-40"
        />

        <View
          className="z-50 absolute inset-x-7"
          style={{
            top: Platform.OS === "ios" ? 70 : 20,
          }}
        >
          <View className="flex flex-row items-center w-full justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row size-11 items-center justify-center"
            >
              <Image source={icons.backArrow} className="size-7" />
            </TouchableOpacity>

            <View className="flex flex-row items-center gap-3">
              <Image
                source={icons.heart}
                className="size-7"
                tintColor={"#191D31"}
              />
              <Image source={icons.send} className="size-7" />
            </View>
          </View>
        </View>
      </View>

      <View className="px-5 mt-7 flex gap-2">
        <Text className="text-2xl font-bold">
          Modernica Apartment
        </Text>

        <View className="flex flex-row items-center gap-3">
          <View className="flex flex-row items-center px-4 py-2 bg-primary-100 rounded-md">
            <Text className="text-xs font-bold text-blue-100">
              Apartment
            </Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Image source={icons.star} className="size-5" />
            <Text className="text-black-200 text-sm mt-1 font-medium">
              4,8 (1,275 reviews)
            </Text>
          </View>
        </View>

        <View className="flex flex-row items-center mt-5">
          <View className="flex flex-row items-center justify-center bg-blue-100 rounded-full size-10">
            <Image source={icons.bed} className="size-4" />
          </View>
          <Text className="text-black-300 text-sm font-medium ml-2">
            7 Beds
          </Text>
          <View className="flex flex-row items-center justify-center bg-blue-100 rounded-full size-10 ml-7">
            <Image source={icons.bath} className="size-4" />
          </View>
          <Text className="text-black-300 text-sm font-rubik-medium ml-2">
            3 Baths
          </Text>
          <View className="flex flex-row items-center justify-center bg-blue-100 rounded-full size-10 ml-7">
            <Image source={icons.area} className="size-4" />
          </View>
          <Text className="text-black-300 text-sm font-medium ml-2">
            2000 sqft
          </Text>
        </View>

        <View className="w-full border-t border-primary-300 pt-7 mt-5">
          <Text className="text-black-300 text-xl font-bold">
            Agent
          </Text>

          <View className="flex flex-row items-center justify-between mt-4">
            <View className="flex flex-row items-center">
              <Image
                source={images.avatar}
                className="size-14 rounded-full"
              />

              <View className="flex flex-col items-start justify-center ml-3">
                <Text className="text-lg text-black-300 text-start font-bold">
                  James Doe
                </Text>
                <Text className="text-sm text-black-200 text-start font-medium">
                 Owner
                </Text>
              </View>
            </View>

            <View className="flex flex-row items-center gap-3">
              <Image source={icons.chat} className="size-7" />
              <Image source={icons.phone} className="size-7" />
            </View>
          </View>
        </View>

        <View className="mt-7">
          <Text className="text-black-300 text-xl font-bold">
            Overview
          </Text>
          <Text className="text-black-200 text-base mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </Text>
        </View>


        <View className="mt-7">
          <Text className="text-black-300 text-xl font-bold">
            Location
          </Text>
          <View className="flex flex-row items-center justify-start mt-4 gap-2">
            <Image source={icons.location} className="w-7 h-7" />
            <Text className="text-black-200 text-sm font-medium">
              Address
            </Text>
          </View>

          <Image
            source={images.map}
            className="h-52 w-full mt-5 rounded-xl"
          />
        </View>
      </View>
    </ScrollView>

    <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-r border-l border-primary-100 p-7">
      <View className="flex flex-row items-center justify-between gap-10">
        <View className="flex flex-col items-start">
          <Text className="text-black-200 text-xs font-medium">
            Price
          </Text>
          <Text
            numberOfLines={1}
            className="text-primary-100 text-start text-2xl font-rubik-bold"
          >
            $700
          </Text>
        </View>

        <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-primary-100 py-3 rounded-full shadow-md shadow-zinc-400">
          <Text className="text-white text-lg text-center font-bold">
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
};

export default Property;
