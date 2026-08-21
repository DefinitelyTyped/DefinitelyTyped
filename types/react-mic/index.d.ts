import * as React from "react";

/**
 * Record a user's voice and display as an oscillation (or frequency bars).
 */
export class ReactMic extends React.PureComponent<ReactMicProps> {}

/**
 * The object sent when the recording stops
 */
export interface ReactMicStopEvent {
    blob: Blob;
    startTime: number;
    stopTime: number;
    option: {
        audioBitsPerSecond: number;
        mimeType: string;
    };
    blobURL: string;
}

export interface ReactMicProps {
    /** Set to true to begin recording */
    record?: boolean | undefined;

    /** Available in React-Mic-Plus upgrade only */
    pause?: boolean | undefined;

    visualSetting?: "sinewave" | "frequencyBars" | undefined;

    className?: string | undefined;

    /** Callback that is executed when audio stops recording */
    onStop?: ((recordedData: ReactMicStopEvent) => void) | undefined;

    /** Callback that is executed when chunk of audio is available */
    onData?: ((recordedData: Blob) => void) | undefined;

    /** defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold) */
    mimeType?: "audio/webm" | "audio/wav" | undefined;

    /** Sound wave color */
    strokeColor?: string | undefined;

    /** Background color */
    backgroundColor?: string | undefined;

    /** Specify 1 for mono, defaults -> 2 (stereo) */
    channelCount?: 1 | 2 | undefined;

    /** Enables/disables echo cancellation, defaults -> false */
    echoCancellation?: boolean | undefined;

    /** Enables/disables auto gain control, defaults -> false */
    autoGainControl?: boolean | undefined;

    /** Enables/disables background noise suppression, defaults -> false */
    noiseSuppression?: boolean | undefined;
}
