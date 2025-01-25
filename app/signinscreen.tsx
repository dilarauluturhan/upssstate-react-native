import React, { useState } from "react";
import { ScrollView, Text, Image, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../constants/images";
import { useRouter } from "expo-router";

import Loading from "@/components/Loading";
import CustomTextInput from "@/components/CustomTextInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/redux/userSlice";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isLoading } = useSelector((state: any) => state.user);

  const dispatch = useDispatch();

  const handleLogin = () => {
    try {
      dispatch(login({ email, password }));
      router.replace("/(tabs)");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-[58%]"
          resizeMode="contain"
          blurRadius={5}
        />

        <View className="px-10 flex items-center justify-center">
          <Text className="text-3xl font-bold text-black-300 text-center mt-2">
            Let's Get You Closer to {"\n"}
            <Text className="text-primary-100">Your Ideal Home</Text>
          </Text>

          <CustomTextInput
            isSecureText={false}
            handleOnchangeText={(text) => setEmail(text)}
            handleValue={email}
            handlePlaceholder="Enter your e-mail"
          />

          <CustomTextInput
            isSecureText={true}
            handleOnchangeText={(password) => setPassword(password)}
            handleValue={password}
            handlePlaceholder="Enter your password"
          />

          <Pressable
            className="w-[85%] h-11 rounded-md bg-primary-100 mt-7 flex items-center justify-center"
            onPress={handleLogin}
          >
            <Text className="text-white text-center text-lg font-bold">
              Login
            </Text>
          </Pressable>

          <View className="flex flex-row items-center justify-center gap-1.5 mt-3">
            <Text className="text-black-300 font-medium">
              Don't have an account?
            </Text>
            <Text className="text-primary-100 font-semibold">Sign up</Text>
          </View>

          {isLoading ? <Loading /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
