import React from 'react';
import {
  View,
  Text,
  FlatList,
  Linking,
  Pressable,
  Image,
  SectionList,
  SafeAreaView
} from 'react-native';
import {musiclibrary} from '../../musicdata';
import {SECTIONS} from './Data';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './musicplayerstyle';

export default function Musicplayerui({route, navigation}) {
  const {name} = route.params;
  const PlaylistImageView = () => (
    <>
      <LinearGradient
        colors={['#0000ff', '#00005f', '#191414']}
        style={styles.linearGradient}>
        <Image
          style={{width: 200, height: 200}}
          source={{uri: 'https://www.bensound.com/bensound-img/punky.jpg'}}
        />
      </LinearGradient>
    </>
  );

const renderSingleMusic = ({item, index}) => {
    return (
      <>
        {index === 0 && <PlaylistImageView />}
        <Pressable onPress={() => {
          Linking.openURL(item.url); }}>
          <View>
            <Text style={styles.musicTitle}>{item.title}</Text>
            <Text style={styles.artisteTitle}>{item.artist}</Text>
          </View>
        </Pressable>
      </>
    );
  };

const ListItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
          onPress={() => {
            Linking.openURL(item.url); }}
        />
        <Text onPress={() => {
            Linking.openURL(item.url); }} style={styles.itemText}>{item.text}</Text>
      </View>
    );
  };

  return (
  <>
    <View style={styles.container}>
      <SafeAreaView />
      
      <View style={[styles.widgetContainer]}>
        <Text style={styles.musicTitle} onPress={() => {
              Linking.openURL('https://www.youtube.com/channel/UC03GH9NoxcHMtnDRTG6hZcQ'); }}>{name} Music Channel</Text>
      </View>
      <FlatList
        data={musiclibrary}
        keyExtractor={item => item.url}
        renderItem={renderSingleMusic}
      /> 
      </View>

<View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
    </>
  );
}

