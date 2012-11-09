// Type definitions for SoundJS 0.3
// Project: http://www.createjs.com/#!/SoundJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

module createjs {
    export class FlashPlugin {
        // properties
        static BASE_PATH: string;
        static capabilities: Object;
        showOutput: bool;

        // methods
        create(src: string): SoundInstance;
        static generateCapabilities(): void;
        static isSupported(): bool;
        register(src: string, instances: number): Object;
    }

    export class HTMLAudioPlugin {
        // properties
        static capabilities: Object;
        static MAX_INSTANCES: number;

        // methods
        create(src: string): SoundInstance;
        static generateCapabilities(): void;
        static isSupported(): bool;
        register(src: string, instances: number): Object;
    }

    export class SoundInstance {
        constructor (src: string);

        // properties
        muted: bool;
        owner: HTMLAudioPlugin;
        paused: bool;
        playState: string;
        src: string;
        uniqueId: any;   //HERE string or number

        // methods
        getDuration(): number;
        getPan(): number;
        getPosition(): number;
        getVolume(): number;
        mute(isMuted: bool): bool;
        pause(): bool;
        play(interrupt: string, delay: number, offset: number, loop: number, volume: number, pan: number): void;
        resume(): bool;
        setPan(value: number): number;
        setPosition(value: number): void;
        setVolume(value: number): bool;
        stop(): bool;

        // events
        onComplete: () => any;
        onLoop: () => any;
        onPlayFailed: () => any;
        onPlayInterrupted: () => any;
        onReady: () => any;
    }


    export class SoundJS {
        // properties
        static activePlugin: Object;
        static AUDIO_TIMEOUT: number;
        static DELIMITER: string;
        static INTERRUPT_ANY: string;
        static INTERRUPT_EARLY: string;
        static INTERRUPT_LATE: string;
        static INTERRUPT_NONE: string;
        static muted: bool;
        static PLAY_FAILED: string;
        static PLAY_FINISHED: string;
        static PLAY_INITED: string;
        static PLAY_INTERRUPTED: string;
        static PLAY_SUCCEEDED: string;

        // methods
        static checkPlugin(initializeDefault: bool): bool;
        static getCapabilities(): Object;
        static getCapability(key: string): any;    //HERE can return string | number | bool
        static getInstanceById(uniqueId: string): SoundInstance;
        static getMasterVolume(): number;
        static getSrcFromId(value: string): string;
        static isReady(): bool;
        static pause(id: string): void;
        static play(value: string, interrupt?: string, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): SoundInstance;
        static registerPlugin(plugin: Object): bool;
        static registerPlugins(plugins: Object[]): bool;
        static resume(id: string): void;
        static setMasterVolume(value: number): bool;
        static setMute(isMuted: bool, id: string): bool;
        static setVolume(value: number, id?: string): bool;
        static stop(id?: string): bool;
    }
}
