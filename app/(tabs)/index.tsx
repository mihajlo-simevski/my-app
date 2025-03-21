import { Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function HomeScreen() {
	const textColor = useThemeColor({}, "text");
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text style={{ color: textColor }}>Home Screen</Text>
		</View>
	);
}
