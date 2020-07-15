// Type definitions for voice-activity-detection 0.0
// Project: https://github.com/Jam3/voice-activity-detection
// Definitions by: JohnDoeAntler <https://github.com/JohnDoeAntler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function vad(audioContext: AudioContext, stream: MediaStream, options?: VoiceActivityDetectionOptions): void;

interface VoiceActivityDetectionOptions {
    fftSize?: number;
    bufferLen?: number;
    smoothingTimeConstant?: number;
    minCaptureFreq?: number;
    maxCaptureFreq?: number;
    noiseCaptureDuration?: number;
    minNoiseLevel?: number;
    maxNoiseLevel?: number;
    avgNoiseMultiplier?: number;
    onVoiceStart?: () => void;
    onVoiceStop?: () => void;
    onUpdate?: (val: number) => void;
}

export default vad;
