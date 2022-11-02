import RecordRTC, { Options, RecordRTCPromisesHandler } from 'recordrtc';

const opts: Options = {
    frameRate: 59.9,
};

navigator.mediaDevices.getUserMedia({ audio: true, video: true }).then(stream => {
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

    // $ExpectType State
    instance.getState();

    // $ExpectType { onRecordingStopped: (callback: () => void) => void; }
    instance.setRecordingDuration(1);

    const fiveMinutes = 5 * 1000 * 60;
    // $ExpectType void
    instance.setRecordingDuration(fiveMinutes, () => {});

    // $ExpectType void
    instance.setRecordingDuration(fiveMinutes).onRecordingStopped(() => {});
    const StereoAudioRecorder = new RecordRTC.StereoAudioRecorder(stream, {desiredSampRate : 1000});
    StereoAudioRecorder.record();
    StereoAudioRecorder.stop((blob: Blob) => {});
    StereoAudioRecorder.pause();
    StereoAudioRecorder.resume();
    StereoAudioRecorder.clearRecordedData();
    StereoAudioRecorder.onAudioProcessStarted();
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

RecordRTC.getSeekableBlob(new Blob(), outputBlob => {
    outputBlob; // $ExpectType Blob
});

RecordRTC.DiskStorage.Fetch((dataUrl, type) => {
    dataUrl; // $ExpectType string
    const check1 = type === 'audioBlob';
    // @ts-expect-error
    const check2 = type === 'invalid';
});
RecordRTC.DiskStorage.Store({
    audioBlob: new Blob(),
    videoBlob: new Blob(),
});

const asyncRecorder = new RecordRTCPromisesHandler(canvas, { checkForInactiveTracks: true });
asyncRecorder
    .startRecording()
    .then(() => {})
    .catch(() => {});

async function f() {
    const out = await asyncRecorder.stopRecording();
    // $ExpectType string
    out;
}
f();

asyncRecorder.recordRTC.onStateChanged = state => {};
asyncRecorder.recordRTC.setRecordingDuration(5000);
