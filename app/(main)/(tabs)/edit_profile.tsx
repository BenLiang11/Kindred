import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    age: '25',
    area: 'San Francisco, CA',
    school: 'University of California',
    bio: 'Aspiring software developer who loves meeting new people and exploring innovative tech.',
  });

  return (
    <SafeAreaView className="flex-1 bg-white p-5 m-4">
      <View className="flex-1">
        <Text className="text-2xl font-crimson font-bold text-black mb-5">Edit Profile</Text>

        {/* Editable Fields */}
        <TextInput
          className="border border-gray-300 rounded p-3 mb-4"
          placeholder="Name"
          value={profile.name}
          onChangeText={(text) => setProfile({ ...profile, name: text })}
        />
        <TextInput
          className="border border-gray-300 rounded p-3 mb-4"
          placeholder="Age"
          keyboardType="numeric"
          value={profile.age}
          onChangeText={(text) => setProfile({ ...profile, age: text })}
        />
        <TextInput
          className="border border-gray-300 rounded p-3 mb-4"
          placeholder="Area"
          value={profile.area}
          onChangeText={(text) => setProfile({ ...profile, area: text })}
        />
        <TextInput
          className="border border-gray-300 rounded p-3 mb-4"
          placeholder="School"
          value={profile.school}
          onChangeText={(text) => setProfile({ ...profile, school: text })}
        />
        <TextInput
          className="border border-gray-300 rounded p-3 mb-4"
          placeholder="Bio"
          value={profile.bio}
          onChangeText={(text) => setProfile({ ...profile, bio: text })}
          multiline
        />
        {/* Navigate Back */}
        <Link
          href="/"
          className="bg-primary-500 text-white w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 text-lg font-crimsonSemiBold text-center">
          Save and Go Back
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
