// Type definitions for howler.js 2.0
// Project: https://github.com/goldfire/howler.js
// Definitions by: Pedro Casaubon <https://github.com/xperiments/>, Todd Dukart <https://github.com/tdukart/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HowlerGlobal {
    mute(muted: boolean): void;
    volume(): number;
    volume(volume: number): this;
    codecs(ext: string): boolean;
    unload(): void;
    usingWebAudio: boolean;
    noAudio: boolean;
    mobileAutoEnable: boolean;
    autoSuspend: boolean;
    ctx: AudioContext;
    masterGain: GainNode;
}

declare let Howler: HowlerGlobal;

interface HowlSoundSpriteDefinition {
    [name: string]: [number, number] | [number, number, boolean];
}

interface HowlProperties {
    src: string | string[];
    volume?: number;
    html5?: boolean;
    loop?: boolean;
    preload?: boolean;
    autoplay?: boolean;
    mute?: boolean;
    sprite?: HowlSoundSpriteDefinition;
    rate?: number;
    pool?: number;
    format?: string[] | string;
    onload?(): void;
    onloaderror?(soundId: number, error: any): void;
    onplay?(soundId: number): void;
    onend?(soundId: number): void;
    onpause?(soundId: number): void;
    onstop?(soundId: number): void;
    onmute?(soundId: number): void;
    onvolume?(soundId: number): void;
    onrate?(soundId: number): void;
    onseek?(soundId: number): void;
    onfade?(soundId: number): void;
}

interface Howl {
    play(spriteOrId?: string | number): number; // .play() is not chainable; the other methods are
    pause(id?: number): this;
    stop(id?: number): this;

    mute(): boolean;
    mute(muted: boolean, id?: number): this;

    volume(): number;
    volume(idOrSetVolume: number): this | number;
    volume(volume: number, id: number): this;

    fade(from: number, to: number, duration: number, id?: number): this;

    pos(x: number, y: number, z: number, id?: number): this;

    rate(): number;
    rate(idOrSetRate: number): this | number;
    rate(rate: number, id: number): this;

    seek(seek?: number, id?: number): this | number;
    loop(loop?: boolean, id?: number): this;
    playing(id?: number): boolean;
    duration(id?: number): number;

    on(event: 'load', callback: () => void, id?: number): this;
    on(event: 'loaderror', callback: (soundId: number, error: any) => void, id?: number): this;
    on(event: 'play' | 'end' | 'pause' | 'stop' | 'mute' | 'volume' | 'rate' | 'seek' | 'fade', callback: (soundId: number) => void, id?: number): this;
    on(event: string, callback: Function, id?: number): this;

    once(event: 'load', callback: () => void, id?: number): this;
    once(event: 'loaderror', callback: (soundId: number, error: any) => void, id?: number): this;
    once(event: 'play' | 'end' | 'pause' | 'stop' | 'mute' | 'volume' | 'rate' | 'seek' | 'fade', callback: (soundId: number) => void, id?: number): this;
    once(event: string, callback: Function, id?: number): this;

    off(event: string, callback?: Function, id?: number): this;

    state(): 'unloaded' | 'loading' | 'loaded';
    load(): void;
    unload(): void;
}

interface HowlStatic {
    new (properties: HowlProperties): Howl;
}

declare let Howl: HowlStatic;
