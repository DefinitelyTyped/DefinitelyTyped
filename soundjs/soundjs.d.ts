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

module createjs {
    export class FlashPlugin {
        // properties
        static BASE_PATH: string;
        static capabilities: Object;
        showOutput: bool;

        // methods
        create(src: string): SoundInstance;
		preload(src: string, instance: Object): void;
        static generateCapabilities(): void;
        static isSupported(): bool;
		isPreloadStarted(src: string): bool;
        register(src: string, instances: Number): Object;
		setVolume(value: Number): bool;
		getVolume(): Number;
		setMute(isMuted: bool): Boolean;
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
        static isSupported(): bool;
        register(src: string, instances: number): Object;
		isPreloadStarted(src: string): bool;
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
        static isSupported(): bool;
		setVolume(value: Number): bool;
		getVolume(): number;
        register(src: string, instances: number): Object;
		isPreloadStarted(src: string): bool;
		preload(src: string, instance: Object): void;
		isPreloadComplete(src : string): bool;
		removeFromPreload(src: string);
		setMute(value: number): bool;
		toString(): string;
    }

    export class SoundInstance {
        constructor (src: string, owner: string, flash: string);

        // properties
        muted: bool;
        owner: HTMLAudioPlugin;
		offset: number;
        paused: bool;
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
        mute(isMuted: bool): bool;
        pause(): bool;
        play(interrupt: string, delay: number, offset: number, loop: number, volume: number, pan: number): void;
        resume(): bool;
        setPan(value: number): number;
        setPosition(value: number): void;
        setVolume(value: number): bool;
        stop(): bool;

        // events
        complete: () => any;
        loop: () => any;
        failed: () => any;
        interrupted: () => any;
		succeeded: () => any;
        ready: () => any;

		// EventDispatcher mixins
		addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
		addEventListener(type: string, listener: (eventObj: Object) => bool): Object;
		removeEventListener(type: string, listener: (eventObj: Function) => bool): void;
		removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
		removeAllEventListeners(type: string): void;
		dispatchEvent(eventObj: string, target: Object): bool;
		dispatchEvent(eventObj: Object, target: Object): bool;
		hasEventListener(type: string): bool;
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
        static muted: bool;
        static PLAY_FAILED: string;
        static PLAY_FINISHED: string;
        static PLAY_INITED: string;
        static PLAY_INTERRUPTED: string;
        static PLAY_SUCCEEDED: string;
		static SUPPORTED_EXTENSIONS: Array;
		static EXTENSION_MAP: Object;
		static defaultInterruptBehavior: string;

        // methods
        static checkPlugin(initializeDefault: bool): bool;
		static createInstance(src: string): SoundInstance;
        static getCapabilities(): Object;
        static getCapability(key: string): any;    //HERE can return string | number | bool
        static getInstanceById(uniqueId: string): SoundInstance;
		static getMute(): number;
        static getMasterVolume(): number;
        static getSrcFromId(value: string): string;
		static getVolume(): number;
        static isReady(): bool;
        static pause(id: string): void;
        static play(src: string, interrupt?: string, delay?: number, offset?: number, loop?: number, volume?: number, pan?: number): SoundInstance;
        static registerPlugin(plugin: Object): bool;
        static registerPlugins(plugins: Object[]): bool;
		static registerSound(src: Object, id: string, data: Object, preload?: bool): Object;
		static registerManifest(manifest: Array);
        static resume(id: string): void;
        static setMasterVolume(value: number): bool;
        static setMute(isMuted: bool, id: string): bool;
        static setVolume(value: number, id?: string): bool;
        static stop(): bool;

		// events
		loadComplete: () => any;

		// EventDispatcher mixins
		addEventListener(type: string, listener: (eventObj: Object) => bool): Function;
		addEventListener(type: string, listener: (eventObj: Object) => bool): Object;
		removeEventListener(type: string, listener: (eventObj: Function) => bool): void;
		removeEventListener(type: string, listener: (eventObj: Object) => bool): void;
		removeAllEventListeners(type: string): void;
		dispatchEvent(eventObj: string, target: Object): bool;
		dispatchEvent(eventObj: Object, target: Object): bool;
		hasEventListener(type: string): bool;
    }

	export class BrowserDetect {
		// properties
		static isFirefox: bool;
		static isOpera: bool;
		static isChrome: bool;
		static isIOS: bool;
		static isAndroid: bool;
		static isBlackberry: bool;

		// methods
		static init();
	}
}
