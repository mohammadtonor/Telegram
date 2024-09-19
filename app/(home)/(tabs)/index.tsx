import { ChannelList } from "stream-chat-expo";
import { router } from "expo-router";

export default function ChatScreen() {
  return <ChannelList onSelect={(channel) => router.push(`/(home)/channel`)} />;
}
