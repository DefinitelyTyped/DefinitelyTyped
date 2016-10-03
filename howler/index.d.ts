// Type definitions for howler.js v2.0.0
// Project: https://github.com/goldfire/howler.js
// Definitions by: Pedro Casaubon <https://github.com/xperiments/>, Todd Dukart <https://github.com/tdukart/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface HowlerGlobal {
    mute(muted: boolean): void;
    volume(volume?: number): number;
    codecs(ext: string): boolean;
    unload(): void;
    usingWebAudio: boolean;
    noAudio: boolean;
    mobileAudioEnable: boolean;
    autoSuspend: boolean;
    ctx: boolean;
    masterGain: boolean;
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
    format?: string[];
    onload?: Function;
    onloaderror?: Function;
    onplay?: Function;
    onend?: Function;
    onpause?: Function;
    onstop?: Function;
    onmute?: Function;
    onvolume?: Function;
    onrate?: Function;
    onseek?: Function;
    onfade?: Function;
}

interface Howl {
    play(spriteOrId?: string|number): number; // .play() is not chainable; the other methods are
    pause(id?: number): Howl;
    stop(id?: number): Howl;
    mute(muted?: boolean, id?: number): Howl;
    volume(volume?: number, id?: number): Howl;
    fade(from: number, to: number, duration: number, id?: number): Howl;
    rate(rate?: number, id?: number): Howl;
    seek(seek?: number, id?: number): Howl;
    loop(loop?: boolean, id?: number): Howl;
    state(): string;
    playing(id?: number): boolean;
    duration(id?: number): number;
    on(event: string, callback: Function, id?: number): Howl;
    once(event: string, callback: Function, id?: number): Howl;
    off(event: string, callback?: Function, id?: number): Howl;
    load(): void;
    unload(): void;
}

interface HowlStatic {
    new (properties: IHowlProperties): Howl;
}

declare let Howl: HowlStatic;

declare module "howler" {
    export let Howler: HowlerGlobal;
    export let Howl: HowlStatic;
}
