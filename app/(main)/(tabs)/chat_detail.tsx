import React from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const chats = [
  {
    id: '1',
    name: 'Alice Johnson',
    messages: [
      { sender: 'Alice', content: 'Hey, how are you?', timestamp: '14:31' },
      { sender: 'You', content: 'I am good!', timestamp: '14:32' },
    ],
  },
  {
    id: '2',
    name: 'Bob Smith',
    messages: [
      { sender: 'You', content: 'Sure, what time?', timestamp: '09:10' },
      { sender: 'Bob', content: 'Let’s meet tomorrow.', timestamp: '09:15' },
    ],
  },
];

const ChatDetail = () => {
  const { id } = useLocalSearchParams(); // Access the query parameters
  const chat = chats.find((c) => c.id === id);

  if (!chat) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-500">Chat not found</Text>
      </View>
    );
  }

  const renderMessage = ({
    item,
  }: {
    item: { sender: string; content: string; timestamp: string };
  }) => (
    <View className={`p-2 ${item.sender === 'You' ? 'self-end' : 'self-start'}`}>
      <Text className="text-gray-800 font-medium">{item.sender}</Text>
      <Text className="bg-blue-100 px-3 py-2 rounded-md text-gray-900">{item.content}</Text>
      <Text className="text-gray-500 text-xs">{item.timestamp}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={chat.messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMessage}
        contentContainerStyle={{ padding: 10 }}
      />
      <View className="flex-row items-center p-4 border-t border-gray-300">
        <TextInput placeholder="Type a message..." className="flex-1 bg-gray-100 p-3 rounded-lg" />
        <TouchableOpacity className="ml-2 bg-blue-500 p-3 rounded-lg">
          <Text className="text-white font-bold">Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetail;
