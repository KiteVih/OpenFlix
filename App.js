import * as React from 'react';
import { View, StyleSheet  } from 'react-native';


// You can import from local files
import Corpo from './components/corpo.js';
import Header from './components/Header';

// or any pure javascript modules available in npm



export default function App() {
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <Corpo/>
    </View>
  );
}

const styles = StyleSheet.create({

});
