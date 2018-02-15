// Type definitions for JW Player V8.0
// Project: http://developer.longtailvideo.com/trac/
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Tomer Kruvi <https://github.com/kutomer>
//                 Philipp Gürtler <https://github.com/philippguertler>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// JW Player is the leading HTML5 & Flash video player, optimized for mobile and the desktop. Easy enough for beginners, advanced enough for pros.

interface Version {
    version: string;
    major: number;
    minor: number
}

interface Browser {
    chrome: boolean;
    edge: boolean;
    facebook: boolean;
    firefox: boolean;
    ie: boolean;
    msie: boolean;
    safari: boolean;
    version: Version;
}

interface OS {
    android: boolean;
    androidNative: boolean;   // Android native browser
    iOS: boolean;
    mobile: boolean;
    mac: boolean;
    iPad: boolean;
    iPhone: boolean;
    windows: boolean;
    version: Version;
}

interface Features {
    flash: boolean;
    flashVersion: number;
    iframe: boolean;
}

interface Environment{
    Browser: Browser;
    OS: OS;
    Features: Features;
}

interface CallbackParam {
}

interface AdProgressParam extends CallbackParam {
    client: 'vast' | 'googima';
    creativetype: string;
    tag: string;
}

interface AdCompanionsParam extends CallbackParam {
    companions: any[];
    tag: string;
}

interface AdErrorParam extends CallbackParam {
    message: string;
    tag: string;
}

interface AdRequestParam extends CallbackParam {
    adposition: 'pre' | 'mid' | 'post';
    client: 'vast' | 'googima';
    offset: 'pre' | 'mid' | 'post';
    tag: string;
}

interface AdImpressionParam extends CallbackParam {
    adposition: 'pre' | 'mid' | 'post';
    adsystem: string;
    adtitle: string;
    clickThroughUrl: string;
    client: 'vast' | 'googima';
    creativetype: string;
    linear: string;
    mediafile: any;
    tag: string;
    vastversion: number;
    wrapper: any[];
}

interface AdStartedParam extends CallbackParam {
    creativetype: string;
    tag: string;
}

interface AdPlayParam extends CallbackParam {
    creativetype: string;
    newstate: string;
    oldstate: string;
    tag: string;
}

interface BufferParam extends CallbackParam {
    newstate: string;
    oldstate: string;
    reason: 'loading' | 'complete' | 'stalled' | 'error';
}

interface BufferChangeParam extends CallbackParam {
    duration: number;
    bufferPercent: number;
    position: number;
    metadata: any;
}

interface AdTimeParam extends CallbackParam {
    client: 'vast' | 'googima';
    creativetype: string;
    duration: number;
    position: number;
    sequence: number;
    tag: string;
}

interface AudioTracksParam extends CallbackParam {
    levels: any[];
}

interface CaptionsChangedParam extends CallbackParam {
    currentTrack: number;
}

interface CaptionsListParam extends CallbackParam {
    tracks: any[];
}

interface AudioTrackChangedParam extends CallbackParam {
    currentTrack: number;
}

interface MetadataParam extends CallbackParam {
    metadata: any;
}

interface ControlsParam extends CallbackParam {
    controls: boolean;
}

interface ErrorParam extends CallbackParam {
    message: string;
}

interface FullscreenParam extends CallbackParam {
    fullscreen: boolean;
}

interface IdleParam extends CallbackParam {
    oldstate: 'buffering' | 'playing' | 'paused';
}

interface LevelsChangedParam extends CallbackParam {
    currentQuality: number;
}

interface MuteParam extends CallbackParam {
    mute: boolean;
}

interface VolumeParam extends CallbackParam {
    volume: boolean;
}

interface PlayParam extends CallbackParam {
    oldstate: 'buffering' | 'playing';
    viewable: 0 | 1;
}

interface PlaylistParam extends CallbackParam {
    playlist: any[];
}

interface PlaylistItemParam extends CallbackParam {
    index: number;
    item: any;
}

interface ReadyParam extends CallbackParam {
    setupTime: number;
    viewable: 0 | 1;
}

interface ResizeParam extends CallbackParam {
    width: number;
    height: number;
}

interface VisualQualityParam extends CallbackParam {
    mode: string;
    label: string;
    reason: string;
}

interface LevelsParam extends CallbackParam {
    width: number;
    levels: any[];
}

