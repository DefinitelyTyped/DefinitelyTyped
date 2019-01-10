// Type definitions for JW Player V8.2
// Project: https://github.com/jwplayer/jwplayer/
// Definitions by: Martin Duparc <https://github.com/martinduparc>
//                 Tomer Kruvi <https://github.com/kutomer>
//                 Philipp Gürtler <https://github.com/philippguertler>
//                 Daniel McGraw <https://github.com/danielmcgraw>
//                 Benjamin Dobson <https://github.com/bpdsw>
//                 Be Birchall <https://gitnub.com/bebebebebe>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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

interface AdScheduleParam extends CallbackParam {
    tag: string;
    client: string;
    adbreaks: object[];
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

interface CaptionOptions {
    color: string;
    fontSize: number;
    fontFamily: string;
    fontOpacity: number;
    backgroundColor: string;
    backgroundOpacity: number;
    edgeStyle: string;
    windowColor: string;
    windowOpacity: number;
}

interface Level {
    bitrate: number;
    height: number;
    width: number;
    label: string;
}

interface QualityLevel {
    mode: 'auto' | 'manual';
    level: Level;
    reason: 'auto' | 'api' | 'initial choice';
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
	getContainer(): HTMLElement;
	getEnvironment(): Environment;
	getWidth(): number;
    getVisualQuality(): QualityLevel | undefined;
	load(playlist: any[]): void;
	load(playlist: string): void;
	on(event: 'adClick', callback: EventCallback<AdProgressParam>): void;
	once(event: 'adClick', callback: EventCallback<AdProgressParam>): void;
	off(event: 'adClick'): void;
	trigger(event: 'adClick', args: AdProgressParam): void;
	on(event: 'adCompanions', callback: EventCallback<AdCompanionsParam>): void;
	once(event: 'adCompanions', callback: EventCallback<AdCompanionsParam>): void;
	off(event: 'adCompanions'): void;
	trigger(event: 'adCompanions', args: AdCompanionsParam): void;
	on(event: 'adComplete', callback: EventCallback<AdProgressParam>): void;
	once(event: 'adComplete', callback: EventCallback<AdProgressParam>): void;
	off(event: 'adComplete'): void;
	trigger(event: 'adComplete', args: AdProgressParam): void;
	on(event: 'adSkipped', callback: EventCallback<AdProgressParam>): void;
	once(event: 'adSkipped', callback: EventCallback<AdProgressParam>): void;
	off(event: 'adSkipped'): void;
	trigger(event: 'adSkipped', args: AdProgressParam): void;
	on(event: 'adError', callback: EventCallback<AdErrorParam>): void;
	once(event: 'adError', callback: EventCallback<AdErrorParam>): void;
	off(event: 'adError'): void;
	trigger(event: 'adError', args: AdErrorParam): void;
	on(event: 'adBlock', callback: () => void): void;
	once(event: 'adBlock', callback: () => void): void;
	off(event: 'adBlock'): void;
	trigger(event: 'adBlock'): void;
	on(event: 'adRequest', callback: EventCallback<AdRequestParam>): void;
	once(event: 'adRequest', callback: EventCallback<AdRequestParam>): void;
	off(event: 'adRequest'): void;
	trigger(event: 'adRequest', args: AdRequestParam): void;
    on(event: 'adSchedule', callback: EventCallback<AdScheduleParam>): void;
    once(event: 'adSchedule', callback: EventCallback<AdScheduleParam>): void;
    off(event: 'adSchedule'): void;
    trigger(event: 'adSchedule', args: AdScheduleParam): void;
    on(event: 'adStarted', callback: EventCallback<AdStartedParam>): void;
	once(event: 'adStarted', callback: EventCallback<AdStartedParam>): void;
	off(event: 'adStarted'): void;
	trigger(event: 'adStarted', args: AdStartedParam): void;
	on(event: 'adImpression', callback: EventCallback<AdImpressionParam>): void;
	once(event: 'adImpression', callback: EventCallback<AdImpressionParam>): void;
	off(event: 'adImpression'): void;
	trigger(event: 'adImpression', args: AdImpressionParam): void;
	on(event: 'adPlay', callback: EventCallback<AdPlayParam>): void;
	once(event: 'adPlay', callback: EventCallback<AdPlayParam>): void;
	off(event: 'adPlay'): void;
	trigger(event: 'adPlay', args: AdPlayParam): void;
	on(event: 'adPause', callback: EventCallback<AdPlayParam>): void;
	once(event: 'adPause', callback: EventCallback<AdPlayParam>): void;
	off(event: 'adPause'): void;
	trigger(event: 'adPause', args: AdPlayParam): void;
	on(event: 'adTime', callback: EventCallback<AdTimeParam>): void;
	once(event: 'adTime', callback: EventCallback<AdTimeParam>): void;
	off(event: 'adTime'): void;
	trigger(event: 'adTime', args: AdTimeParam): void;
	on(event: 'meta', callback: EventCallback<MetadataParam>): void;
	once(event: 'meta', callback: EventCallback<MetadataParam>): void;
	off(event: 'meta'): void;
	trigger(event: 'meta', args: MetadataParam): void;
	on(event: 'audioTracks', callback: EventCallback<AudioTracksParam>): void;
	once(event: 'audioTracks', callback: EventCallback<AudioTracksParam>): void;
	off(event: 'audioTracks'): void;
	trigger(event: 'audioTracks', args: AudioTracksParam): void;
	on(event: 'audioTrackChanged', callback: EventCallback<AudioTrackChangedParam>): void;
	once(event: 'audioTrackChanged', callback: EventCallback<AudioTrackChangedParam>): void;
	off(event: 'audioTrackChanged'): void;
	trigger(event: 'audioTrackChanged', args: AudioTrackChangedParam): void;
	on(event: 'beforeComplete', callback: () => void): void;
	once(event: 'beforeComplete', callback: () => void): void;
	off(event: 'beforeComplete'): void;
	trigger(event: 'beforeComplete'): void;
	on(event: 'complete', callback: () => void): void;
	once(event: 'complete', callback: () => void): void;
	off(event: 'complete'): void;
	trigger(event: 'complete'): void;
	on(event: 'firstFrame', callback: EventCallback<FirstFrameParam>): void;
	once(event: 'firstFrame', callback: EventCallback<FirstFrameParam>): void;
	off(event: 'firstFrame'): void;
	trigger(event: 'firstFrame', args: FirstFrameParam): void;
	on(event: 'beforePlay', callback: () => void): void;
	once(event: 'beforePlay', callback: () => void): void;
	off(event: 'beforePlay'): void;
	trigger(event: 'beforePlay'): void;
	on(event: 'buffer', callback: EventCallback<BufferParam>): void;
	once(event: 'buffer', callback: EventCallback<BufferParam>): void;
	off(event: 'buffer'): void;
	trigger(event: 'buffer', args: BufferParam): void;
	on(event: 'bufferChange', callback: EventCallback<BufferChangeParam>): void;
	once(event: 'bufferChange', callback: EventCallback<BufferChangeParam>): void;
	off(event: 'bufferChange'): void;
	trigger(event: 'bufferChange', args: BufferChangeParam): void;
	on(event: 'captionsChanged', callback: EventCallback<CaptionsChangedParam>): void;
	once(event: 'captionsChanged', callback: EventCallback<CaptionsChangedParam>): void;
	off(event: 'captionsChanged'): void;
	trigger(event: 'captionsChanged', args: CaptionsChangedParam): void;
	on(event: 'captionsList', callback: EventCallback<CaptionsListParam>): void;
	once(event: 'captionsList', callback: EventCallback<CaptionsListParam>): void;
	off(event: 'captionsList'): void;
	trigger(event: 'captionsList', args: CaptionsListParam): void;
	on(event: 'controls', callback: EventCallback<ControlsParam>): void;
	once(event: 'controls', callback: EventCallback<ControlsParam>): void;
	off(event: 'controls'): void;
	trigger(event: 'controls', args: ControlsParam): void;
	on(event: 'displayClick', callback: () => void): void;
	once(event: 'displayClick', callback: () => void): void;
	off(event: 'displayClick'): void;
	trigger(event: 'displayClick'): void;
	on(event: 'error', callback: EventCallback<ErrorParam>): void;
	once(event: 'error', callback: EventCallback<ErrorParam>): void;
	off(event: 'error'): void;
	trigger(event: 'error', args: ErrorParam): void;
	on(event: 'fullscreen', callback: EventCallback<FullscreenParam>): void;
	once(event: 'fullscreen', callback: EventCallback<FullscreenParam>): void;
	off(event: 'fullscreen'): void;
	trigger(event: 'fullscreen', args: FullscreenParam): void;
	on(event: 'idle', callback: EventCallback<IdleParam>): void;
	once(event: 'idle', callback: EventCallback<IdleParam>): void;
	off(event: 'idle'): void;
	trigger(event: 'idle', args: IdleParam): void;
	on(event: 'levelsChanged', callback: EventCallback<LevelsChangedParam>): void;
	once(event: 'levelsChanged', callback: EventCallback<LevelsChangedParam>): void;
	off(event: 'levelsChanged'): void;
	trigger(event: 'levelsChanged', args: LevelsChangedParam): void;
	on(event: 'mute', callback: EventCallback<MuteParam>): void;
	once(event: 'mute', callback: EventCallback<MuteParam>): void;
	off(event: 'mute'): void;
	trigger(event: 'mute', args: MuteParam): void;
	on(event: 'volume', callback: EventCallback<VolumeParam>): void;
	once(event: 'volume', callback: EventCallback<VolumeParam>): void;
	off(event: 'volume'): void;
	trigger(event: 'volume', args: VolumeParam): void;
	on(event: 'pause', callback: EventCallback<PlayParam>): void;
	once(event: 'pause', callback: EventCallback<PlayParam>): void;
	off(event: 'pause'): void;
	trigger(event: 'pause', args: PlayParam): void;
	on(event: 'play', callback: EventCallback<PlayParam>): void;
	once(event: 'play', callback: EventCallback<PlayParam>): void;
	off(event: 'play'): void;
	trigger(event: 'play', args: PlayParam): void;
	on(event: 'playlist', callback: EventCallback<PlaylistParam>): void;
	once(event: 'playlist', callback: EventCallback<PlaylistParam>): void;
	off(event: 'playlist'): void;
	trigger(event: 'playlist', args: PlaylistParam): void;
	on(event: 'playlistItem', callback: EventCallback<PlaylistItemParam>): void;
	once(event: 'playlistItem', callback: EventCallback<PlaylistItemParam>): void;
	off(event: 'playlistItem'): void;
	trigger(event: 'playlistItem', args: PlaylistItemParam): void;
	on(event: 'playlistComplete', callback: () => void): void;
	once(event: 'playlistComplete', callback: () => void): void;
	off(event: 'playlistComplete'): void;
	trigger(event: 'playlistComplete'): void;
	on(event: 'ready', callback: EventCallback<ReadyParam>): void;
	once(event: 'ready', callback: EventCallback<ReadyParam>): void;
	off(event: 'ready'): void;
	trigger(event: 'ready'): void;
	on(event: 'resize', callback: EventCallback<ResizeParam>): void;
	once(event: 'resize', callback: EventCallback<ResizeParam>): void;
	off(event: 'resize'): void;
	trigger(event: 'resize', args: ResizeParam): void;
	on(event: 'visualQuality', callback: EventCallback<VisualQualityParam>): void;
	once(event: 'visualQuality', callback: EventCallback<VisualQualityParam>): void;
	off(event: 'visualQuality'): void;
	trigger(event: 'visualQuality', args: VisualQualityParam): void;
	on(event: 'levels', callback: EventCallback<LevelsParam>): void;
	once(event: 'levels', callback: EventCallback<LevelsParam>): void;
	off(event: 'levels'): void;
	trigger(event: 'levels', args: LevelsParam): void;
	on(event: 'seek', callback: EventCallback<SeekParam>): void;
	once(event: 'seek', callback: EventCallback<SeekParam>): void;
	off(event: 'seek'): void;
	trigger(event: 'seek', args: SeekParam): void;
    on(event: 'seeked', callback: () => void): void;
    once(event: 'seeked', callback: () => void): void;
    off(event: 'seeked'): void;
    trigger(event: 'seeked'): void
    on(event: 'setupError', callback: EventCallback<ErrorParam>): void;
	once(event: 'setupError', callback: EventCallback<ErrorParam>): void;
	off(event: 'setupError'): void;
	trigger(event: 'setupError', args: ErrorParam): void;
	on(event: 'remove', callback: () => void): void;
	once(event: 'remove', callback: () => void): void;
	off(event: 'remove'): void;
	trigger(event: 'remove'): void;
	on(event: 'time', callback: EventCallback<TimeParam>): void;
	once(event: 'time', callback: EventCallback<TimeParam>): void;
	off(event: 'time'): void;
	trigger(event: 'time', args: TimeParam): void;
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
    setCaptions(options: CaptionOptions): void;
	stop(): void;
}

interface JWPlayerStatic {
	(id: string): JWPlayer;
	key: string;
	version: string;
}

declare const jwplayer:JWPlayerStatic;
