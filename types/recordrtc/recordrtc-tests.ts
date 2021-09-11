import RecordRTC, { Options } from 'recordrtc';

const opts: Options = {
    frameRate: 59.9
};

navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then(stream => {
        const instance = new RecordRTC(stream, {
            type: 'video',
            disableLogs: true,
            bufferSize: 2048,
            ondataavailable: (blob: Blob) => {
                console.log(blob);
            },
            onTimeStamp: (timestamp: number, timestamps: number[]) => {
                console.log(timestamp, timestamps);
            },
            previewStream: (stream: MediaStream) => {
                console.log(stream);
            },
        });

        instance.stopRecording(() => {
            const blob = instance.getBlob();
        });

        // $ExpectType string
        instance.getState();

        // $ExpectType { onRecordingStopped: (callback: () => void) => void; }
        instance.setRecordingDuration(1);

        const fiveMinutes = 5 * 1000 * 60;
        // $ExpectType void
        instance.setRecordingDuration(fiveMinutes, () => {});

        // $ExpectType void
        instance.setRecordingDuration(fiveMinutes).onRecordingStopped(() => {});
    });

const canvas = document.querySelector('canvas')!;

const instance2 = new RecordRTC(canvas, {
    type: 'canvas',
});
instance2.stopRecording();

console.log(RecordRTC.version);

const multiStreamRecorder = new RecordRTC.MultiStreamRecorder([]);
multiStreamRecorder.record();
multiStreamRecorder.stop((blob: Blob) => {});
multiStreamRecorder.pause();
multiStreamRecorder.resume();
multiStreamRecorder.clearRecordedData();

RecordRTC.getSeekableBlob(new Blob(), (outputBlob) => {
    outputBlob; // $ExpectType Blob
});

RecordRTC.DiskStorage.Fetch((dataUrl, type) => {
    dataUrl; // $ExpectType string
    const check1 = type === "audioBlob";
    // $ExpectError
    const check2 = type === "invalid";
});
RecordRTC.DiskStorage.Store({
    audioBlob: new Blob(),
    videoBlob: new Blob(),
});
