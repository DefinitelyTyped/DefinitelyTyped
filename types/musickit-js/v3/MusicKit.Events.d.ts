declare namespace MusicKit {
    /**
     * A dictionary containing events for a MusicKit instance.
     */
    interface Events {
        /**
         * A notification name indicating a change in the authorization status.
         */
        authorizationStatusDidChange: { authorizationStatus: AuthStatus[keyof AuthStatus] };
        /**
         * A notification name indicating an upcoming change in the authorization status.
         */
        authorizationStatusWillChange: unknown;
        /**
         * A notification name indicating a user is eligible for a subscribe view.
         */
        eligibleForSubscribeView: unknown;
        /**
         * A notification name indicating MusicKit JS is loaded.
         */
        loaded: unknown;
        /**
         * A notification name indicating the player has obtained enough data for
         * playback to start.
         */
        mediaCanPlay: unknown;
        /**
         * A notification name indicating that the currently-playing media item has
         * changed.
         */
        mediaItemDidChange: unknown;
        /**
         * A notification name indicating the currently-playing media item is about
         * to change.
         */
        mediaItemWillChange: unknown;
        /**
         * A notification name indicating that the player has thrown an error during
         * playback.
         */
        mediaPlaybackError: unknown;
        /**
         * A notification name indicating the media item's metadata has finished
         * loading.
         */
        metadataDidChange: unknown;
        /**
         * A notification indicating the playback bit rate has changed.
         */
        playbackBitrateDidChange: unknown;
        /**
         * A notification name indicating the current playback duration changed.
         */
        playbackDurationDidChange: unknown;
        /**
         * A notification name indicating the current playback progress changed.
         */
        playbackProgressDidChange: { progress: number };
        /**
         * A notification indicating the playback state has changed.
         */
        playbackStateDidChange: { oldState: PlaybackState; state: PlaybackState };
        /**
         * A notification indicating the playback state is about to be changed.
         */
        playbackStateWillChange: unknown;
        /**
         * A notification indicating that a playback target's availability has changed.
         */
        playbackTargetAvailableDidChange: unknown;
        /**
         * A notification name indicating the current playback time has changed.
         */
        playbackTimeDidChange: unknown;
        /**
         * A notification name indicating the player volume has changed.
         */
        playbackVolumeDidChange: unknown;
        /**
         * A notification name indicating the playback has started in another context
         * on your domain, and the current player has stopped playback.
         */
        primaryPlayerDidChange: unknown;
        /**
         * A notification name indicating that the items in the current playback
         * queue have changed.
         */
        queueItemsDidChange: unknown;
        /**
         * A notification name indicating that the current queue position has changed.
         */
        queuePositionDidChange: unknown;
        /**
         * A notification name indicating a change in the storefront country code.
         */
        storefrontCountryCodeDidChange: unknown;
        /**
         * A notification name indicating that the device's inferred storefront
         * identifier changed.
         */
        storefrontIdentifierDidChange: unknown;
        /**
         * A notification name indicating the user token changed.
         */
        userTokenDidChange: unknown;
    }
}
