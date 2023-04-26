import { VideoSDK } from 'videosdk.live__js-sdk';

// $ExpectType Meeting
const meeting = VideoSDK.initMeeting({
    meetingId: 'xyz',
    micEnabled: true,
    webcamEnabled: true,
    name: 'Jhon Doe',
});

// #ExpectType Promise<MediaStream>
const customAudioTrack = VideoSDK.createMicrophoneAudioTrack({ microphoneId: '1' });

// #ExpectType Promise<MediaStream>
const customVideoTrack = VideoSDK.createCameraVideoTrack({ cameraId: '1' });

// #ExpectType Promise<MediaStream>
const customScreenShareTrack = VideoSDK.createScreenShareVideoTrack({});
