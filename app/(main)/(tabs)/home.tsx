import React from 'react';
import { View, Text, FlatList, SafeAreaView } from 'react-native';

interface Profile {
  id: string;
  name: string;
  location: string;
  age: number;
  about: string;
}

const profiles: Profile[] = [
  {
    id: '1',
    name: 'Alice Johnson',
    location: 'New York, NY',
    age: 29,
    about: 'I love hiking, painting, and spending time with my dog.',
  },
  {
    id: '2',
    name: 'Bob Smith',
    location: 'San Francisco, CA',
    age: 34,
    about: 'Tech enthusiast, foodie, and occasional traveler.',
  },
];

const Home = () => {
  const renderProfileCard = ({ item }: { item: Profile }) => (
    <View className="m-4 p-6 bg-white rounded-lg shadow-lg">
      <Text className="text-xl font-bold">{item.name}</Text>
      <Text className="text-gray-500">{item.location}</Text>
      <Text className="text-gray-500">{item.age} years old</Text>
      <View className="my-4 h-[1px] bg-gray-300" />
      <Text className="text-gray-700">{item.about}</Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        renderItem={renderProfileCard}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Home;
