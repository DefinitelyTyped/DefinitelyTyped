// Type definitions for react-audio-player 0.11
// Project: https://github.com/justinmc/react-audio-player
// Definitions by: Daniel Gil <https://github.com/dpgil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type Preload = '' | 'none' | 'metadata' | 'auto';

export interface ReactAudioPlayerProps {
    autoPlay?: boolean;
    children?: React.ReactNode;
    className?: string;
    controls?: boolean;
    controlsList?: string;
    crossOrigin?: string;
    id?: string;
    listenInterval?: number;
    loop?: boolean;
    muted?: boolean;
    preload?: Preload;
    src?: string;
    style?: React.CSSProperties;
    title?: string;
    volume?: number;
}

export class ReactAudioPlayer extends React.Component<ReactAudioPlayerProps, any> {}
