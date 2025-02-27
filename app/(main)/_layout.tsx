import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/edit_profile" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
