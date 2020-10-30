import Microphone from "node-microphone";

const mic = new Microphone({
    channels: 1,
    bitwidth: 16,
    endian: "little",
    device: "default",
    encoding: "signed-integer",
    rate: 44100,
    additionalParameters: {}
});

const stream = mic.startRecording();
stream.pipe(process.stdout);

mic.stopRecording();
