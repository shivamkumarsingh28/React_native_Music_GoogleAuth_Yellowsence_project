import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { styles } from './googleloginstyle';

export default function App() {
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  // Somewhere in your code
  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("UserInfo", userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };


  return (
    <View>
      <TouchableOpacity style={styles.btnstyle} onPress={GoogleLogin}>
        <Text>Google Login</Text>
      </TouchableOpacity>
    </View>
  );
}