import {
  DarkTheme,
  DefaultTheme,
  type Theme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { Platform, View } from "react-native";
import "react-native-reanimated";
import { ThemeToggle } from "~/components/ThemeToggle";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import { useIsomorphicLayoutEffect } from "~/lib/useIsomorphicLayoutEffect";
import "./global.css";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const LIGHT_THEME: Theme = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME: Theme = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export default function RootLayout() {
  const hasMounted = useRef(false);
  const { isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  // Hide splash screen when fonts are loaded
  useEffect(() => {
    if (loaded && isColorSchemeLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, isColorSchemeLoaded]);

  // Handle initial setup (color scheme readiness and web-specific tweaks)
  useIsomorphicLayoutEffect(() => {
    if (hasMounted.current) {
      return;
    }

    if (Platform.OS === "web" && typeof document !== "undefined") {
      // Adds the background color to the html element on web
      document.documentElement.classList.add("bg-background");
    }

    setIsColorSchemeLoaded(true);
    hasMounted.current = true;
  }, []);

  if (!loaded || !isColorSchemeLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerRight: () => (
              <View className="web:mr-3">
                <ThemeToggle />
              </View>
            ),
            headerTitle: "PuffQ",
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
