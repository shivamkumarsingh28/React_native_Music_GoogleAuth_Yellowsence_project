import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { styles } from './googleloginstyle';

export default function App({navigation}) {
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    GoogleSignin.configure({webClientId: '530439840994-134610i4bbp67cvcrt9414bg28jk84lr.apps.googleusercontent.com'});
  }, []);

  // Somewhere in your code
  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("UserInfo", userInfo);
      setSuccess(userInfo)
      navigation.navigate("music", { name: `${userInfo.user.givenName }`})
      navigation.setOptions({ headerTitle: `${userInfo.user.givenName }`});
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


 const GoogleSignOut = async () => {
    try {
      await GoogleSignin.signOut();
      setSuccess(null); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {success !=null && <Text style={{color: 'black', fontWeight:'bold'}}>{success.user.name}</Text>}
      {success !=null && <Text style={{color: 'black', fontWeight:'bold'}}>{success.user.email}</Text>}
      {success !=null && <Image source={{uri:success.user.photo}} style={{width:100, height:100, marginBottom: 10}}/>}

      {success == null ? (<TouchableOpacity style={styles.btnstyle} onPress={() => { GoogleLogin() }}>
        <Text>Sign In</Text>
      </TouchableOpacity>) : (
        <>
      <TouchableOpacity style={styles.btnstyle} onPress={() => { GoogleSignOut() }}>
        <Text>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnstyle} onPress={() => { navigation.navigate("music", { name: `${success.user.givenName }`}) }}>
      <Text>Go To {success.user.givenName} Music</Text>
    </TouchableOpacity></>
      )}


    </View>
  );
}