import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text style={{ color: "#fff" }}>This screen doesn't exist.</Text>
        <Link href="/" style={{ marginTop: 15, paddingVertical: 15 }}>
          <Text style={{ color: "#fff" }}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
