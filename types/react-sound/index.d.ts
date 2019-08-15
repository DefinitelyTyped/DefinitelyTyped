// Type definitions for react-sound 1.2
// Project: https://github.com/leoasis/react-sound
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export enum PlayStatus {
    Playing = 'PLAYING',
    Stopped = 'STOPPED',
    Paused = 'PAUSED'
}

export interface ReactSoundProps {
    url: string;
    playStatus: PlayStatus;
    playFromPosition?: number;
    position?: number;
    volume?: number;
    playbackRate?: number;
    autoLoad?: boolean;
    loop?: boolean;
    onError?: () => void;
    onLoading?: () => void;
    onLoad?: () => void;
    onPlaying?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onStop?: () => void;
    onFinishedPlaying?: () => void;
    onBufferChange?: () => void;
}

declare const ReactSound: React.ComponentClass<ReactSoundProps>;

export default ReactSound;
