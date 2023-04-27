import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@Screen/Home';
import Favorites from '@Screen/Favorites';
import Notifications from '@Screen/Notifications';
import Account from '@Screen/Account';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import {moderateScale} from 'react-native-size-matters';

const Tabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#062743',
        tabBarInactiveTintColor: '#9ea9b3',
        tabBarShowLabel: false,
        tabBarItemStyle: {
          marginVertical: moderateScale(10),
        },
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="home-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="heart-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="notifications-sharp" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="person-sharp" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
