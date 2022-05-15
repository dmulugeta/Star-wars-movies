import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail} from '../screens';

export type StackParamList = {
  Home: undefined;
  Detail: {filmDetail: IFilm};
};

const Stack = createNativeStackNavigator<StackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Detail"
        options={{
          animation: 'slide_from_bottom',
        }}
        component={Detail}
      />
    </Stack.Navigator>
  );
};
