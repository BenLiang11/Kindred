import { Link } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
}

const chats: Chat[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    lastMessage: 'Hey, how are you?',
    timestamp: '2024-12-28T14:32:00Z',
    avatar: '@/assets/images/blank_profile.png',
  },
  {
    id: '2',
    name: 'Bob Smith',
    lastMessage: 'Let’s meet tomorrow.',
    timestamp: '2024-12-28T09:15:00Z',
    avatar: '@/assets/images/blank_profile.png',
  },
];

const ChatList = () => {
  const renderChatItem = ({ item }: { item: (typeof chats)[0] }) => (
    <Link
      href={{
        pathname: '/chat_detail',
        params: { id: item.id }, // Use params to pass the chat ID
      }}
      asChild>
      <TouchableOpacity className="flex-row items-center p-4 border-b border-gray-300">
        <Image source={{ uri: item.avatar }} className="w-12 h-12 rounded-full mr-4" />
        <View className="flex-1">
          <Text className="text-lg font-semibold">{item.name}</Text>
          <Text className="text-gray-500">{item.lastMessage}</Text>
        </View>
        <Text className="text-gray-400 text-sm">
          {new Date(item.timestamp).toLocaleTimeString()}
        </Text>
      </TouchableOpacity>
    </Link>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList data={chats} keyExtractor={(item) => item.id} renderItem={renderChatItem} />
    </SafeAreaView>
  );
};

export default ChatList;
