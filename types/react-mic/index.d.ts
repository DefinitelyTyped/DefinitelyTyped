// Type definitions for react-mic 12.4
// Project: https://hackingbeauty.github.io/react-mic
// Definitions by: mikaello <https://github.com/mikaello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

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
    record?: boolean;

    /** Available in React-Mic-Plus upgrade only */
    pause?: boolean;

    visualSetting?: 'sinewave' | 'frequencyBars';

    className?: string;

    /** Callback that is executed when audio stops recording */
    onStop?: (recordedData: ReactMicStopEvent) => void;

    /** Callback that is executed when chunk of audio is available */
    onData?: (recordedData: Blob) => void;

    /** defaults -> "audio/webm".  Set to "audio/wav" for WAV or "audio/mp3" for MP3 audio format (available in React-Mic-Gold) */
    mimeType?: 'audio/webm' | 'audio/wav';

    /** Sound wave color */
    strokeColor?: string;

    /** Background color */
    backgroundColor?: string;

    /** Specify 1 for mono, defaults -> 2 (stereo) */
    channelCount?: 1 | 2;

    /** Enables/disables echo cancellation, defaults -> false */
    echoCancellation?: boolean;

    /** Enables/disables auto gain control, defaults -> false */
    autoGainControl?: boolean;

    /** Enables/disables background noise suppression, defaults -> false */
    noiseSuppression?: boolean;
}
