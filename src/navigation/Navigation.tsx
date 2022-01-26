import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screen/HomeScreen';
import DetailsScreen from '../screen/DetailsScreen';
import {Products} from '../interfaces/productsInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: Products;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Lista Products',
          headerTitleAlign: 'center',
          contentStyle: {backgroundColor: '#fff'},
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
