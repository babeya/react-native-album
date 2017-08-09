// Index.ios.js - place code in here for IOS

// Import a library to  help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => {
  return (
      <Header/>
  );
};

// Render it
AppRegistry.registerComponent('albums', () => App);
