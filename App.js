import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screen
import Musicplayerui from './src/MusicPlayer/Musicplayerui';
import GoogleLogin from './src/GoogleLogin/GoogleLogin';

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={GoogleLogin} />
        <Stack.Screen name="music" component={Musicplayerui} />
      </Stack.Navigator>
    </NavigationContainer>
  )

  // return (
  //   <View style={styles.container}>
  //     <GoogleLogin />

  //     <Musicplayerui />
  //   </View>
  // );
}