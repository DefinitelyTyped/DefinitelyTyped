declare namespace WavEncoder {
    interface AudioData {
        sampleRate: number;
        channelData: Float32Array[];
    }

    interface Options {
        bitDepth: number;
        float: boolean;
        symmetric: boolean;
    }
}

declare const WavEncoder: {
    encode: {
        (audioData: WavEncoder.AudioData, opts?: WavEncoder.Options): Promise<ArrayBuffer>;
        sync: (audioData: WavEncoder.AudioData, opts?: WavEncoder.Options) => ArrayBuffer;
    };
};

export = WavEncoder;
