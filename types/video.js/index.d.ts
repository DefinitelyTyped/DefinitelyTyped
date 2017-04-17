// Type definitions for Video.js 5.16
// Project: https://github.com/zencoder/video-js
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
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
		html5?: any;
		width?: number;
		height?: number;
		defaultVolume?: number;
		children?: string[];
		controls?: boolean;
		src?: string;
		autoplay?: boolean;
		preload?: string;
	}

	interface Source {
		type: string;
		src: string;
	}

	interface Player {
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
		ready(callback: (this: Player) => void ): Player;
		on(eventName: string, callback: (eventObject: Event) => void ): void;
		off(eventName?: string, callback?: (eventObject: Event) => void ): void;
		dispose(): void;
		addRemoteTextTrack(options: {}): HTMLTrackElement;
		removeRemoteTextTrack(track: HTMLTrackElement): void;
		poster(val?: string): string | Player;
		playbackRate(rate?: number): number;
	}
}
