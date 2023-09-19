import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191414',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 10,
      paddingTop: 40,
      paddingBottom: 20,
    },
    boldMainText: {
      fontSize: 22,
      color: '#fff',
      fontWeight: '500',
      marginTop: 12,
      marginHorizontal: 20,
      marginBottom: 1,
    },
    mainText: {
      fontSize: 16,
      color: '#fff',
      opacity: 0.8,
      marginHorizontal: 20,
      // marginBottom: 12,
      // marginTop: 1,
    },
    linearGradient: {
      width: '100%',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconWidth: {
      width: 30,
      height: 30,
      tintColor: '#fff',
    },
    timeStampHolder: {
      width: '100%',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      paddingHorizontal: 10,
    },
    playButtonHolder: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });