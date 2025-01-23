import { Stack } from "expo-router";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "./global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />;
    </Provider>
  );
}
