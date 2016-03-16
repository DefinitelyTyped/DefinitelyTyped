// Type definitions for howler.js v1.1.29
// Project: https://github.com/goldfire/howler.js
// Definitions by: Pedro Casaubon <https://github.com/xperiments/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class HowlerGlobal {
    mute(): HowlerGlobal;
    unmute(): HowlerGlobal;
    volume(): number;
    volume(volume: number): HowlerGlobal;
    codecs(extension: string): boolean;
    iOSAutoEnable: boolean;
}

declare var Howler: HowlerGlobal;

interface IHowlSoundSpriteDefinition {
    [name: string]: number[];
}

declare type HowlPos3d = [number, number, number]|[number, number, number, number];

interface IHowlProperties {
    autoplay?: boolean;
    buffer?: boolean;
    duration?: number;
    format?: string;
    loop?: boolean;
    sprite?: IHowlSoundSpriteDefinition;
    src?: string;
    pos3d?: HowlPos3d;
    volume?: number;
    urls?: string[];
    rate?: number;
    model?: 'equalpower'|'HRTF';
    onend?: Function;
    onload?: Function;
    onloaderror?: Function;
    onpause?: Function;
    onplay?: Function;
}

interface Howl {
    autoplay: Boolean;
    buffer: Boolean;
    format: string;
    rate: number;
    model: string;
    onend: Function;
    onload: Function;
    onloaderror: Function;
    onpause: Function;
    onplay: Function;
    load(): Howl;
    play(sprite?: string, callback?: (soundId: number) => void): Howl;
    play(callback?: (soundId: number) => void): Howl;
    pause(soundId?: number): Howl;
    stop(soundId?: number): Howl;
    mute(soundId?: number): Howl;
    unmute(soundId?: number): Howl;
    fade(from: number, to: number, duration: number, callback?: Function, soundId?: number): Howl;
    loop(): boolean;
    loop(loop: boolean): Howl;
    pos(position?: number, soundId?: number): number;
    pos3d(x: number, y: number, z: number, soundId?: number): any;
    sprite(definition?: IHowlSoundSpriteDefinition): IHowlSoundSpriteDefinition;
    volume(): number;
    volume(volume?: number, soundId?: number): Howl;
    urls(): string[];
    urls(urls: string[]): Howl;
    on(event: string, listener?: Function): Howl;
    off(event: string, listener?: Function): Howl;
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
