import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const textColor = useThemeColor({}, "text");
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: textColor }}>Home Screen</Text>
      <Text className="text-red-500">Hello Tailwind</Text>
    </View>
  );
}
