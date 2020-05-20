import { AudioRecorder, AudioUtils } from 'react-native-audio';
const audioPath = AudioUtils.DocumentDirectoryPath + '/test.aac';

AudioRecorder.prepareRecordingAtPath(audioPath, {
    SampleRate: 22050,
    Channels: 1,
    AudioQuality: "Low",
    AudioEncoding: "aac"
});

AudioRecorder.onProgress = (data) => {
    // todo
};
