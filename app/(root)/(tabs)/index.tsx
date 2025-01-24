import { Link } from "expo-router";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-sm text-black-100">Good Morning</Text>
              <Text className="text-base font-medium text-black-300">
                John Doe
              </Text>
            </View>
          </View>

          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold text-black-300">Featured</Text>
            <TouchableOpacity>
              <Text className="text-base font-bold text-primary-100">
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="flex flex-row gap-5 mt-2">
          <FeaturedCard />
          <FeaturedCard />
        </View>

        <View className="my-5">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-xl font-bold text-black-300">
              Our Recommendation
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-bold text-primary-100">
                See all
              </Text>
            </TouchableOpacity>
          </View>

          <Filters />

          <View className="flex flex-row gap-5 mt-2">
            <Card />
            <Card />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
