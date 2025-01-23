import { Pressable, StyleSheet, Text } from "react-native";

interface CustomPressableProps {
  buttonTitle: string;
  handleOnpress: () => void; // handleOnpress bir fonksiyon, parametresiz ve dönüş değeri void
}

const CustomPressable: React.FC<CustomPressableProps> = ({
  buttonTitle,
  handleOnpress,
}) => {
  return (
    <>
      <Pressable
        onPress={() => handleOnpress()}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#E07B39" : "#F29F58",
          },
          styles.customButton,
        ]}
      >
        <Text style={styles.customButtonText}>{buttonTitle}</Text>
      </Pressable>
    </>
  );
};

export default CustomPressable;

const styles = StyleSheet.create({
  customButton: {
    width: "70%",
    height: 35,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  customButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
});
