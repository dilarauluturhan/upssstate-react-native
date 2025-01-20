import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg">
        Edit app/index.tsx to edit this screen.
      </Text>

      <Link href="/signinscreen">Tıkk tıkk</Link>
    </View>
  );
}
