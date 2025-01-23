import React from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";

const SignIn = () => {
  const handleLogin = async () => {};

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

          <TouchableOpacity
            onPress={handleLogin}
            className=""
          ></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
