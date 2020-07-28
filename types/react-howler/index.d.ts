// Type definitions for react-howler 3.7
// Project: https://github.com/thangngoc89/react-howler
// Definitions by: Danijel Maksimovic <https://github.com/maksimovicdanijel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as React from 'react';
import { Howl } from 'howler';

declare enum HOWLER_STATE {
    UNLOADED = 'unloaded',
    LOADING = 'loading',
    LOADED = 'loaded',
}

interface Props {
    src: string | string[];
    format?: string[];
    playing?: boolean;
    mute?: boolean;
    loop?: boolean;
    preload?: boolean;
    volume?: number;
    onEnd?: () => void;
    onPause?: () => void;
    onPlay?: (id: number) => void;
    onVolume?: (id: number) => void;
    onStop?: (id: number) => void;
    onLoad?: () => void;
    onLoadError?: (id: number) => void;
    html5?: boolean;
}

declare class ReactHowler extends React.Component<Props> {
    stop(id?: number): void;

    duration(id?: number): number;

    seek(time?: number): number;

    howlerState(): HOWLER_STATE;

    howler: Howl;
}

export default ReactHowler;
