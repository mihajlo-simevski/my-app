import { Text, View } from "react-native";

export default function HelloWorld() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-primary dark:text-white">Hello World</Text>
    </View>
  );
}
