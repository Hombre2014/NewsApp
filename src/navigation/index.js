import React from 'react';
import AuthStack from '@Navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default RootNavigation;
