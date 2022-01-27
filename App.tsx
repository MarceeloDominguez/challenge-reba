import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import FavoriteContext from './src/context/FavoriteContext';

export default function App() {
  return (
    <FavoriteContext>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </FavoriteContext>
  );
}
