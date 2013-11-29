// Type definitions for SoundJS 0.5.0
// Project: http://www.createjs.com/#!/SoundJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

// Library documentation : http://www.createjs.com/Docs/SoundJS/modules/SoundJS.html

/// <reference path="../createjs/createjs.d.ts" />

declare module createjs {
    export class FlashPlugin {
        constructor();
        
        // properties
        static BASE_PATH: string;
        static buildDate: string;
        static capabilities: Object;
        flashReady: boolean;
        showOutput: boolean;
        static version: string;
        
        // methods
        create(src: string): SoundInstance;
        flashLog(data: string): void;
        getVolume(): number;
        handleErrorEvent(error: string): void;
        handleEvent(method: string): void;
        handlePreloadEvent(flashId: string, method: string): void;
        handleSoundEvent(flashId: string, method: string): void;
        isPreloadStarted(src: string): boolean;
        static isSupported(): boolean;
        preload(src: string, instance: Object, basePath: string): void;
        register(src: string, instances: number): Object;
        registerPreloadInstance(flashId: string, instance: any): void;
        registerSoundInstance(flashId: string, instance: any): void;
        removeAllSounds (): void;
        removeSound(src: string): void;
        setMute(value: boolean): boolean;
        setVolume(value: number): boolean;
        unregisterPreloadInstance(flashId: string): void;
        unregisterSoundInstance(flashId: string, instance: any): void;
        toString(): string;
    }
    
    export class HTMLAudioPlugin {
        constructor();
        
        // properties
        static AUDIO_ENDED: string;
        static AUDIO_ERROR: string;
        static AUDIO_READY: string;
        static AUDIO_SEEKED: string;
        static AUDIO_STALLED: string;
        defaultNumChannels: number;
        enableIOS: boolean;
        static MAX_INSTANCES: number;
        
        // methods
        create(src: string): SoundInstance;
        isPreloadStarted(src: string): boolean;
        static isSupported(): boolean;
        preload(src: string, instance: Object, basePath: string): void;
        register(src: string, instances: number): Object;
        removeAllSounds(): void;
        removeSound(src: string): void;
        toString(): string;
    }
    
    export class Sound {
        // properties
        static activePlugin: Object;
        static defaultInterruptBehavior: string;
        static DELIMITER: string;
        static EXTENSION_MAP: Object;
        static INTERRUPT_ANY: string;
        static INTERRUPT_EARLY: string;
        static INTERRUPT_LATE: string;
        static INTERRUPT_NONE: string;
        static PLAY_FAILED: string;
        static PLAY_FINISHED: string;
        static PLAY_INITED: string;
        static PLAY_INTERRUPTED: string;
        static PLAY_SUCCEEDED: string;
        static SUPPORTED_EXTENSIONS: string[];
        
        
        // methods
        static createInstance(src: string): SoundInstance;
        static getCapabilities(): Object;
        static getCapability(key: string): any;    //HERE can return string | number | bool;
        static getMute(): boolean;
        static getVolume(): number;
        static initializeDefaultPlugins(): boolean;
        static isReady(): boolean;
        static loadComplete(src: string): boolean;
        static play(src: string, interrupt?: any, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): SoundInstance;
        static registerManifest(manifest: any[], basePath: string): Object;
        static registerPlugin(plugin: Object): boolean;
        static registerPlugins(plugins: any[]): boolean;
        static registerSound(src: string, id?: string, data?: Object, preload?: boolean, basePath?: string): Object;
        static registerSound(src: Object, id?: string, data?: Object, preload?: boolean, basePath?: string): Object;
        static removeAllSounds(): void;
        static removeManifest(manifest: any[]): Object;
        static removeSound(src: string): boolean;
        static removeSound(src: Object): boolean;
        static setMute(value: boolean): boolean;
        static setVolume(value: number): void;
        static stop(): void;
        static toString(): string;
        
        // EventDispatcher mixins
        static addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        static dispatchEvent(eventObj: Object, target?: Object): boolean;
        static dispatchEvent(eventObj: string, target?: Object): boolean;
        static dispatchEvent(eventObj: Event, target?: Object): boolean;
        static hasEventListener(type: string): boolean;
        static off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        static on(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        static on(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        static removeAllEventListeners(type?: string): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;

    }
    
    export class SoundInstance extends EventDispatcher {
        constructor(src: string, owner: Object);
        
        // properties
        gainNode: any;
        pan: number;
        panNode: any;
        playState: string;
        sourceNode: any;
        uniqueId: any;   //HERE string or number
        volume: number;

        // methods
        getDuration(): number;
        getMute(): boolean;
        getPan(): number;
        getPosition(): number;
        getVolume(): number;
        pause(): boolean;
        play(interrupt?: string, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): void;
        play(interrupt?: Object, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): void;
        resume(): boolean;
        setMute(value: boolean): boolean;
        setPan(value: number): number;
        setPosition(value: number): void;
        setVolume(value: number): boolean;
        stop(): boolean;
        
    }
    
    export class SoundJS {
        static buildDate: string;
        static version: string;
    }
    
    export class WebAudioPlugin {
        constructor();
        
        // properties
        context: any;
        dynamicsCompressorNode: any;
        gainNode: any;
        
        // methods
        addPreloadResults(src: string): boolean;
        create(src: string): SoundInstance;
        getVolume(): number;
        isPreloadComplete(src: string): boolean;
        isPreloadStarted(src: string): boolean;
        static isSupported(): boolean;
        playEmptySound(): void;
        register(src: string, instances: number): Object;
        removeAllSounds(src: string): void;
        /**
         * @deprecated
         */
        removeFromPreload(src: string): void;
        removeSound(src: string): void;
        setMute(value: boolean): boolean;
        setVolume(value: number): boolean;
        toString(): string;
    }
}
