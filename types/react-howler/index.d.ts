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
    format?: string[] | undefined;
    playing?: boolean | undefined;
    mute?: boolean | undefined;
    loop?: boolean | undefined;
    preload?: boolean | undefined;
    volume?: number | undefined;
    onEnd?: (() => void) | undefined;
    onPause?: (() => void) | undefined;
    onPlay?: ((id: number) => void) | undefined;
    onVolume?: ((id: number) => void) | undefined;
    onStop?: ((id: number) => void) | undefined;
    onLoad?: (() => void) | undefined;
    onLoadError?: ((id: number) => void) | undefined;
    html5?: boolean | undefined;
}

declare class ReactHowler extends React.Component<Props> {
    stop(id?: number): void;

    duration(id?: number): number;

    seek(time?: number): number;

    howlerState(): HOWLER_STATE;

    howler: Howl;
}

export default ReactHowler;
