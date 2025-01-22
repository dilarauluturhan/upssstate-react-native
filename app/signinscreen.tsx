import React from "react";
import { ScrollView, Text, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import icons from "../constants/icons";

const SignIn = () => {
  const handleLogin = () => {};

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
          blurRadius={5}
        />

        <View className="px-10">
          <Text className="text-3xl font-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-200">Your Ideal Home</Text>
          </Text>

          <Text className="text-lg text-black-200 text-center mt-12">
            Login to Upssstate with Google
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-gray-300 rounded-md py-4 mt-5"
          >
            <View className="flex flex-row items-center justify-center">
              <Image
                source={icons.google}
                className="w-7 h-7"
                resizeMode="contain"
              />
              <Text className="text-lg font-medium text-black-300 ml-3">
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
