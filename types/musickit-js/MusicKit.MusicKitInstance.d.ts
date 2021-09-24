declare namespace MusicKit {
    /**
     * This object provides access to a player instance, and through the player
     * instance, access to control playback.
     */
    interface MusicKitInstance {
        /**
         * An instance of the MusicKit API.
         */
        readonly api: API;
        /**
         * An instance of the MusicKit API.
         */
        readonly bitrate: PlaybackBitrate;
        /**
         * The developer token to identify yourself as a trusted developer and
         * member of the Apple Developer Program.
         */
        readonly developerToken: string;
        /**
         * A Boolean value indicating whether the user has authenticated and
         * authorized the application for use.
         */
        readonly isAuthorized: boolean;
        /**
         * A user token used to access personalized Apple Music content.
         */
        readonly musicUserToken: string;
        /**
         * The current playback state of the music player.
         */
        readonly playbackState: PlaybackState;
        /**
         * A Boolean value that indicates if a playback target is available.
         */
        readonly playbackTargetAvailable: boolean;
        /**
         * An instance of the MusicKit player.
         */
        readonly player: Player;
        /**
         * The current storefront for the configured MusicKit instance.
         */
        readonly storefrontId: string;
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
