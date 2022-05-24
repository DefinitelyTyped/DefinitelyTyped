// Type definitions for react-howler 5.2
// Project: https://github.com/thangngoc89/react-howler
// Definitions by: Danijel Maksimovic <https://github.com/maksimovicdanijel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.2

import * as React from 'react';
import { Howl, HowlOptions, HowlCallback, HowlErrorCallback } from 'howler';

declare enum HOWLER_STATE {
    UNLOADED = 'unloaded',
    LOADING = 'loading',
    LOADED = 'loaded',
}

export { HowlCallback, HowlErrorCallback };

export interface PropTypes {
    src: HowlOptions['src'];
    preload?: boolean | undefined;
    playing?: boolean | undefined;
    loop?: HowlOptions['loop'];
    mute?: HowlOptions['mute'];
    volume?: HowlOptions['volume'];
    rate?: HowlOptions['rate'];
    html5?: HowlOptions['html5'];
    format?: HowlOptions['format'];
    xhr?: HowlOptions['xhr'] | undefined;
    onPlay?: HowlCallback | undefined;
    onPause?: HowlCallback | undefined;
    onVolume?: HowlCallback | undefined;
    onStop?: HowlCallback | undefined;
    onLoad?: HowlCallback | undefined;
    onLoadError?: HowlErrorCallback | undefined;
    onEnd?: HowlCallback | undefined;
    onSeek?: HowlCallback | undefined;
    onPlayError?: HowlErrorCallback | undefined;
}

declare class ReactHowler extends React.Component<PropTypes> {
    stop(id?: number): void;

    duration(id?: number): number;

    seek(time?: number): number;

    howlerState(): HOWLER_STATE;

    howler: Howl;
}

export default ReactHowler;
