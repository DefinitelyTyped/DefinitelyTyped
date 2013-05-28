// Type definitions for JW Player
// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.
// Project: http://developer.longtailvideo.com/trac/
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

interface JWPlayer {
	addButton(icon: string, label: string, handler: () => void, id: string): void;
	getBuffer(): number;
	getCaptionsList(): any[];
	getControls(): bool;
	getCurrentCaptions(): number;
	getCurrentQuality(): number;
	getDuration(): number;
	getHeight(): number;
	getFullscreen(): bool;
	getMute(): bool;
	getPlaylist(): any[];
	getPlaylistItem(index: number): any;
	getPosition(): number;
	getQualityLevels(): any[];
	getRenderingMode(): string;
	getSafeRegion(): any[];
	getState(): string;
	getVolume(): number;
	getWidth(): number;
	load(playlist: any): void;
	load(playlist: string): void;
	onBeforePlay(callback: () => void): void;
	onBuffer(callback: () => void): void;
	onBufferChange(callback: () => void): void;
	onCaptionsChange(callback: () => void): void;
	onCaptionsList(callback: () => void): void;
	onComplete(callback: () => void): void;
	onControls(callback: () => void): void;
	onDisplayClick(callback: () => void): void;
	onError(callback: () => void): void;
	onFullscreen(callback: () => void): void;
	onIdle(callback: () => void): void;
	onMeta(callback: () => void): void;
	onMute(callback: () => void): void;
	onPlay(callback: () => void): void;
	onPlaylist(callback: () => void): void;
	onPlaylistItem(callback: () => void): void;
	onPlaylistComplete(callback: () => void): void;
	onReady(callback: () => void): void;
	onResize(callback: () => void): void;
	onQualityChange(callback: () => void): void;
	onQualityLevels(callback: () => void): void;
	onSeek(callback: () => void): void;
	onTime(callback: () => void): void;
	onVolume(callback: () => void): void;
	pause(): void;
	play(): void;
	playlistItem(index: number): void;
	removeButton(id: string): void;
	resize(width: number, height: number): void;
	seek(position: number): void;
	setControls(controls: bool): void;
	setCurrentCaptions(index: number): void;
	setCurrentQuality(index: number): void;
	setMute(state: bool): void;
	setup(options: any): JWPlayer;
	setVolume(volume: number): void;
	stop(): void;
}

interface JWPlayerStatic {
	(id: string): JWPlayer;
}

declare var jwplayer:JWPlayerStatic;
