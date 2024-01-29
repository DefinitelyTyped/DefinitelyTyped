declare namespace MusicKit {
    /**
     * The playback states of the music player.
     */
    enum PlaybackStates {
        completed,
        ended,
        loading,
        none,
        paused,
        playing,
        seeking,
        stalled,
        stopped,
        waiting,
    }

    /**
     * The playback bit rate of the music player.
     */
    enum PlaybackBitrate {
        HIGH = 256,
        STANDARD = 64,
    }

    type PlayerRepeatMode = 0 | 1 | 2;
    type PlayerShuffleMode = 0 | 1;
    type MediaItemPosition = number;

    /**
     * A media player that represents the media player for a MusicKit instance.
     */
    interface Player {
        /**
         * The current bit rate of the music player.
         */
        readonly bitrate: number;
        /**
         * The music player has EME loaded.
         */
        readonly canSupportDRM: boolean;
        /**
         * The current playback duration.
         */
        readonly currentPlaybackDuration: number;
        /**
         * The current playback progress.
         */
        readonly currentPlaybackProgress: number;
        /**
         * The current position of the playhead.
         */
        readonly currentPlaybackTime: number;
        /**
         * No description available.
         */
        readonly currentPlaybackTimeRemaining: number;
        /**
         * The current playback duration in hours and minutes.
         */
        readonly formattedCurrentPlaybackDuration: FormattedPlaybackDuration;
        /**
         * A Boolean value indicating whether the player is currently playing.
         */
        readonly isPlaying: boolean;
        /**
         * The currently-playing media item, or the media item, within an queue,
         * that you have designated to begin playback.
         */
        readonly nowPlayingItem: MediaItem;
        /**
         * The index of the now playing item in the current playback queue.
         */
        readonly nowPlayingItemIndex?: number | undefined;
        /**
         * The current playback rate for the player.
         */
        readonly playbackRate: number;
        /**
         * The current playback state of the music player.
         */
        readonly playbackState: PlaybackStates;
        /**
         * A Boolean value that indicates whether a playback target is available.
         */
        readonly playbackTargetAvailable?: boolean | undefined;
        /**
         * The current playback queue of the music player.
         */
        readonly queue: Queue;
        /**
         * The current repeat mode of the music player.
         */
        repeatMode: PlayerRepeatMode;
        /**
         * The current shuffle mode of the music player.
         */
        shuffleMode: PlayerShuffleMode;
        /**
         * A number indicating the current volume of the music player.
         */
        volume: number;
        /**
         * Adds an event listener as a callback for an event name.
         *
         * @param name The name of the event.
         * @param callback The callback function to invoke when the event occurs.
         */
        addEventListener(name: string, callback: () => any): void;
        /**
         * Begins playing the media item at the specified index in the queue immediately.
         *
         * @param The queue index to begin playing media.
         */
        changeToMediaAtIndex(index: number): Promise<MediaItemPosition>;
        /**
         * Begins playing the media item in the queue immediately.
         *
         * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
         * string identifier.
         */
        changeToMediaItem(descriptor: Descriptor): Promise<MediaItemPosition>;
        /**
         * Sets the volume to 0.
         */
        mute(): void;
        /**
         * Pauses playback of the current item.
         */
        pause(): void;
        /**
         * Initiates playback of the current item.
         */
        play(): Promise<MediaItemPosition>;
        /**
         * Prepares a music player for playback.
         *
         * @param descriptor descriptor can be a MusicKit.MediaItem instance or a
         * string identifier.
         */
        prepareToPlay(descriptor: Descriptor): Promise<void>;
        /**
         * No description available.
         *
         * @param name The name of the event.
         * @param callback The callback function to remove.
         */
        removeEventListener(name: string, callback: () => any): void;
        /**
         * Sets the playback point to a specified time.
         *
         * @param time The time to set as the playback point.
         */
        seekToTime(time: number): Promise<void>;
        /**
         * Displays the playback target picker if a playback target is available.
         */
        showPlaybackTargetPicker(): void;
        /**
         * Starts playback of the next media item in the playback queue.
         */
        skipToNextItem(): Promise<MediaItemPosition>;
        /**
         * Starts playback of the previous media item in the playback queue.
         */
        skipToPreviousItem(): Promise<MediaItemPosition>;
        /**
         * Stops the currently playing media item.
         */
        stop(): void;
    }
}
