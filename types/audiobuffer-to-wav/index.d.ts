// Type definitions for audiobuffer-to-wav 1.0
// Project: https://github.com/Jam3/audiobuffer-to-wav
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    float32?: boolean | undefined;
}

declare function audioBufferToWav(buffer: AudioBuffer, options?: Options): ArrayBuffer;

export = audioBufferToWav;
