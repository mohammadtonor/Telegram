import { Stack } from "expo-router";
import "react-native-reanimated";
import { StreamChat } from "stream-chat";
import ChatProvider from "@/Providers/ChatProvider";

const client = StreamChat.getInstance("z7nh4c37wwgc");
export default function HomeLayout() {
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
