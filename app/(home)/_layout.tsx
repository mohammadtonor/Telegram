import { Stack } from "expo-router";
import "react-native-reanimated";
import { StreamChat } from "stream-chat";
import { useEffect } from "react";
import { Chat, OverlayProvider } from "stream-chat-expo";

const client = StreamChat.getInstance("z7nh4c37wwgc");
export default function HomeLayout() {
  useEffect(() => {
    const connect = async () => {
      await client.connectUser(
        {
          id: "jlahey",
          name: "Jim Lahey",
          image: "https://i.imgur.com/fR9Jz14.png",
        },
        client.devToken("jlahey"),
      );
      // const channel = client.channel("messaging", "the_park", {
      //   name: "The Park",
      // });
      // await channel.create();
    };

    connect();
  }, []);

  return (
    <OverlayProvider>
      <Chat client={client}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </Chat>
    </OverlayProvider>
  );
}
