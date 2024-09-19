import { Redirect, Stack } from "expo-router";
import "react-native-reanimated";
import { StreamChat } from "stream-chat";
import ChatProvider from "@/Providers/ChatProvider";
import { useAuth } from "@/Providers/AuthProvider";
import { returnStatement } from "@babel/types";

export default function HomeLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href={"/(auth)/login"} />;
  }
  return (
    <ChatProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ChatProvider>
  );
}
