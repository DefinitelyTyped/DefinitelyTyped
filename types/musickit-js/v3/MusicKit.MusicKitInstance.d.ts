declare namespace MusicKit {
    /**
     * This object provides access to a player instance, and through the player
     * instance, access to control playback.
     */
    interface MusicKitInstance {
        /**
         * An instance of the MusicKit API.
         */
        readonly api: MediaAPIV3;
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
         * The developer token to identify yourself as a trusted developer and
         * member of the Apple Developer Program.
         */
        readonly developerToken: string;
        /**
         * The current playback duration in hours and minutes.
         */
        readonly formattedCurrentPlaybackDuration: FormattedPlaybackDuration;
        /**
         * A Boolean value indicating whether the user has authenticated and
         * authorized the application for use.
         */
        readonly isAuthorized: boolean;
        /**
         * A Boolean value indicating whether the player is currently playing.
         */
        readonly isPlaying: boolean;
        /**
         * A user token used to access personalized Apple Music content.
         */
        readonly musicUserToken: string;
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
         * The current storefront for the configured MusicKit instance.
         */
        readonly storefrontId: string;
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
         * Add an event listener for a MusicKit instance by name.
         *
         * @param name The name of the event.
         * @param callback The callback function to invoke when the event occurs.
         */
        addEventListener<T extends keyof Events>(name: T, callback: (event: Events[T]) => any): void;
        /**
         * No description available.
         */
        addToLibrary(id: any, type: any): Promise<any>;
        /**
         * Returns a promise containing a music user token when a user has
         * authenticated and authorized the app.
         */
        authorize(): Promise<string>;
        /**
         * Begins playing the media item at the specified index in the queue.
         *
         * @param index The queue index to begin playing media.
         */
        changeToMediaAtIndex(index: number): Promise<number>;
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
         * Pauses playback of the media player.
         */
        pause(): void;
        /**
         * Begins playback of the current media item.
         */
        play(): Promise<MediaItemPosition>;
        /**
         * No description available.
         */
        playLater(options: SetQueueOptions): Promise<void>;
        /**
         * No description available.
         */
        playNext(options: SetQueueOptions): Promise<void>;
        /**
         * Removes an event listener for a MusicKit instance by name.
         *
         * @param name The name of the event.
         * @param callback The callback function to remove.
         */
        removeEventListener(name: string, callback?: () => any): void;
        /**
         * Sets the playback point to a specified time.
         *
         * @param time The time to set as the playback point.
         */
        seekToTime(time: number): Promise<any>;
        /**
         * Sets a music player's playback queue using queue options.
         *
         * @param options The option used to set the playback queue.
         */
        setQueue(options: SetQueueOptions): Promise<Queue>;
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
         * Stops playback of the media player.
         */
        stop(): void;
        /**
         * Unauthorizes the app for the current user.
         */
        unauthorize(): Promise<any>;
    }
}
