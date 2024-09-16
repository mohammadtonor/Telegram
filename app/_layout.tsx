import {Stack} from 'expo-router';
import 'react-native-reanimated';
import {NativeWindStyleSheet} from "nativewind";


NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
  );
}
