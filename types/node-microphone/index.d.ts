// Type definitions for node-microphone 0.1
// Project: https://github.com/MexXxo/node-microphone#readme
// Definitions by: Andreas May <https://github.com/Maanex>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

interface MicrophoneOptions {
    endian?: "big" | "little" | undefined;
    bitwidth?: 8 | 16 | 24 | undefined;
    encoding?: "signed-integer" | "unsigned-integer" | undefined;
    rate?: 8000 | 16000 | 44100 | undefined;
    channels?: 1 | 2 | undefined;
    device?: "hw:0,0" | "plughw:1,0" | "default" | undefined;
    additionalParameters?: any;
}

declare class Microphone {
    constructor(options?: MicrophoneOptions);

    startRecording(): NodeJS.WriteStream;
    stopRecording(): void;
}

export = Microphone;
