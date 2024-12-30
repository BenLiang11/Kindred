import ChatIcon from '@/assets/icons/ChatIcon';
import HeartIcon from '@/assets/icons/HeartIcon';
import ProfileIcon from '@/assets/icons/ProfileIcon';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 90,
          paddingBottom: 30,
          paddingTop: 20,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <HeartIcon color={focused ? '#9B8AB4' : '#bdbdbd'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <ChatIcon color={focused ? '#9B8AB4' : '#bdbdbd'} />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View>
              <ProfileIcon color={focused ? '#9B8AB4' : '#bdbdbd'} />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
