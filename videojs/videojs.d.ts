// Type definitions for Video.js
// Project: https://github.com/zencoder/video-js
// Definitions by: Vincent Bortone <https://github.com/vbortone/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

// The Video.js API allows you to interact with the video through Javascript, whether the browser is playing the video through HTML5 video, Flash, or any other supported playback technologies.

interface VideoJSOptions {
	techOrder?: string[];
	html5?: Object;
	width?: number;
	height?: number;
	defaultVolume?: number;
	children?: Object;
}

interface VideoJSSource {
	type: string;
	src: string;
}

interface VideoJSPlayer {
	play(): VideoJSPlayer;
	pause(): VideoJSPlayer;
	paused(): boolean;
	src(newSource: string): VideoJSPlayer;
	src(newSource: VideoJSSource): VideoJSPlayer;
	src(newSource: VideoJSSource[]): VideoJSPlayer;
	currentTime(seconds: number): VideoJSPlayer;
	currentTime(): number;
	duration(): number;
	buffered(): TimeRanges;
	bufferedPercent(): number;	
	volume(percentAsDecimal: number): TimeRanges;
	volume(): number;
	width(): number;	
	width(pixels: number): VideoJSPlayer;
	height(): number;
	height(pixels: number): VideoJSPlayer;
	size(width: number, height: number): VideoJSPlayer;
	requestFullScreen(): VideoJSPlayer;
	cancelFullScreen(): VideoJSPlayer;
	ready(callback: () => void ): void;
	on(eventName: string, callback: () => void ): void;
	off(eventName: string, callback: () => void ): void;
}

interface VideoJSStatic {
	(id: any, options?: VideoJSOptions, ready?: () => void): VideoJSPlayer;
}

declare var _V_:VideoJSStatic;
