// Type definitions for YouTube
// Project: https://developers.google.com/youtube/
// Definitions by: Daz Wilkin <https://github.com/DazWilkin/>
// Updated by: Ian Obermiller <http://ianobermiller.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

module YT {
    interface EventArgs {
        target: Player;
        data: any;
    }

    interface EventHandler {
        (event: EventArgs): void;
    }

    export interface Events {
        onReady?: EventHandler;
        onPlayback?: EventHandler;
        onStateChange?: EventHandler;
    }

	export enum ListType {
		search,
		user_uploads,
		playlist,
	}

    export interface PlayerVars {
        autohide?: number;
        autoplay?: number;
        cc_load_policy?: any;
        color?: string;
		controls?: number;
		disablekb?: number;
		enablejsapi?: number;
		end?: number;
		fs?: number;
		iv_load_policy?: number;
		list?: string;
		listType?: ListType;
		loop?;
		modestbranding?: number;
		origin?;
        playerpiid?: string;
		playlist?;
		rel?: number;
        showinfo?: number;
		start?: number;
        theme?: string;
    }

    export interface PlayerOptions {
        width?: number;
        height?: number;
        videoId?: string;
        playerVars?: PlayerVars;
        events?: Events;
    }

    interface VideoByIdParams {
        videoId: string;
        startSeconds?: number;
        endSeconds?: number;
        suggestedQuality?: string;
    }

    interface VideoByUrlParams {
        mediaContentUrl: string;
        startSeconds?: number;
        endSeconds?: number;
        suggestedQuality?: string;
    }

    export class Player {
        // Constructor
        constructor(id: string, playerOptions: PlayerOptions);

        // Queueing functions
        loadVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
        loadVideoById(VideoByIdParams): void;
        cueVideoById(videoId: string, startSeconds?: number, suggestedQuality?: string): void;
        cueVideoById(VideoByIdParams): void;

        loadVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
        loadVideoByUrl(VideoByUrlParams): void;
        cueVideoByUrl(mediaContentUrl: string, startSeconds?: number, suggestedQuality?: string): void;
        cueVideoByUrl(VideoByUrlParams): void;

        // Properties
        size;
        
        // Playing
        playVideo(): void;
        pauseVideo(): void;
        stopVideo(): void;
        seekTo(seconds:number, allowSeekAhead:bool): void;
        clearVideo(): void;

        // Playlist
        nextVideo(): void;
        previousVideo(): void;
        playVideoAt(index: number): void;

        // Volume
        mute(): void;
        unMute(): void;
        isMuted(): bool;
        setVolume(volume: number): void;
        getVolume(): number;

        // Sizing
        setSize(width: number, height: number): any;

        // Playback
        getPlaybackRate(): number;
        setPlaybackRate(suggestedRate:number): void;
        getAvailablePlaybackRates(): number[];
        
        // Behavior
        setLoop(loopPlaylists: bool): void;
        setShuffle(shufflePlaylist: bool): void;

        // Status
        getVideoLoadedFraction(): number;
        getPlayerState(): number;
        getCurrentTime(): number;
        getVideoStartBytes(): number;
        getVideoBytesLoaded(): number;
        getVideoBytesTotal(): number;

        // Information
        getDuration(): number;
        getVideoUrl(): string;
        getVideoEmbedCode(): string;

        // Playlist
        getPlaylist(): any[];
        getPlaylistIndex(): number;
        
        // Event Listener
        addEventListener(event: string, listener: string): void;
    }

    export enum PlayerState {
        BUFFERING,
        CUED,
        ENDED,
        PAUSED,
        PLAYING
    };
}
