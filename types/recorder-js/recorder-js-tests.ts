// The following code comes from:
// https://www.npmjs.com/package/recorder-js#usage

import Recorder = require('recorder-js');

const audioContext = new AudioContext();
let isRecording = false;
let recorded: Blob | null = null;

const recorder = new Recorder(audioContext, {
    onAnalysed: (data) => {
        // An array of 255 Numbers
        // You can use this to visualize the audio stream
        console.log(data);
    }
});

navigator.mediaDevices.getUserMedia({audio: true})
    .then((stream) => recorder.init(stream))
    .catch((err) => console.log('Uh oh... unable to get stream...', err));

// startRecording()
function startRecording() {
    recorder.start().then(() => isRecording = true);
}

// stopRecording()
function stopRecording() {
    recorder.stop().then(({blob, buffer}) => {
        console.log('blob: ', blob);
        console.log('buffer: ', buffer);
        recorded = blob;
    });
}

// download()
function download() {
    if (recorded !== null) {
        Recorder.download(recorded, 'my-audio-file');
    }
}
