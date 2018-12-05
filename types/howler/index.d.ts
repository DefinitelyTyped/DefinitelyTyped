// Type definitions for howler.js v2.0.5
// Project: https://github.com/goldfire/howler.js
// Definitions by: Pedro Casaubon <https://github.com/xperiments>, Todd Dukart <https://github.com/tdukart>, Alexander Leon <https://github.com/alien35>, Nicholas Higgins <https://github.com/nicholashza> 
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
    stereo(pan: number): this;
    pos(x: number, y: number, z: number): this | void;
    orientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): this | void;
}

declare let Howler: HowlerGlobal;

interface IHowlSoundSpriteDefinition {
    [name: string]: [number, number]|[number, number, boolean]
}

interface IHowlProperties {
    src: string|string[];
    volume?: number;
    html5?: boolean;
    loop?: boolean;
    preload?: boolean;
    autoplay?: boolean;
    mute?: boolean;
    sprite?: IHowlSoundSpriteDefinition;
    rate?: number;
    pool?: number;
    format?: string[] | string;
    xhrWithCredentials?: boolean;
    onload?: () => void;
    onloaderror?: (soundId: number, error: any) => void;
    onplay?: (soundId: number) => void;
    onplayerror?: (soundId: number, error: any) => void;
    onend?: (soundId: number) => void;
    onpause?: (soundId: number) => void;
    onstop?: (soundId: number) => void;
    onmute?: (soundId: number) => void;
    onvolume?: (soundId: number) => void;
    onrate?: (soundId: number) => void;
    onseek?: (soundId: number) => void;
    onfade?: (soundId: number) => void;
}

interface Howl {
    play(spriteOrId?: string|number): number; // .play() is not chainable; the other methods are
    pause(id?: number): this;
    stop(id?: number): this;

    mute(): boolean;
    mute(muted: boolean, id?: number): this;

    volume(): number;
    volume(idOrSetVolume: number): this | number;
    volume(volume: number, id: number): this;

    fade(from: number, to: number, duration: number, id?: number): this;

    rate(): number;
    rate(idOrSetRate: number): this | number;
    rate(rate: number, id: number): this;

    seek(seek?: number, id?: number): this | number;
    loop(loop?: boolean, id?: number): this;
    playing(id?: number): boolean;
    duration(id?: number): number;


    on(event: 'load', callback: () => void, id?: number): this;
    on(event: 'loaderror', callback: (soundId: number, error: any) => void, id?: number): this;
    on(event: 'play', callback: (soundId: number) => void, id?: number): this;
    on(event: 'playerror', callback: (soundId: number, error: any) => void, id?: number): this;
    on(event: 'end', callback: (soundId: number) => void, id?: number): this;
    on(event: 'pause', callback: (soundId: number) => void, id?: number): this;
    on(event: 'stop', callback: (soundId: number) => void, id?: number): this;
    on(event: 'mute', callback: (soundId: number) => void, id?: number): this;
    on(event: 'volume', callback: (soundId: number) => void, id?: number): this;
    on(event: 'rate', callback: (soundId: number) => void, id?: number): this;
    on(event: 'seek', callback: (soundId: number) => void, id?: number): this;
    on(event: 'fade', callback: (soundId: number) => void, id?: number): this;
    on(event: string, callback: Function, id?: number): this;

    once(event: 'load', callback: () => void, id?: number): this;
    once(event: 'loaderror', callback: (soundId: number, error: any) => void, id?: number): this;
    once(event: 'play', callback: (soundId: number) => void, id?: number): this;
    once(event: 'playerror', callback: (soundId: number, error: any) => void, id?: number): this;
    once(event: 'end', callback: (soundId: number) => void, id?: number): this;
    once(event: 'pause', callback: (soundId: number) => void, id?: number): this;
    once(event: 'stop', callback: (soundId: number) => void, id?: number): this;
    once(event: 'mute', callback: (soundId: number) => void, id?: number): this;
    once(event: 'volume', callback: (soundId: number) => void, id?: number): this;
    once(event: 'rate', callback: (soundId: number) => void, id?: number): this;
    once(event: 'seek', callback: (soundId: number) => void, id?: number): this;
    once(event: 'fade', callback: (soundId: number) => void, id?: number): this;
    once(event: string, callback: Function, id?: number): this;

    off(event: string, callback?: Function, id?: number): this;

    state(): 'unloaded' | 'loading' | 'loaded';
    load(): void;
    unload(): void;
    stereo(pan: number, id?: number): this | void;
    pos(x: number, y: number, z: number, id?: number): this | void;
    orientation(x: number, y: number, z: number, xUp: number, yUp: number, zUp: number): this | void;
    pannerAttr(o: {coneInnerAngle?: number,
        coneOuterAngle?: number, coneOuterGain?: number,
        distanceModel: 'inverse' | 'linear', maxDistance: number,
        panningModel: 'HRTF' | 'equalpower', refDistance: number, rolloffFactor: number}, id?: number): this;
}

interface HowlStatic {
    new (properties: IHowlProperties): Howl;
}

declare let Howl: HowlStatic;

declare module "howler" {
    export let Howler: HowlerGlobal;
    export let Howl: HowlStatic;
}
