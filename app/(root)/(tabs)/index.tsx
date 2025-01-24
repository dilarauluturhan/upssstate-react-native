import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useState, useEffect } from "react";

import { useLocalSearchParams } from "expo-router";
import NoResults from "@/components/NoResult";

export default function Index() {
  const [cards, setCards] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const params = useLocalSearchParams<{ query?: string }>();
  const searchQuery = params.query ?? "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resCards, resFeatured, resCategories] = await Promise.all([
        axios.get("http://localhost:8000/cards"),
        axios.get("http://localhost:8000/featuredCards"),
        axios.get("http://localhost:8000/categories"),
      ]);

      setCards(resCards.data);
      setFeatured(resFeatured.data);
      setCategories(resCategories.data);
    } catch (error) {
      console.log("API error", error);
    }
  };

  const onCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  let filteredCards =
    selectedCategory === "All"
      ? cards
      : cards.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  if (searchQuery.trim().length > 0) {
    filteredCards = filteredCards.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <FlatList
        data={filteredCards}
        renderItem={({ item }) => <Card data={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<NoResults />}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={images.avatar}
                  className="size-12 rounded-full"
                />
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
                <Text className="text-xl font-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-bold text-primary-100">
                    See all
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              data={featured}
              renderItem={({ item }) => <FeaturedCard data={item} />}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerClassName="flex gap-5 mt-2"
            />

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

              <Filters
                categories={categories}
                selectedCategory={selectedCategory}
                onCategorySelect={onCategorySelect}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
