import CustomButton from '@/components/CustomButton';
import InputField from '@/components/InputField';
import OAuth from '@/components/OAuth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import { Link } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onSignInPress = async () => {
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    try {
      const userCredentials = await signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
      const user = userCredentials.user;

      Alert.alert('Welcome,', `${user.displayName}`);
    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          Alert.alert('Sign-In Error', 'No user found with this email.');
          break;
        case 'auth/wrong-password':
          Alert.alert('Sign-In Error', 'Incorrect password.');
          break;
        case 'auth/invalid-email':
          Alert.alert('Sign-In Error', 'Invalid email address.');
          break;
        default:
          Alert.alert('Sign-In Error', error.message);
      }
    }
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Text className="text-3xl text-black font-crimson font-bold absolute bottom-5 left-5">
            Welcome
          </Text>
        </View>
        <View className="p-5">
          {/* Inputs fields */}
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
          <CustomButton title="Sign In" onPress={onSignInPress} className="mt-6" />

          <OAuth />

          <Link href="/sign_up" className="text-lg test-center mt-6 mb-32 text-center">
            <Text className="text-gray-500 font-crimson">Don't have an account? </Text>
            <Text className="text-primary-500 font-crimson">Sign up</Text>
          </Link>
        </View>
        {/* Verification Modal */}
      </View>
    </ScrollView>
  );
};

export default SignIn;
