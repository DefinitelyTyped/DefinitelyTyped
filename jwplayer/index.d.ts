// Type definitions for JW Player 6.0
// Project: http://developer.longtailvideo.com/trac/
// Definitions by: Martin Duparc <https://github.com/martinduparc/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

interface JWPlayer {
	addButton(icon: string, label: string, handler: () => void, id: string): void;
	getAudioTracks(): any[];
	getBuffer(): number;
	getCaptionsList(): any[];
	getControls(): boolean;
	getCurrentAudioTrack(): number;
	getCurrentCaptions(): number;
	getCurrentQuality(): number;
	getDuration(): number;
	getHeight(): number;
	getFullscreen(): boolean;
	getMute(): boolean;
	getPlaylist(): any[];
	getPlaylistIndex(): number;
	getPlaylistItem(index?: number): any;
	getPosition(): number;
	getQualityLevels(): any[];
	getRenderingMode(): string;
	getSafeRegion(): any[];
	getState(): string;
	getVolume(): number;
	getWidth(): number;
	load(playlist: any[]): void;
	load(playlist: string): void;
	onAdClick(callback: (o: { tag: string; }) => void): void;
	onAdCompanions(callback: (o: {
		tag: string;
		companions: any[];
	}) => void): void;
	onAdComplete(callback: (o: { tag: string; }) => void): void;
	onAdError(callback: (o: {
		tag: string;
		message: string;
	}) => void): void;
	onAdImpression(callback: (o: { tag: string; }) => void): void;
	onAdPause(callback: (o: { tag: string; }) => void): void;
	onAdPlay(callback: (o: { tag: string; }) => void): void;
	onAdSkipped(callback: (o: { tag: string; }) => void): void;
	onAdTime(callback: (o: {
		tag: string;
		position: number;
		duration: number;
		sequence: number;
	}) => void): void;
	onAudioTracks(callback: (o: { levels: any[]; }) => void): void;
	onAudioTrackChange(callback: (o: { currentTrack: number; }) => void): void;
	onBeforeComplete(callback: () => void): void;
	onBeforePlay(callback: () => void): void;
	onBuffer(callback: (o: { oldstate: string }) => void): void;
	onBufferChange(callback: () => void): void;
	onCaptionsChange(callback: (o: { track: number; }) => void): void;
	onCaptionsList(callback: (o: { tracks: any[]; }) => void): void;
	onComplete(callback: () => void): void;
	onControls(callback: (o: { controls: boolean; }) => void): void;
	onDisplayClick(callback: () => void): void;
	onError(callback: (o: { message: string }) => void): void;
	onFullscreen(callback: (o: { fullscreen: boolean; }) => void): void;
	onIdle(callback: (o: { oldstate: string }) => void): void;
	onLevelsChanged(callback: (o: { currentQuality: number }) => void): void;
	onMeta(callback: (o: { metadata: any; }) => void): void;
	onMute(callback: (o: { mute: boolean; }) => void): void;
	onPause(callback: (o: { oldstate: string }) => void): void;
	onPlay(callback: (o: { oldstate: string }) => void): void;
	onPlaylist(callback: () => void): void;
	onPlaylistItem(callback: () => void): void;
	onPlaylistComplete(callback: () => void): void;
	onReady(callback: () => void): void;
	onResize(callback: () => void): void;
	onQualityChange(callback: () => void): void;
	onQualityLevels(callback: (o: { levels: any[] }) => void): void;
	onSeek(callback: (o: {
		position: number;
		offset: number;
	}) => void): void;
	onSetupError(callback: (o: {
		fallback: boolean;
		message: string;
	}) => void): void;
	onTime(callback: (o: {
		duration: number;
		position: number;
	}) => void): void;
	onVolume(callback: (o: { volume: number; }) => void): void;
	pause(state?: boolean): void;
	play(state?: boolean): void;
	playAd(tag: string): void;
	playlistItem(index: number): void;
	registerPlugin(id: string, target: string, jsPlugin: () => void, swfURL?: string): void;
	remove(): void;
	removeButton(id: string): void;
	resize(width: number, height: number): void;
	seek(position: number): void;
	setControls(controls: boolean): void;
	setCurrentAudioTrack(index: number): void;
	setCurrentCaptions(index: number): void;
	setCurrentQuality(index: number): void;
	setFullscreen(state: boolean): void;
	setMute(state?: boolean): void;
	setup(options: any): JWPlayer;
	setVolume(volume: number): void;
	stop(): void;
}

interface JWPlayerStatic {
	(id: string): JWPlayer;
	key: string;
	version: string;
}

declare var jwplayer:JWPlayerStatic;
