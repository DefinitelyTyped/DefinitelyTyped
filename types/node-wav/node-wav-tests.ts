import wav = require('node-wav');

declare const buffer: Buffer;

// $ExpectType { readonly sampleRate: number; readonly channelData: readonly Float32Array[]; }
const wavFileInfo = wav.decode(buffer);
// $ExpectType Buffer
wav.encode(wavFileInfo.channelData, {
    sampleRate: wavFileInfo.sampleRate,
    float: true,
    bitDepth: 32,
    floatingPoint: true,
});
// $ExpectType Buffer
wav.encode(wavFileInfo.channelData, {});
// @ts-expect-error
wav.encode(wavFileInfo.channelData);
