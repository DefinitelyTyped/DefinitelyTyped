import WavEncoder = require('wav-encoder');

const left = new Float32Array(10);
const right = new Float32Array(10);

function encode(): Promise<ArrayBuffer> {
    return WavEncoder.encode({
        sampleRate: 44100,
        channelData: [
            left,
            right
        ]
    });
}

function encodeSync(): ArrayBuffer {
    return WavEncoder.encode.sync({
        sampleRate: 44100,
        channelData: [
            left,
            right
        ]
    });
}
