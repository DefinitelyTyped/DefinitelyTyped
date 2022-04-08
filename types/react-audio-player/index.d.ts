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
    onAbort?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onCanPlay?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onCanPlayThrough?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onEnded?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onError?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onListen?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onPause?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onPlay?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onSeeked?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onVolumeChanged?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    onLoadedMetadata?: (event: React.SyntheticEvent<HTMLAudioElement, Event>) => void;
    preload?: Preload;
    src?: string;
    style?: React.CSSProperties;
    title?: string;
    volume?: number;
}

export default class ReactAudioPlayer extends React.Component<ReactAudioPlayerProps, any> {
    audioEl: HTMLAudioElement;
    clearListenTrack(): void;
    setListenTrack(): void;
    updateVolume(volume: number): void;
}
