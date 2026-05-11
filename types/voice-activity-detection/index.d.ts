declare function vad(
    audioContext: AudioContext,
    stream: MediaStream,
    options?: vad.VoiceActivityDetectionOptions,
): { connect: () => void; disconnect: () => void; destroy: () => void };

declare namespace vad {
    interface VoiceActivityDetectionOptions {
        fftSize?: number | undefined;
        bufferLen?: number | undefined;
        smoothingTimeConstant?: number | undefined;
        minCaptureFreq?: number | undefined;
        maxCaptureFreq?: number | undefined;
        noiseCaptureDuration?: number | undefined;
        minNoiseLevel?: number | undefined;
        maxNoiseLevel?: number | undefined;
        avgNoiseMultiplier?: number | undefined;
        onVoiceStart?: (() => void) | undefined;
        onVoiceStop?: (() => void) | undefined;
        onUpdate?: ((val: number) => void) | undefined;
    }
}

export = vad;
