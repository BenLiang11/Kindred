import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { Link } from 'expo-router';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onSignupPress = async () => {
    const { name, email, password } = form;

    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    try {
      const userCredentials = await createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredentials.user;

      await updateProfile(user, {
        displayName: name,
      });
      Alert.alert('Success', 'Registration successful!');
    } catch (error: any) {
      Alert.alert('Registration Error', error.message);
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Text className="text-3xl text-black font-crimson font-semibold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View className="p-5">
          {/* Inputs fields */}
          <InputField
            label="Name"
            placeholder="Enter your name"
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <InputField
            label="Email"
            placeholder="Enter your email"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
          {/* Sign up or Google sign up */}
          <CustomButton title="Sign Up" onPress={onSignupPress} className="mt-6" />

          <OAuth />

          <Link href="/sign_in" className="text-lg test-center mt-6 mb-32 text-center">
            <Text className="text-gray-500 font-crimson">Already have an account? </Text>
            <Text className="text-primary-500 font-crimson">Log in</Text>
          </Link>
        </View>
        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignUp;
