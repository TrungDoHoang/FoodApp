import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Detail from './screens/Detail';
import Home from './screens/Home';

export interface Nav {
  navigate: (value: string) => void;
}

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ navigationBarHidden: true }}
          initialParams={{ key: 'home' }}
        />
        <Stack.Screen name="Detail" component={Detail} initialParams={{ key: 'detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
