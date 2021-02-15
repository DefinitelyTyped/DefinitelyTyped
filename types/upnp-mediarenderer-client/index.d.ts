// Type definitions for upnp-mediarenderer-client 1.4
// Project: https://github.com/thibauts/node-upnp-mediarenderer-client#readme
// Definitions by: Alexander Knöbel <https://github.com/alexkn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class MediaRendererClient {
    constructor(url: string);
    play(callback?: (err: Error, result: any) => void): void;
    pause(callback?: (err: Error, result: any) => void): void;
    stop(callback?: (err: Error, result: any) => void): void;
    seek(seconds: number, callback?: (err: Error, result: any) => void): void;
    load(url: string, options: any, callback?: (err: Error, result: any) => void): void;
    getVolume(callback?: (err: Error, result: number) => void): void;
    setVolume(volume: number, callback?: (err: Error, result: any) => void): void;
    getPosition(callback: (err: Error, result: any) => void): void;
    getDuration(callback: (err: Error, result: any) => void): void;

    on(
        event: 'status' | 'loading' | 'playing' | 'paused' | 'stopped' | 'speedChanged',
        callback: (value: any) => void,
    ): void;
}

export = MediaRendererClient;
