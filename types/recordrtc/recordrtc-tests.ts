import RecordRTC, { Options } from 'recordrtc';

const opts: Options = {};

navigator.getUserMedia(
    { audio: true, video: true },
    stream => {
        const instance = new RecordRTC(stream, {
            type: 'video',
            disableLogs: true,
            bufferSize: 2048,
        });

        instance.stopRecording(() => {
            const blob = instance.getBlob();
        });
    },
    console.error,
);

const canvas = document.querySelector('canvas')!;

const instance2 = new RecordRTC(canvas, {
    type: 'canvas',
});
instance2.stopRecording();

console.log(RecordRTC.version);
