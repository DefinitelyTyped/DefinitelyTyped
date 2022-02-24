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

export interface PropTyoesXHR {
  method?: string | undefined;
  headers?: Record<string, string> | undefined;
  withCredentials?: boolean | undefined;
}

export interface PropTypes {
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
    rate?: number | undefined;
    format?: string[] | undefined;
    xhr?: PropsXHR | undefined;
    onSeek?: ((id: number) => void) | undefined;
    onPlayError?: ((id: number) => void) | undefined;
}

declare class ReactHowler extends React.Component<PropTypes> {
    stop(id?: number): void;

    duration(id?: number): number;

    seek(time?: number): number;

    howlerState(): HOWLER_STATE;

    howler: Howl;
}

export default ReactHowler;
