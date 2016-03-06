// Type definitions for SoundJS 0.6.0
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

/// <reference path="../createjs-lib/createjs-lib.d.ts" />
/// <reference path="../preloadjs/preloadjs.d.ts" />

declare module createjs {

    export class AbstractPlugin
        {
        // methods
        create(src: string, startTime: number, duration: number): AbstractSoundInstance;
        getVolume(): number;
        isPreloadComplete(src: string): boolean;
        isPreloadStarted(src: string): boolean;
        isSupported(): boolean;
        preload(loader: Object): void;
        register(loadItem: string, instances: number): Object;
        removeAllSounds(src: string): void;
        removeSound(src: string): void;
        setMute(value: boolean): boolean;
        setVolume(value: number): boolean;
        }

    export class AbstractSoundInstance extends EventDispatcher
        {
        constructor(src: string, startTime: number, duration: number, playbackResource: Object);

        // properties
        duration: number;
        loop: number;
        muted: boolean;
        pan: number;
        paused: boolean;
        playbackResource: Object;
        playState: string;
        position: number;
        src: string;
        uniqueId: number | string;
        volume: number;

        // methods
        destroy(): void;
        getDuration(): number;
        getLoop(): number;
        getMute(): boolean;
        getPan(): number;
        getPaused(): boolean;
        getPosition(): number;
        getVolume(): number;
        play(interrupt?: string | Object, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): AbstractSoundInstance;
        setDuration(value: number): AbstractSoundInstance;
        setLoop(value: number): void;
        setMute(value: boolean): AbstractSoundInstance;
        setPan(value: number): AbstractSoundInstance;
        setPlayback(value: Object): AbstractSoundInstance;
        setPosition(value: number): AbstractSoundInstance;
        setVolume(value: number): AbstractSoundInstance;
        stop(): AbstractSoundInstance;
        }

    export class FlashAudioLoader extends AbstractLoader
        {
        // properties
        flashId: string;

        // methods
        setFlash(flash: Object): void;
        }

    export class FlashAudioPlugin extends AbstractPlugin
        {
        // properties
        flashReady: boolean;
        showOutput: boolean;
        static swfPath: string;

        // methods
        static isSupported(): boolean;
        }

    export class FlashAudioSoundInstance extends AbstractSoundInstance
        {
        constructor(src: string, startTime: number, duration: number, playbackResource: Object);
        }

    /**
     * @deprecated - use FlashAudioPlugin
     */
    export class FlashPlugin {
        constructor();
        
        // properties
        static buildDate: string;
        flashReady: boolean;
        showOutput: boolean;
        static swfPath: string;
        static version: string;
        
        // methods
        create(src: string): AbstractSoundInstance;
        getVolume(): number;
        isPreloadStarted(src: string): boolean;
        static isSupported(): boolean;
        preload(src: string, instance: Object): void;
        register(src: string, instances: number): Object;
        removeAllSounds (): void;
        removeSound(src: string): void;
        setMute(value: boolean): boolean;
        setVolume(value: number): boolean;
    }
    
    export class HTMLAudioPlugin extends AbstractPlugin
        {
        constructor();
        
        // properties
        defaultNumChannels: number;
        enableIOS: boolean;     // deprecated
        static MAX_INSTANCES: number;
        
        // methods
        static isSupported(): boolean;
        }

    export class HTMLAudioSoundInstance extends AbstractSoundInstance
        {
        constructor(src: string, startTime: number, duration: number, playbackResource: Object);
        }

    export class HTMLAudioTagPool
        {

        }

    export class PlayPropsConfig
	{
	delay:number;
	duration:number;
	interrupt:string;
	loop:number;
	offset:number;
	pan:number;
	startTime:number;
	volume:number;
	static create( value:PlayPropsConfig|any ): PlayPropsConfig;
	set ( props:any ): PlayPropsConfig;
	}
    
    export class Sound extends EventDispatcher
        {
        // properties
        static activePlugin: Object;
        static alternateExtensions: any[];
        static defaultInterruptBehavior: string;
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
	static muted: boolean;
	static volume: number;
        static capabilities: any;
        
        // methods
        static createInstance(src: string): AbstractSoundInstance;
        static getCapabilities(): Object;
        static getCapability(key: string): number | boolean;
        static getMute(): boolean;
        static getVolume(): number;
        static initializeDefaultPlugins(): boolean;
        static isReady(): boolean;
        static loadComplete(src: string): boolean;
        static play(src: string, interrupt?: any, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): AbstractSoundInstance;
        static registerManifest(manifest: Object[], basePath: string): Object;
        static registerPlugins(plugins: any[]): boolean;
        static registerSound(src: string | Object, id?: string, data?: number | Object, basePath?: string): Object;
        static registerSounds(sounds: Object[], basePath?: string): Object[];
        static removeAllSounds(): void;
        static removeManifest(manifest: any[], basePath: string): Object;
        static removeSound(src: string | Object, basePath: string): boolean;
        static setMute(value: boolean): boolean;
        static setVolume(value: number): void;
        static stop(): void;
        
        // EventDispatcher mixins
        static addEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): Function;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): Object;
        static addEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): Object;
        static dispatchEvent(eventObj: Object | string | Event, target?: Object): boolean;
        static hasEventListener(type: string): boolean;
        static off(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static off(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static off(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        static off(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        static on(type: string, listener: (eventObj: Object) => boolean, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        static on(type: string, listener: (eventObj: Object) => void, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Function;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        static on(type: string, listener: { handleEvent: (eventObj: Object) => void; }, scope?: Object, once?: boolean, data?: any, useCapture?: boolean): Object;
        static removeAllEventListeners(type?: string): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => boolean, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: (eventObj: Object) => void, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => boolean; }, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: { handleEvent: (eventObj: Object) => void; }, useCapture?: boolean): void;
        static removeEventListener(type: string, listener: Function, useCapture?: boolean): void; // It is necessary for "arguments.callee"
        static toString(): string;
        static willTrigger(type: string): boolean;
    }

    export class SoundJS {
        static buildDate: string;
        static version: string;
    }

    export class WebAudioLoader
        {
        static context: AudioContext;
        }

    export class WebAudioPlugin extends AbstractPlugin
        {
        constructor();
        
        // properties
        static context: AudioContext;
        context: AudioContext;
        dynamicsCompressorNode: DynamicsCompressorNode;
        gainNode: GainNode;
        
        // methods
        static isSupported(): boolean;
        static playEmptySound(): void;
        }

    export class WebAudioSoundInstance extends AbstractSoundInstance
        {
        constructor(src: string, startTime: number, duration: number, playbackResource: Object);

        // properties
        static context: AudioContext;
        static destinationNode: AudioNode;
        gainNode: GainNode;
        panNode: PannerNode;
        sourceNode: AudioNode;
        }
}
