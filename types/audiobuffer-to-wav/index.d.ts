// Type definitions for audiobuffer-to-wav 1.0
// Project: https://github.com/Jam3/audiobuffer-to-wav
// Definitions by: Mitsuka Hanakura a.k.a. ragg <https://github.com/ra-gg>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface Options {
    float32?: boolean;
}

declare function audioBufferToWav(buffer: AudioBuffer, options?: Options): ArrayBuffer;

export = audioBufferToWav;
