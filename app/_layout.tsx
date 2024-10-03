import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    MarkoOne: require('../assets/fonts/MarkoOne-Regular.ttf'),
    CrimsonPro: require('../assets/fonts/CrimsonPro-Regular.ttf'),
    CrimsonProSemiBold: require('../assets/fonts/CrimsonPro-SemiBold.ttf'),
    CrimsonProBold: require('../assets/fonts/CrimsonPro-Bold.ttf'),
    CrimsonProItalic: require('../assets/fonts/CrimsonPro-Italic.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
