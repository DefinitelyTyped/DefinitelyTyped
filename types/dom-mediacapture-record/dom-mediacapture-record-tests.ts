const isWebmSupported: boolean = window.MediaRecorder.isTypeSupported(
    'video/webm'
);

const mediaStream = new MediaStream();

const mediaRecorderOptions: MediaRecorderOptions = {
    mimeType: 'video/webm',
    audioBitsPerSecond: 1000000,
    videoBitsPerSecond: 4000000,
    audioBitrateMode: 'vbr'
};

const blobEvent = new BlobEvent('dataavailable', {
    data: new Blob(),
    bubbles: false
});
const errorEvent = new MediaRecorderErrorEvent('error', {
    error: new DOMException(),
    bubbles: false
});

const onDataAvailable = (event: BlobEvent) => {
    const blobType = event.data.type;
};

const onError = (event: MediaRecorderErrorEvent) => {
    const errorMessage = event.error.message;
};

const onEvent = (event: Event) => {};

let recorder = new window.MediaRecorder(mediaStream);
recorder = new MediaRecorder(mediaStream, mediaRecorderOptions);

recorder.start();
recorder.stop();
recorder.start(1000);
recorder.pause();
recorder.requestData();
const state: RecordingState = recorder.state;
const isRecording = state === 'recording';
const isAudioVariableBitrate = recorder.audioBitrateMode === 'vbr';

recorder.addEventListener('start', onEvent);
recorder.removeEventListener('start', onEvent);
recorder.dispatchEvent(blobEvent);

recorder.ondataavailable = onDataAvailable;
recorder.ondataavailable = onEvent;
recorder.onerror = onError;
recorder.onpause = onEvent;
recorder.onresume = onEvent;
recorder.onstart = onEvent;
recorder.onstop = onEvent;

recorder.ondataavailable = null;
recorder.onerror = null;
recorder.onpause = null;
recorder.onresume = null;
recorder.onstart = null;
recorder.onstop = null;

recorder.addEventListener('dataavailable', (e: BlobEvent) => {});
recorder.addEventListener('error', (e: MediaRecorderErrorEvent) => {});
recorder.addEventListener('pause', onEvent);
recorder.addEventListener('resume', onEvent);
recorder.addEventListener('dataavailable', onEvent);
