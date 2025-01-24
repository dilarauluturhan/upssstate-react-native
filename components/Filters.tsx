import React from "react";
import { Text, ScrollView, TouchableOpacity } from "react-native";

interface ICategory {
  id: number;
  title: string;
  category: string;
}

interface FiltersProps {
  categories: ICategory[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Filters = ({ categories, selectedCategory, onCategorySelect }: FiltersProps) => {
  const handleCategoryPress = (category: string) => {
    if (selectedCategory === category) {
      onCategorySelect("All");
    } else {
      onCategorySelect(category);
    }
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => handleCategoryPress(item.category)}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory === item.category
              ? "bg-primary-200"
              : "bg-primary-100 border border-primary-200"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === item.category
                ? "text-white font-bold mt-0.5"
                : "text-black-300"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
