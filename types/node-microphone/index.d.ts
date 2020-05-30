// Type definitions for node-microphone 0.1
// Project: https://github.com/MexXxo/node-microphone#readme
// Definitions by: Andreas May <https://github.com/Maanex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface MicrophoneOptions {
    endian?: 'big' | 'little';
    bitwidth?: 8 | 16 | 24;
    encoding?: 'signed-integer' | 'unsigned-integer';
    rate?: 8000 | 16000 | 44100;
    channels?: 1 | 2;
    device?: 'hw:0,0' | 'plughw:1,0' | 'default';
    additionalParameters?: any;
}

export default class Microphone {

    constructor(options?: MicrophoneOptions);

    public startRecording(): NodeJS.WriteStream;

    public stopRecording(): void;

}
