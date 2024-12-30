import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';
import CustomButton from '@/components/CustomButton';
import { Link } from 'expo-router';

const Profile = () => {
  // Example profile data
  const [profile] = useState({
    name: 'Jane Doe',
    age: 25,
    area: 'Los Angeles, CA',
    school: 'University of California',
    bio: 'Aspiring software developer who loves meeting new people and exploring innovative tech.',
    interests: ['Music', 'Coding', 'Traveling'],
    profilePicture: null,
  });

  const profilePictureSource = profile.profilePicture
    ? { uri: profile.profilePicture }
    : require('@/assets/images/blank_profile.png');

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        <View className="flex-1 bg-white items-center p-5">
          {/* Profile Picture */}
          <View className="w-32 h-32 rounded-full border-2 border-gray-300 overflow-hidden mb-4">
            <Image source={profilePictureSource} className="w-full h-full" />
          </View>

          {/* Name and Basic Info */}
          <Text className="text-2xl font-crimson font-bold text-black">{profile.name}</Text>
          <Text className="text-lg text-gray-600">{`${profile.age} years old`}</Text>
          <Text className="text-lg text-gray-600">{profile.area}</Text>
          <Text className="text-lg text-gray-600">{profile.school}</Text>

          {/* Bio */}
          <View className="w-full mt-6">
            <Text className="text-xl font-crimson font-bold text-black mb-2">About Me</Text>
            <Text className="text-base text-gray-600">{profile.bio}</Text>
          </View>

          {/* Interests */}
          <View className="w-full mt-6">
            <Text className="text-xl font-crimson font-bold text-black mb-2">Interests</Text>
            <View className="flex-row flex-wrap">
              {profile.interests.map((interest, index) => (
                <Text
                  key={index}
                  className="text-sm text-gray-800 bg-gray-200 px-3 py-1 rounded-full m-1">
                  {interest}
                </Text>
              ))}
            </View>
          </View>

          {/* Edit Profile Button */}
          <View className="w-full mt-8">
            <Link
              href="/edit_profile"
              className="bg-primary-500 text-white w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 text-lg font-crimsonSemiBold text-center">
              Edit Profile
            </Link>
          </View>

          {/* Log Out Button */}
          <View className="w-full mt-4">
            <CustomButton
              title="Log Out"
              onPress={() => console.log('Log Out')}
              className="bg-red-500 text-white"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
