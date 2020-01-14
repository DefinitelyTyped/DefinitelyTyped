// Type definitions for react-mic 12.4
// Project: https://hackingbeauty.github.io/react-mic
// Definitions by: mikaello <https://github.com/mikaello>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

/**
 * Record a user's voice and display as an oscillation (or frequency bars).
 */
export class ReactMic extends React.PureComponent<ReactMicProps> {}

export interface ReactMicProps {
    /** Set to true to begin recording */
    record?: boolean;

    /** Available in React-Mic-Plus upgrade only */
    pause?: boolean;

    visualSetting?: 'sinewave' | 'frequencyBars';

    className?: string;

    /** Callback that is executed when audio stops recording */
    onStop?: (recordedData: Blob) => void;

    /** Callback that is executed when chunk of audio is available */
    onData?: (recordedData: Blob) => void;

    /** Sound wave color */
    strokeColor?: string;

    /** Background color */
    backgroundColor?: string;
}
