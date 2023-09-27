// Type definitions for react-sound 1.2
// Project: https://github.com/leoasis/react-sound
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
//                 Paito Anderson <https://github.com/PaitoAnderson>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export interface ReactSoundProps {
    url: string;
    playStatus: "PLAYING" | "STOPPED" | "PAUSED";
    playFromPosition?: number | undefined;
    position?: number | undefined;
    volume?: number | undefined;
    playbackRate?: number | undefined;
    autoLoad?: boolean | undefined;
    loop?: boolean | undefined;
    onError?: (() => void) | undefined;
    onLoading?: (() => void) | undefined;
    onLoad?: (() => void) | undefined;
    onPlaying?: (() => void) | undefined;
    onPause?: (() => void) | undefined;
    onResume?: (() => void) | undefined;
    onStop?: (() => void) | undefined;
    onFinishedPlaying?: (() => void) | undefined;
    onBufferChange?: (() => void) | undefined;
}

declare const ReactSound: React.ComponentClass<ReactSoundProps>;

export default ReactSound;
