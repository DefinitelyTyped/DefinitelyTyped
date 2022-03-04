// Type definitions for ovenplayer 0.10
// Project: https://github.com/airensoft/OvenPlayer
// Definitions by: Sangwon Oh <https://github.com/SangwonOh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare namespace OvenPlayer {
    namespace Config {
        interface Source {
            type: 'webrtc' | 'llhls' | 'hls' | 'lldash' | 'dash' | 'mp4';
            file: string;
            label?: string;
            framerate?: number;
            sectionStart?: number;
            sectionEnd?: number;
        }

        type PlayList = Source[][];
    }

    interface Config {
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
        playlist?: Config.PlayList;
        hidePlaylistIcon?: boolean;
        webrtcConfig?: object;
        hlsConfig?: any;
        dashConfig?: any;
        sources?: Config.Source[] | Config.PlayList;
    }

    function create(container: string | HTMLDivElement, config: Config): OvenPlayerInstance;
}

declare namespace OvenPlayerInstance {
    type CallbackFunction = (...args: any[]) => void;
}

interface OvenPlayerInstance {
    getVersion(): string;
    getConfig(): OvenPlayer.Config;
    load(sources: OvenPlayer.Config.Source[] | OvenPlayer.Config.PlayList): void;
    getMediaElement(): HTMLVideoElement;
    getState(): string;
    getBrowser(): object;
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
    getPlaylist(): OvenPlayer.Config.PlayList;
    getCurrentPlaylist(): number;
    setCurrentPlaylist(index: number): void;
    getSources(): OvenPlayer.Config.Source[] | OvenPlayer.Config.PlayList;
    getCurrentSource(): number;
    setCurrentSource(index: number): void;
    getQualityLevels(): object[];
    getCurrentQuality(): number;
    setCurrentQuality(index: number): void;
    isAutoQuality(): boolean;
    setAutoQuality(auto: boolean): void;
    getCaptionList(): object[];
    getCurrentCaption(): number;
    setCurrentCaption(index: number): void;
    setCaption(caption: object): void;
    removeCaption(index: number): void;
    showControls(show: boolean): void;
    remove(): void;
    on(eventName: string, callback: OvenPlayerInstance.CallbackFunction): void;
    off(eventName: string): void;
}

export default OvenPlayer;
