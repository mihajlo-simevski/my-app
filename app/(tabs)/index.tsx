import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text className="text-primary">Home Screen</Text>
      <Text className="text-destructive">Hello Tailwind</Text>
    </View>
  );
}
