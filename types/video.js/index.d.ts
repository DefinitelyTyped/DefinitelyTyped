// Type definitions for Video.js 6.2
// Project: https://github.com/videojs/video.js
// Definitions by: Vincent Bortone <https://github.com/vbortone>
//                 Simon Clériot <https://github.com/scleriot>
//                 Sean Bennett <https://github.com/SWBennett06>
//                 Christoph Wagner <https://github.com/IgelCampus>
//                 Ciprian Florescu <https://github.com/cipacda>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The Video.js API allows you to interact with the video through
// Javascript, whether the browser is playing the video through HTML5
// video, Flash, or any other supported playback technologies.

declare function videojs(id: any, options?: videojs.PlayerOptions, ready?: () => void): videojs.Player;
export = videojs;
export as namespace videojs;

declare namespace videojs {
	interface PlayerOptions {
		techOrder?: string[];
		sourceOrder?: boolean;
		html5?: any;
		width?: number;
		height?: number;
		defaultVolume?: number;
		children?: string[];
		loop?: boolean;
		muted?: boolean;
		controls?: boolean;
		src?: string;
		autoplay?: boolean;
		preload?: string;
		sources?: Source[];
		aspectRatio?: string;
		fluid?: boolean;
		language?: string;
		notSupportedMessage?: string;
		plugins?: any;
	}

	interface Source {
		type: string;
		src: string;
	}

	class Player {
		constructor(techId: string, options: any): Player;
		play(): Player;
		pause(): Player;
		paused(): boolean;
		src(newSource: string | Source | Source[]): Player;
		currentTime(seconds: number): Player;
		currentTime(): number;
		duration(): number;
		buffered(): TimeRanges;
		bufferedPercent(): number;
		volume(percentAsDecimal: number): TimeRanges;
		volume(): number;
		width(): number;
		width(pixels: number): Player;
		height(): number;
		height(pixels: number): Player;
		size(width: number, height: number): Player;
		requestFullScreen(): Player;
		cancelFullScreen(): Player;
		requestFullscreen(): Player;
		exitFullscreen(): Player;
		ready(callback: (this: Player) => void): Player;
		on(eventName: string, callback: (eventObject: Event) => void): void;
		off(eventName?: string, callback?: (eventObject: Event) => void): void;
		dispose(): void;
		addRemoteTextTrack(options: {}): HTMLTrackElement;
		removeRemoteTextTrack(track: HTMLTrackElement): void;
		poster(val?: string): string | Player;
		playbackRate(rate?: number): number;
	}

	interface Component {
		protected options_: any;
		protected el_: any;
		protected player_: any;
		protected isReady_: boolean;

		setTimeout(fn: () => void, timeout?: number): string;
    dispose(): void;
    trigger(event: any): void;
    triggerReady(): void;
	}

	interface Tech extends Component {
		new(options: any, ready: () => void): Tech;
		getTech(name: string): Tech;

    setPoster(poster: any): void;
    manualProgressOn(): void;
    manualProgressOff(): void;
    trackProgress(event: any): void;
    onDurationChange(event: any): void;
    buffered(): any;
    bufferedPercent(): number;
    stopTrackingProgress(): void;
    manualTimeUpdatesOn(): void;
    manualTimeUpdatesOff(): void;
    trackCurrentTime(): void;
    stopTrackingCurrentTime(): void;
    clearTracks(types: string|string[]): void;
    cleanupAutoTextTracks(): void;
    reset(): void;
    error(error: MediaError): MediaError;
    played(): any;
    setCurrentTime(seconds: number): void;
    initTrackListeners(): void;
    addWebVttScript_(): void;
    emulateTextTracks(): void;
    addTextTrack(kind: string, label: string, language: string): TextTrack;
    createRemoteTextTrack(options: any): HTMLTrackElement;
    addRemoteTextTrack(options?: any, manualCleanup?: boolean): HTMLTrackElement;
    removeRemoteTextTrack(track: TextTrack): void;
    getVideoPlaybackQuality(): any;
    playsinline(): boolean;
    setPlaysinline(playsinline: boolean): void;
    canPlayType(type: string): boolean;

    static canPlayType(type: string): boolean;
    static canPlaySource(srcObj: any, options: any): boolean;
    static isTech(component: any): boolean;
    static registerTech(name: string, tech: any): void;
    static getTech(name: string): Tech;
	}

	interface MediaError {
		code: number;
		message: string;
		status?: any[];
	}

	interface Track {
		id: string;
		kind: string;
		label: string;
		language: string;
	}

  interface TextTrack extends Track {
		default: boolean;
		mode: string;
	}

	interface HTMLTrackElement {
		track: TextTrack;
		readyState:  HTMLTrackElementReadyState;
	}

	interface HTMLTrackElementReadyState {
		NONE: 0,
		LOADING: 1,
		LOADED: 2,
		ERROR: 3,
	}

	export function getComponent(name: string): Component;
	export function getTech(name: string): Tech;
	export function registerTech(name: string, tech: Tech): void;
	export function createTimeRange(start?: number, end?: number): any;
	const log: any;
}
