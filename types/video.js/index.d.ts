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
		constructor(techId: string, options: any);
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
		options_: any;
		el_: HTMLElement;
		player_: any;
		isReady_: boolean;

    new(options: any, ready: () => void);
		setTimeout(fn: () => void, timeout?: number): string;
    dispose(): void;
    trigger(event: any): void;
    triggerReady(): void;
	}

	type TechType = Tech;

	interface Tech extends Component {
    new(options: any, ready: () => void);

    featuresFullscreenResize: boolean;
    featuresNativeTextTracks: boolean;
    featuresPlaybackRate: boolean;
    featuresProgressEvents: boolean;
    featuresTimeupdateEvents: boolean;
    featuresVolumeControl: boolean;

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
    remoteTextTrackEls(): HtmlTrackElementList;
    canPlayType(type: string): boolean;
    canPlaySource(srcObj: any, options: any): boolean;
    isTech(component: any): boolean;
    registerTech(name: string, tech: any): void;
	}

	interface MediaError {
		code: number;
		message: string;
		status?: any[];
	}

  class Track {
		id: string;
		kind: string;
		label: string;
		language: string;
	}

  class TextTrack extends Track {
		default: boolean;
		mode: string;
	}

  class AudioTrack extends Track {
		enabled: boolean;
	}

  class VideoTrack extends Track {
		selected: boolean;
	}

	class TrackList {
		addTrack(track: Track): void;
		removeTrack(track: Track): void;
	}

	class AudioTrackList extends TrackList {
    addTrack(track: AudioTrack): void;
	}

  class VideoTrackList extends TrackList {
    addTrack(track: VideoTrack): void;
	}

  class TextTrackList extends TrackList {
    addTrack(track: TextTrack): void;
	}

	interface HTMLTrackElement {
		track: TextTrack;
		readyState: HTMLTrackElementReadyState;
	}

	interface HTMLTrackElementReadyState {
		NONE: 0;
		LOADING: 1;
		LOADED: 2;
		ERROR: 3;
	}

  interface HtmlTrackElementList {
    tracks: HTMLTrackElement[];
  }

	function getComponent(name: string): Component;
	function getTech(name: string): TechType;
	function registerTech(name: string, tech: Tech): void;
	function createTimeRange(start?: number, end?: number): any;
  function mergeOptions(...args: any[]): any;

  const log: any;
  const browser: any;
  const url: any;
  const dom: any;
}
