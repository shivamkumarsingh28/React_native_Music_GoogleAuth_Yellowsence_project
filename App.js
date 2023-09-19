import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import Musicplayerui from './src/MusicPlayer/Musicplayerui';
import GoogleLogin from './src/GoogleLogin/GoogleLogin';

export default function App() {


  return (
    <View style={styles.container}>
      <GoogleLogin />

      <Musicplayerui />
    </View>
  );
}