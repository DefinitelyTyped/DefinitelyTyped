import wav = require("node-wav");

declare const buffer: Buffer;

// $ExpectType { readonly sampleRate: number; readonly channelData: readonly Float32Array[]; } || { readonly sampleRate: number; readonly channelData: readonly Float32Array<ArrayBufferLike>[]; }
const wavFileInfo = wav.decode(buffer);
// $ExpectType Buffer || Buffer<ArrayBufferLike>
wav.encode(wavFileInfo.channelData, {
    sampleRate: wavFileInfo.sampleRate,
    float: true,
    bitDepth: 32,
    floatingPoint: true,
});
// $ExpectType Buffer || Buffer<ArrayBufferLike>
wav.encode(wavFileInfo.channelData, {});
// @ts-expect-error
wav.encode(wavFileInfo.channelData);
