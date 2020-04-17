import PlayerState from './constants/PlayerStates';
import { EventType } from './eventNames';

export interface EmitterType {
    trigger: (eventName: string, event: object) => void;
}

export interface Options {
    width?: number;
    height?: number;
    videoId?: string;
    playerVars?: {
        autoplay?: 0 | 1,
        cc_lang_pref?: string,
        cc_load_policy?: 1,
        color?: 'red' | 'white',
        controls?: 0 | 1,
        disablekb?: 0 | 1,
        enablejsapi?: 0 | 1,
        end?: number,
        fs?: 0 | 1,
        hl?: string,
        iv_load_policy?: 1 | 3,
        list?: string,
        listType?: 'playlist' | 'search' | 'user_uploads',
        loop?: 0 | 1,
        modestbranding?: 1,
        origin?: string,
        playlist?: string,
        playsinline?: 0 | 1,
        rel?: 0 | 1,
        start?: number,
        widget_referrer?: string,
    };
    events?: {
        [eventType in EventType]?: (event: CustomEvent) => void
    };
}

export interface IframeApiType {
    Player: {new(elementId: string, options: Options): YouTubePlayer};
}

/**
 * @see https://developers.google.com/youtube/iframe_api_reference
 */
export interface YouTubePlayer {
    addEventListener(event: string, listener: (event: CustomEvent) => void): void;
    destroy(): void;
    getAvailablePlaybackRates(): ReadonlyArray<number>;
    getAvailableQualityLevels(): ReadonlyArray<string>;
    getCurrentTime(): number;
    getDuration(): number;
    getIframe(): HTMLIFrameElement;
    getOption(module: string, option: string): any;
    getOptions(): string[];
    getOptions(module: string): object;
    setOption(module: string, option: string, value: any): void;
    setOptions(): void;
    cuePlaylist(
        playlist: string | ReadonlyArray<string>,
        index?: number,
        startSeconds?: number,
        suggestedQuality?: string,
    ): void;
    cuePlaylist(playlist: {
        listType: string,
        list?: string,
        index?: number,
        startSeconds?: number,
        suggestedQuality?: string,
    }): void;
    loadPlaylist(
        playlist: string | ReadonlyArray<string>,
        index?: number,
        startSeconds?: number,
        suggestedQuality?: string,
    ): void;
    loadPlaylist(playlist: {
        listType: string,
        list?: string,
        index?: number,
        startSeconds?: number,
        suggestedQuality?: string,
    }): void;
    getPlaylist(): ReadonlyArray<string>;
    getPlaylistIndex(): number;
    getPlaybackQuality(): string;
    getPlaybackRate(): number;
    getPlayerState(): PlayerState;
    getVideoEmbedCode(): string;
    getVideoLoadedFraction(): number;
    getVideoUrl(): string;
    getVolume(): number;
    cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    cueVideoById(video: {
        videoId: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string,
    }): void;
    cueVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
    cueVideoByUrl(video: {
        mediaContentUrl: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string,
    }): void;
    loadVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
    loadVideoByUrl(video: {
        mediaContentUrl: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string,
    }): void;
    loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
    loadVideoById(video: {
        videoId: string,
        startSeconds?: number,
        endSeconds?: number,
        suggestedQuality?: string,
    }): void;
    isMuted(): boolean;
    mute(): void;
    nextVideo(): void;
    pauseVideo(): void;
    playVideo(): void;
    playVideoAt(index: number): void;
    previousVideo(): void;
    removeEventListener(event: string, listener: (event: CustomEvent) => void): void;
    seekTo(seconds: number, allowSeekAhead: boolean): void;
    setLoop(loopPlaylists: boolean): void;
    setPlaybackQuality(suggestedQuality: string): void;
    setPlaybackRate(suggestedRate: number): void;
    setShuffle(shufflePlaylist: boolean): void;
    setSize(width: number, height: number): object;
    setVolume(volume: number): void;
    stopVideo(): void;
    unMute(): void;
    on(eventType: 'stateChange', listener: (event: CustomEvent & {data: number}) => void): void;
    on(eventType: EventType, listener: (event: CustomEvent) => void): void;
}
