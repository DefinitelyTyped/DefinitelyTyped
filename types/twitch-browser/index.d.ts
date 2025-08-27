/**
 * @see https://dev.twitch.tv/docs/embed/video-and-clips/
 */

declare namespace Twitch {
    /**
     * Channel name (for a live stream), video ID, or collection ID. (To change the channel or video later, use setChannel, setVideo, or setCollection; see Synchronous Playback Controls.)
     * If both video and collection are specified, the specified collection starts playing from the specified video. If the video is not in the collection, collection is ignored and the specified video is played.
     * If channel is specified along with video and/or collection, only channel is used.
     */
    interface TwitchPlayerContructorOptions {
        channel?: string;
        video?: string;
        collection?: string;
        height: number | string;
        parent: string[];
        width: number | string;
        autoplay?: boolean;
        muted?: boolean;
        time?: string;
    }

    interface PlaybackStats {
        backendVersion: string;
        bufferSize: number;
        codecs: string;
        displayResolution: string;
        fps: number;
        hlsLatencyBroadcaster: number;
        playbackRate: number;
        skippedFrames: number;
        videoResolution: string;
    }

    /**
     * Creates and controls a Twitch player in an <iframe>.
     */
    class Player {
        /**
         * Initialize new Player
         * @param divId The id of the div that will contain the cideo player iframe
         * @param options The options for the new player
         */
        constructor(divId: string, options: TwitchPlayerContructorOptions);
        disableCaptions(): void;
        enableCaptions(): void;
        pause(): void;
        play(): void;
        seek(timestamp: number): void;
        setChannel(channel: string): void;
        setCollection(collectionId: string, videoId: string): void;
        setQuality(quality: string): void;
        setVideo(videoId: string, timestamp: number): void;
        getMuted(): boolean;
        setMuted(muted: boolean): void;
        getVolume(): number;
        setVolume(volumeLevel: number): void;
        getPlaybackStats(): PlaybackStats;
        getChannel(): string;
        getCurrentTime(): number;
        getDuration(): number;
        getEnded(): boolean;
        getQualities(): string[];
        getQuality(): string;
        getVideo(): string;
        isPaused(): boolean;
        addEventListener(event: string, callback: () => void): void;
        static VIDEO_READY: string;
        static VIDEO_PLAY: string;
        static VIDEO_PAUSE: string;
        static CAPTIONS: string;
        static ENDED: string;
        static ERROR: string;
        static ONLINE: string;
        static OFFLINE: string;
        static PAUSE: string;
        static PLAY: string;
        static PLAYBACK_BLOCKED: string;
        static PLAYING: string;
        static READY: string;
        static SEEK: string;
    }
}
