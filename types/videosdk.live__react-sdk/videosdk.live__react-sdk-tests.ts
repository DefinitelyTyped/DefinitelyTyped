import {
    createCameraVideoTrack,
    createMicrophoneAudioTrack,
    createScreenShareVideoTrack,
} from 'videosdk.live__react-sdk';

// #ExpectType Promise<MediaStream>
const customAudioTrack = createMicrophoneAudioTrack({ microphoneId: '1' });

// #ExpectType Promise<MediaStream>
const customVideoTrack = createCameraVideoTrack({ cameraId: '1' });

// #ExpectType Promise<MediaStream>
const customScreenShareTrack = createScreenShareVideoTrack({});
