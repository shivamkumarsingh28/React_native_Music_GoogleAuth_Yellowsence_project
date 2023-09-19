import React from 'react';
import {View, Text, Modal, Image, Pressable, Linking} from 'react-native';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import ShuffleIcon from '../../../assets/icons/shuffle.png';
import PrevIcon from '../../../assets/icons/prev.png';
import NextIcon from '../../../assets/icons/next.png';
import LoopIcon from '../../../assets/icons/loop.png';
import PlayIcon from '../../../assets/icons/play.png';
import PauseIcon from '../../../assets/icons/pause.png';
import MenuIcon from '../../../assets/icons/down.png';
import {secsToTimestamp} from '../../../util/timeFormat';
import { styles } from './TrackPlayerstyle';



export default function TrackPlayerScreen({
  isVisible,
  onCloseModal,
  selectedMusic,
  isPlaying,
  playOrPause,
  onSeekTrack,
  timestamp,
  onPressNext,
  onPressPrev,
  playbackMode,
  onClickShuffle,
  onClickLoop,
}) {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle="fullScreen">
      <LinearGradient
        colors={['#0000ff', '#00005f', '#191414']}
        style={styles.container}>
        <Pressable
          onPress={onCloseModal}
          style={{
            position: 'absolute',
            top: 45,
            left: 30,
          }}>
          <Image
            source={MenuIcon}
            style={{
              width: 15,
              height: 15,
              tintColor: '#fff',
            }}
          />
        </Pressable>
        <Text style={styles.mainText}>Playing from My Playlist</Text>
        <Text style={[styles.mainText, {fontWeight: 'bold'}]}>
          {selectedMusic.album}
        </Text>
        <Pressable onPress={() => {
            Linking.openURL(selectedMusic.url); }}>
        <Image
          style={{width: 350, height: 350, marginVertical: 75}}
          source={{uri: selectedMusic.artwork}} 
        /></Pressable>
        <View style={{justifyContent: 'space-between', width: '100%'}}>
          <View>
            <Text style={styles.boldMainText}>{selectedMusic.title}</Text>
            <Text style={styles.mainText}>{selectedMusic.artist}</Text>
          </View>
          <Text>Like</Text>
        </View>
        <Slider
          tapToSeek={true}
          minimumTrackTintColor="#fff"
          onValueChange={e => {
            onSeekTrack(Math.floor(e * selectedMusic.duration));
          }}
          style={{width: '100%', paddingHorizontal: 10}}
          value={timestamp / selectedMusic.duration}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text style={styles.mainText}>{secsToTimestamp(timestamp)}</Text>
          <Text style={styles.mainText}>
            {secsToTimestamp(selectedMusic.duration - timestamp)}
          </Text>
        </View>
        <View style={styles.timeStampHolder}>
          <View/>
          <Pressable onPress={onPressPrev}>
            <Image style={styles.iconWidth} source={PrevIcon} />
          </Pressable>
          <Pressable onPress={playOrPause} style={styles.playButtonHolder}>
            <Image
              style={[styles.iconWidth, {tintColor: '#000'}]}
              source={isPlaying ? PauseIcon : PlayIcon} />
          </Pressable>
          <Pressable onPress={onPressNext}>
            <Image style={styles.iconWidth} source={NextIcon} />
          </Pressable>
          <Pressable onPress={onClickLoop}>
            <Image
              style={[
                styles.iconWidth,
                {tintColor: playbackMode === 'loop' ? '#1DB954' : '#fff'},
              ]}
              source={LoopIcon}
            />
          </Pressable>
        </View>
      </LinearGradient>
    </Modal>
  );
}   