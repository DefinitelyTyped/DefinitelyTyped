// Type definitions for ovenplayer 0.10
// Project: https://github.com/airensoft/OvenPlayer
// Definitions by: Sangwon Oh <https://github.com/SangwonOh>
//                 Dygy <https://github.com/dygy/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
interface OvenPlayer {
    debug(debug: boolean): boolean;
    generateWebrtcUrls(sources: OvenPlayerWebRTCStream | OvenPlayerWebRTCStream[]): OvenPlayerSource[];
    create(container: string | HTMLDivElement, config: OvenPlayerConfig): OvenPlayerInstance;
    getPlayerByContainerId(containerId: string): OvenPlayerInstance | null;
    getPlayerByIndex(index: number): OvenPlayerInstance | null;
    getPlayerList(): OvenPlayerInstance[];
    removePlayer(player: OvenPlayerInstance): void;
}

interface OvenPlayerConfig {
    aspectRatio?: string;
    title?: string;
    waterMark?: object;
    autoStart?: boolean;
    autoFallback?: boolean;
    controls?: boolean;
    loop?: boolean;
    showBigPlayButton?: boolean;
    disableSeekUI?: boolean;
    showSeekControl?: boolean;
    seekControlInterval?: number;
    expandFullScreenUI?: boolean;
    mute?: boolean;
    timecode?: boolean;
    playbackRate?: number;
    playbackRates?: number[];
    currentProtocolOnly?: boolean;
    tracks?: object[];
    volume?: number;
    adTagUrl?: string;
    adClient?: 'googleima' | 'vast';
    playlist?: OvenPlayerPlayList;
    hidePlaylistIcon?: boolean;
    webrtcConfig?: object;
    hlsConfig?: any;
    dashConfig?: any;
    sources?: OvenPlayerSource[] | OvenPlayerPlayList;
    image?: string;
}

interface OvenPlayerWebRTCStream {
    host: string;
    application: string;
    stream: string;
    label?: string;
}

type OvenPlayerPlayList = OvenPlayerSource[][];

interface OvenPlayerSource {
    type: 'webrtc' | 'llhls' | 'hls' | 'lldash' | 'dash' | 'mp4';
    file: string;
    label?: string;
    framerate?: number;
    sectionStart?: number;
    sectionEnd?: number;
}

type OvenPlayerState =
    | 'idle'
    | 'complete'
    | 'paused'
    | 'playing'
    | 'error'
    | 'loading'
    | 'stalled'
    | 'adLoaded'
    | 'adPlaying'
    | 'adPaused'
    | 'adComplete';

interface OvenPlayerInstance {
    getVersion(): string;
    getConfig(): OvenPlayerConfig;
    getContainerElement(): HTMLDivElement;
    getContainerId(): string;
    getMseInstance(): object | null;
    getProviderName(): string | null;
    load(sources: OvenPlayerSource[] | OvenPlayerPlayList): void;
    getMediaElement(): HTMLVideoElement;
    getState(): OvenPlayerState;
    getBrowser(): OvenPlayerBrowser;
    setTimecodeMode(mode: boolean): void;
    isTimecodeMode(): boolean;
    getFramerate(): number;
    seekFrame(frame: number): void;
    getDuration(): number;
    getPosition(): number;
    getVolume(): number;
    setVolume(volume: number): void;
    getMute(): boolean;
    setMute(mute: boolean): void;
    play(): void;
    pause(): void;
    stop(): void;
    seek(position: number): void;
    getPlaybackRate(): number;
    setPlaybackRate(rate: number): void;
    getPlaylist(): OvenPlayerPlayList;
    getCurrentPlaylist(): number;
    setCurrentPlaylist(index: number): void;
    getSources(): OvenPlayerSource[] | OvenPlayerPlayList;
    getCurrentSource(): number;
    setCurrentSource(index: number): void;
    getQualityLevels(): OvenPlayerQuality[];
    getCurrentQuality(): number;
    setCurrentQuality(index: number): void;
    isAutoQuality(): boolean;
    setAutoQuality(auto: boolean): void;
    addCaption(track: Pick<OvenPlayerTrack, 'file' | 'kind' | 'label'>): void;
    getCaptionList(): OvenPlayerTrack[];
    getCurrentCaption(): string;
    setCaption?(track: OvenPlayerTrack): void;
    setCurrentCaption(index: string): void;
    removeCaption(index: string): void;
    showControls(show: boolean): void;
    toggleFullScreen(): void;
    on(eventName: string, callback: OvenPlayerCallbackFunction): void;
    once(eventName: string, callback: OvenPlayerCallbackFunction): void;
    off(eventName: string): void;
    remove(): void;
}

interface OvenPlayerQuality {
    bitrate: string;
    height: number;
    index: string;
    label: string;
    width: number;
}

type OvenPlayerCallbackFunction = (...args: any[]) => void;

interface OvenPlayerBrowser {
    browser: string;
    browserMajorVersion: number;
    browserVersion: string;
    cookies: boolean;
    mobile: boolean;
    os: string;
    osVersion: string;
    screen: string;
    ua: string;
}

interface OvenPlayerTrack {
    file: string;
    kind: string;
    label: string;
    data: string[];
    id: string;
    name: string;
}

export {
    OvenPlayerQuality,
    OvenPlayerCallbackFunction,
    OvenPlayerInstance,
    OvenPlayerSource,
    OvenPlayerPlayList,
    OvenPlayerWebRTCStream,
    OvenPlayerConfig,
    OvenPlayerState,
    OvenPlayerBrowser,
    OvenPlayerTrack,
};

declare const OvenPlayer: OvenPlayer;

export as namespace OvenPlayer;
export default OvenPlayer;
