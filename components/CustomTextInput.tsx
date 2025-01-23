import { StyleSheet, Text, TextInput, View } from "react-native";

interface CustomTextInputProps {
  isSecureText: boolean;
  handleOnchangeText: (text: string) => void; // onChangeText fonksiyonu, yeni metni alır ve işlem yapar
  handleValue: string; // TextInput'un mevcut değeri
  handlePlaceholder: string;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  isSecureText,
  handleOnchangeText,
  handleValue,
  handlePlaceholder,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        secureTextEntry={isSecureText}
        placeholder={handlePlaceholder}
        style={styles.textInputStyle}
        onChangeText={handleOnchangeText}
        value={handleValue}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: "85%",
    marginTop: 12,
  },
  textStyle: {
    alignSelf: "flex-start",
    marginTop: 10,
  },
  textInputStyle: {
    borderBottomWidth: 1,
    width: "100%",
    height: 40,
    borderRadius: 10,
    marginVertical: 7,
    textAlign: "left",
    paddingLeft: 10,
  },
});
