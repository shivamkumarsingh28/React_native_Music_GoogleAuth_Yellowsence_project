import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#191414',
      // marginLeft: 70
    },
    musicTitle: {
      fontSize: 22,
      color: '#fff',
      fontWeight: '500',
      marginTop: 12,
      marginHorizontal: 20,
      // marginLeft: 90,
      marginBottom: 1
    },
    artisteTitle: {
      fontSize: 16,
      color: '#fff',
      opacity: 0.8,
      marginHorizontal: 20,
      marginBottom: 12,
      marginTop: 1,
    },
    widgetContainer: {
      backgroundColor: '#191414',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 0,
      height: 60,
      width: '100%',
      // backgroundColor: '#5E5A5A',
    },
    widgetMusicTitle: {
      fontSize: 18,
      color: '#fff',
      fontWeight: '500',
      marginTop: 12,
      marginHorizontal: 10,
      marginBottom: 1,
    },
    widgetArtisteTitle: {
      fontSize: 14,
      color: '#fff',
      opacity: 0.8,
      marginHorizontal: 10,
      marginBottom: 12,
      marginTop: 1,
    },
    widgetImageStyle: {
      width: 55,
      height: 60,
      marginTop: 3,
    },
    linearGradient: {
      width: '100%',
      height: 250,
      justifyContent: 'center',
      alignItems: 'center',
    },
    shuffleButton: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    shuffleButtonContainer: {
      paddingVertical: 15,
      paddingHorizontal: 35,
      borderRadius: 40,
      alignSelf: 'center',
      backgroundColor: '#1DB954',
    },
    horizontalscroll: {
      borderRadius: 9,
      backgroundColor: 'blue',
      alignItems: 'center'
    },
    sectionHeader: {
      fontWeight: '800',
      fontSize: 18,
      color: '#f4f4f4',
      marginTop: 20,
      marginBottom: 5,
    },
    item: {
      margin: 10,
    },
    itemPhoto: {
      width: 200,
      height: 200,
    },
    itemText: {
      color: 'rgba(255, 255, 255, 0.5)',
      marginTop: 5,
    },
  });