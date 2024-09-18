import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  Channel,
  ChannelList,
  MessageInput,
  MessageList,
} from "stream-chat-expo";
import { router } from "expo-router";

export default function ChatScreen() {
  return <ChannelList onSelect={(channel) => router.push(`/(home)/channel`)} />;
}
