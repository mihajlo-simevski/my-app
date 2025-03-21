import { useThemeColor } from "@/hooks/useThemeColor";
import { Text, View } from "react-native";

export default function HelloWorld() {
  const textColor = useThemeColor({}, "text");
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ color: textColor }}>Hello World</Text>
		</View>
	);
}
