// Type definitions for SoundJS 0.4
// Project: http://www.createjs.com/#!/SoundJS
// Definitions by: Pedro Ferreira <https://bitbucket.org/drk4>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/*
    Copyright (c) 2012 Pedro Ferreira
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

declare module createjs {
    export class FlashPlugin {
        // properties
        static BASE_PATH: string;
        static capabilities: Object;
        showOutput: boolean;

        // methods
        create(src: string): SoundInstance;
		preload(src: string, instance: Object): void;
        static generateCapabilities(): void;
        static isSupported(): boolean;
		isPreloadStarted(src: string): boolean;
        register(src: string, instances: Number): Object;
		setVolume(value: Number): boolean;
		getVolume(): Number;
		setMute(isMuted: boolean): Boolean;
		toString(): string;

		// Flash API
		unregisterPreloadInstance(flashId: string): void;
		unregisterSoundInstance(flashId: string): void;
		flashLog(data: string): void;
		handleSoundEvent(flashId: string, method: string): void;
		handlePreloadEvent(flashId: string, method: string): void;
		handleEvent(method: string): void;
		handleErrorEvent(error: string): void;
    }

    export class HTMLAudioPlugin {
        // properties
        static capabilities: Object;
        static MAX_INSTANCES: number;
		static AUDIO_READY: string;
		static AUDIO_ENDED: string;
		static AUDIO_ERROR: string;
		static AUDIO_STALLED: string;
		capabilities:Object;
		defaultNumChannels: number;

        // methods
        create(src: string): SoundInstance;
        static generateCapabilities(): void;
        static isSupported(): boolean;
        register(src: string, instances: number): Object;
		isPreloadStarted(src: string): boolean;
		preload(src: string, instance: Object): void;
		toString(): string;
    }

	export class WebAudioPlugin {
        // properties
        static capabilities: Object;
        static MAX_INSTANCES: number;
		static AUDIO_READY: string;
		static AUDIO_ENDED: string;
		static AUDIO_ERROR: string;
		static AUDIO_STALLED: string;
		arrayBuffers: ArrayBuffer[];
		capabilities:Object;
		defaultNumChannels: number;
		dynamicsCompressorNode: Object;
		gainNode: Object;
		volume: number;
		context: any;
		WebAudioLoader(src: string, owner: Object): Function;

        // methods
        create(src: string): SoundInstance;
        static generateCapabilities(): void;
        static isSupported(): boolean;
		setVolume(value: Number): boolean;
		getVolume(): number;
        register(src: string, instances: number): Object;
		isPreloadStarted(src: string): boolean;
		preload(src: string, instance: Object): void;
		isPreloadComplete(src : string): boolean;
		removeFromPreload(src: string);
		setMute(value: number): boolean;
		toString(): string;
    }

    export class SoundInstance {
        constructor (src: string, owner: string, flash: string);

        // properties
        muted: boolean;
        owner: HTMLAudioPlugin;
		offset: number;
        paused: boolean;
		delay: number;
		pan: number;
		duration: number;
        playState: string;
		delayTimeoutId: number;
        src: string;
        uniqueId: any;   //HERE string or number
		volume: number;

        // methods
        getDuration(): number;
        getPan(): number;
        getPosition(): number;
        getVolume(): number;
        mute(isMuted: boolean): boolean;
        pause(): boolean;
        play(interrupt: string, delay: number, offset: number, loop: number, volume: number, pan: number): void;
        resume(): boolean;
        setPan(value: number): number;
        setPosition(value: number): void;
        setVolume(value: number): boolean;
        stop(): boolean;

        // events
        complete: () => any;
        loop: () => any;
        failed: () => any;
        interrupted: () => any;
		succeeded: () => any;
        ready: () => any;

		// EventDispatcher mixins
		addEventListener(type: string, listener: (eventObj: Object) => boolean): Function;
		addEventListener(type: string, listener: (eventObj: Object) => boolean): Object;
		removeEventListener(type: string, listener: (eventObj: Function) => boolean): void;
		removeEventListener(type: string, listener: (eventObj: Object) => boolean): void;
		removeAllEventListeners(type: string): void;
		dispatchEvent(eventObj: string, target: Object): boolean;
		dispatchEvent(eventObj: Object, target: Object): boolean;
		hasEventListener(type: string): boolean;
    }


    export class Sound {
        // properties
        static activePlugin: Object;
        static AUDIO_TIMEOUT: number;
        static DELIMITER: string;
        static INTERRUPT_ANY: string;
        static INTERRUPT_EARLY: string;
        static INTERRUPT_LATE: string;
        static INTERRUPT_NONE: string;
        static muted: boolean;
        static PLAY_FAILED: string;
        static PLAY_FINISHED: string;
        static PLAY_INITED: string;
        static PLAY_INTERRUPTED: string;
        static PLAY_SUCCEEDED: string;
		static SUPPORTED_EXTENSIONS: Array;
		static EXTENSION_MAP: Object;
		static defaultInterruptBehavior: string;

        // methods
        static checkPlugin(initializeDefault: boolean): boolean;
		static createInstance(src: string): SoundInstance;
        static getCapabilities(): Object;
        static getCapability(key: string): any;    //HERE can return string | number | bool
        static getInstanceById(uniqueId: string): SoundInstance;
		static getMute(): boolean;
        static getMasterVolume(): number;
        static getSrcFromId(value: string): string;
		static getVolume(): number;
        static isReady(): boolean;
        static pause(id: string): void;
        static play(src: string, interrupt?: string, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): SoundInstance;
        static registerPlugin(plugin: Object): boolean;
        static registerPlugins(plugins: Object[]): boolean;
		static registerSound(src: Object, id: string, data: Object, preload?: boolean): Object;
		static registerManifest(manifest: Array);
        static resume(id: string): void;
        static setMasterVolume(value: number): boolean;
        static setMute(isMuted: boolean): boolean;
        static setVolume(value: number, id?: string): boolean;
        static stop(): boolean;

		// events
		loadComplete: () => any;

		// EventDispatcher mixins
		addEventListener(type: string, listener: (eventObj: Object) => boolean): Function;
		addEventListener(type: string, listener: (eventObj: Object) => boolean): Object;
		removeEventListener(type: string, listener: (eventObj: Function) => boolean): void;
		removeEventListener(type: string, listener: (eventObj: Object) => boolean): void;
		removeAllEventListeners(type: string): void;
		dispatchEvent(eventObj: string, target: Object): boolean;
		dispatchEvent(eventObj: Object, target: Object): boolean;
		hasEventListener(type: string): boolean;
    }

	export class BrowserDetect {
		// properties
		static isFirefox: boolean;
		static isOpera: boolean;
		static isChrome: boolean;
		static isIOS: boolean;
		static isAndroid: boolean;
		static isBlackberry: boolean;

		// methods
		static init();
	}
}