interface SeekParam extends CallbackParam {
    position: number;
    offset: number;
}

interface TimeParam extends CallbackParam {
    duration: number;
    position: number;
    viewable: 0 | 1;
}

interface FirstFrameParam extends CallbackParam {
    loadTime: number;
    viewable: 0 | 1;
}

interface EventCallback<T extends CallbackParam> {
    (param: T): void;
}

interface Region {
    x: 0; // x and y will always be 0 according to https://developer.jwplayer.com/jw-player/docs/javascript-api-reference/#jwplayergetsaferegion
    y: 0;
    width: number;
    height: number;
}

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
	getSafeRegion(): Region;
	getState(): string;
	getVolume(): number;
    getEnvironment(): Environment;
	getWidth(): number;
	load(playlist: any[]): void;
	load(playlist: string): void;
	on(event: 'adClick', callback: EventCallback<AdProgressParam>): void;
	on(event: 'adCompanions', callback: EventCallback<AdCompanionsParam>): void;
	on(event: 'adComplete', callback: EventCallback<AdProgressParam>): void;
	on(event: 'adSkipped', callback: EventCallback<AdProgressParam>): void;
	on(event: 'adError', callback: EventCallback<AdErrorParam>): void;
	on(event: 'adBlock', callback: () => void): void;
	on(event: 'adRequest', callback: EventCallback<AdRequestParam>): void;
	on(event: 'adStarted', callback: EventCallback<AdStartedParam>): void;
	on(event: 'adImpression', callback: EventCallback<AdImpressionParam>): void;
	on(event: 'adPlay', callback: EventCallback<AdPlayParam>): void;
	on(event: 'adPause', callback: EventCallback<AdPlayParam>): void;
	on(event: 'adTime', callback: EventCallback<AdTimeParam>): void;
	on(event: 'meta', callback: EventCallback<MetadataParam>): void;
	on(event: 'audioTracks', callback: EventCallback<AudioTracksParam>): void;
	on(event: 'audioTrackChanged', callback: EventCallback<AudioTrackChangedParam>): void;
	on(event: 'beforeComplete', callback: () => void): void;
	on(event: 'complete', callback: () => void): void;
	on(event: 'firstFrame', callback: EventCallback<FirstFrameParam>): void;
	on(event: 'beforePlay', callback: () => void): void;
	on(event: 'buffer', callback: EventCallback<BufferParam>): void;
	on(event: 'bufferChange', callback: EventCallback<BufferChangeParam>): void;
	on(event: 'captionsChanged', callback: EventCallback<CaptionsChangedParam>): void;
	on(event: 'captionsList', callback: EventCallback<CaptionsListParam>): void;
	on(event: 'controls', callback: EventCallback<ControlsParam>): void;
	on(event: 'displayClick', callback: () => void): void;
	on(event: 'error', callback: EventCallback<ErrorParam>): void;
	on(event: 'fullscreen', callback: EventCallback<FullscreenParam>): void;
	on(event: 'idle', callback: EventCallback<IdleParam>): void;
	on(event: 'levelsChanged', callback: EventCallback<LevelsChangedParam>): void;
	on(event: 'mute', callback: EventCallback<MuteParam>): void;
	on(event: 'volume', callback: EventCallback<VolumeParam>): void;
	on(event: 'pause', callback: EventCallback<PlayParam>): void;
	on(event: 'play', callback: EventCallback<PlayParam>): void;
	on(event: 'playlist', callback: EventCallback<PlaylistParam>): void;
	on(event: 'playlistItem', callback: EventCallback<PlaylistItemParam>): void;
	on(event: 'playlistComplete', callback: () => void): void;
	on(event: 'ready', callback: EventCallback<ReadyParam>): void;
	on(event: 'resize', callback: EventCallback<ResizeParam>): void;
	on(event: 'visualQuality', callback: EventCallback<VisualQualityParam>): void;
	on(event: 'levels', callback: EventCallback<LevelsParam>): void;
	on(event: 'seek', callback: EventCallback<SeekParam>): void;
	on(event: 'setupError', callback: EventCallback<ErrorParam>): void;
	on(event: 'remove', callback: () => void): void;
	on(event: 'time', callback: EventCallback<TimeParam>): void;
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

declare const jwplayer:JWPlayerStatic;
