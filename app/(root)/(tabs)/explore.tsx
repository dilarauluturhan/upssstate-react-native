import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import { router, useLocalSearchParams } from "expo-router";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import { Card } from "@/components/Cards";
import Filters from "@/components/Filters";
import { useState, useEffect } from "react";
import NoResults from "@/components/NoResult";

const Explore = () => {
  const [cards, setCards] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const params = useLocalSearchParams<{ query?: string }>();
  const searchQuery = params.query ?? "";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [resCards, resCategories] = await Promise.all([
        axios.get("http://localhost:8000/cards"),
        axios.get("http://localhost:8000/categories"),
      ]);

      setCards(resCards.data);
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
              <TouchableOpacity
                onPress={() => router.back()}
                className="flex flex-row bg-blue-100 rounded-full size-11 items-center justify-center"
              >
                <Image source={icons.backArrow} className="size-5" />
              </TouchableOpacity>

              <Text className="text-lg mr-2 text-center font-medium text-black-300">
                Search for Your Ideal Home
              </Text>
              <Image source={icons.bell} className="w-6 h-6" />
            </View>

          <Search />

          <View className="my-5">

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
  )
}

export default Explore