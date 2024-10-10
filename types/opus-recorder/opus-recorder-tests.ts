import Recorder from 'opus-recorder';

const recorder1 = new Recorder({});

const recorder2 = new Recorder({
  bufferLength: 4096,
  encoderPath: 'path/to/encoderWorker.min.js',
  mediaTrackConstraints: {
    audio: true,
    video: false,
  },
  monitorGain: 0.5,
  numberOfChannels: 2,
  recordingGain: 1,
  sourceNode: undefined,
  encoderApplication: 2049,
  encoderBitRate: 64000,
  encoderComplexity: 10,
  encoderFrameSize: 20,
  encoderSampleRate: 48000,
  maxFramesPerPage: 40,
  originalSampleRateOverride: 16000,
  resampleQuality: 3,
  streamPages: false,
  wavBitDepth: 16,
});

const isSupported: boolean = Recorder.isRecordingSupported();
const version: string = Recorder.version;

recorder1.ondataavailable = (data: Uint8Array) => {
  console.log('Data available:', data);
};

recorder1.onpause = () => {
  console.log('Recording paused');
};

recorder1.onresume = () => {
  console.log('Recording resumed');
};

recorder1.onstart = () => {
  console.log('Recording started');
};

recorder1.onstop = (data: Uint8Array) => {
  console.log('Recording stopped. Final data:', data);
};

recorder1.start().then(() => {
  console.log('Recording has started');
}).catch((error) => {
  console.error('Error starting recording:', error);
});

recorder1.pause();

recorder1.resume();

recorder1.stop().then(() => {
  console.log('Recording has stopped');
}).catch((error) => {
  console.error('Error stopping recording:', error);
});

recorder1.close();

recorder1.setRecordingGain(0.8);
recorder1.setMonitorGain(0.5);

const position: number = recorder1.encodedSamplePosition;
