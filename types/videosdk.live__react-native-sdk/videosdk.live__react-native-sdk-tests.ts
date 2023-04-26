import { createCameraVideoTrack, createMicrophoneAudioTrack } from 'videosdk.live__react-native-sdk';

// #ExpectType Promise<MediaStream>
const customAudioTrack = createMicrophoneAudioTrack({ microphoneId: '1' });

// #ExpectType Promise<MediaStream>
const customVideoTrack = createCameraVideoTrack({ cameraId: '1' });
