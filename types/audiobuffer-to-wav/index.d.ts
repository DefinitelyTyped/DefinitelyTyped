interface Options {
    float32?: boolean | undefined;
}

declare function audioBufferToWav(buffer: AudioBuffer, options?: Options): ArrayBuffer;

export = audioBufferToWav;
