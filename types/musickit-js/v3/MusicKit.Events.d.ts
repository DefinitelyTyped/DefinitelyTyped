declare namespace MusicKit {
    /**
     * A dictionary containing events for a MusicKit instance.
     */
    interface Events {
        /**
         * A notification indicating an audio track has been added to the media element. Consumers should access the audioTracks field on the MusicKit instance.
         */
        audioTrackAdded: unknown;
        /**
         * A notification indicating the playing audio track has changed. Consumers should access the audioTracks field on the MusicKit instance to determine the currently enabled track.
         */
        audioTrackChanged: unknown;
        /**
         * A notification indicating an audio track has been removed from the media element. Consumers should access the audioTracks field on the MusicKit instance.
         */
        audioTrackRemoved: unknown;
        /**
         * A notification name indicating a change in the authorization status.
         */
        authorizationStatusDidChange: { authorizationStatus: AuthStatus[keyof AuthStatus] };
        /**
         * A notification name indicating an upcoming change in the authorization status.
         */
        authorizationStatusWillChange: unknown;
        /**
         * A notification indicating that can auto play has changed.
         */
        autoplayEnabledDidChange: unknown;
        /**
         * A notification name for indicating the current buffer progress changed.
         */
        bufferedProgressDidChange: { progress: number };
        /**
         * A notification indicating that the capabilities available for playback controls have changed.
         */
        capabilitiesChanged: unknown;
        /**
         * A notification for indicating that media playback has fallen back to preview mode due to an inability to configure DRM for the current item in the current environment.
         */
        drmUnsupported: unknown;
        /**
         * A notification name indicating a user is eligible for a subscribe view.
         */
        eligibleForSubscribeView: unknown;
        /**
         * A notification indicating the text track to use for forced subtitles has changed.
         */
        forcedTextTrackChanged: unknown;
        /**
         * A notification name indicating MusicKit JS is loaded.
         */
        musickitloaded: unknown;
        /**
         * A notification name indicating the player has obtained enough data for
         * playback to start.
         */
        mediaCanPlay: Event;
        /**
         * A notification indicating a new media element was created. The element is passed as the event data.
         */
        mediaElementCreated: HTMLAudioElement;
        /**
         * A notification for indicating that a MediaItem's state has changed.
         */
        mediaItemStateDidChange: MediaItem;
        /**
         * A notification for indicating that a MediaItem's state is about to be changed.
         */
        mediaItemStateWillChange: MediaItem;
        /**
         * A notification name indicating that the player has thrown an error during
         * playback.
         */
        mediaPlaybackError: unknown;
        /**
         * A notification indicating that the skip intro period has been reached.
         */
        mediaSkipAvailable: unknown;
        /**
         * A notification indicating that a Pre or Post Roll has been entered.
         */
        mediaRollEntered: unknown;
        /**
         * A notification indicating the the next item should be shown
         */
        mediaUpNext: unknown;
        /**
         * A notification name indicating the media item's metadata has finished
         * loading.
         */
        metadataDidChange: Event;
        /**
         * A notification that is fired when a MusicKit on the Web instance has been configured.
         */
        musickitconfigured: unknown;
        /**
         * TBD
         */
        musickitwebcomponentsloaded: unknown;
        /**
         * A notification name indicating that the currently-playing media item has
         * changed.
         */
        nowPlayingItemDidChange: { item: MediaItem };
        /**
         * A notification name indicating the currently-playing media item is about
         * to change.
         */
        nowPlayingItemWillChange: { item: MediaItem };
        /**
         * A notification indicating the playback bit rate has changed.
         */
        playbackBitrateDidChange: unknown;
        /**
         * A notification name indicating the current playback duration changed.
         */
        playbackDurationDidChange: {
            currentTarget: HTMLAudioElement;
            duration: number;
            target: HTMLAudioElement;
            type: 'durationchange';
        };
        /**
         * A notification name indicating the current playback progress changed.
         */
        playbackProgressDidChange: { progress: number };
        /**
         * A notification for indicating the current playback rate changed.
         */
        playbackRateDidChange: { progress: number };
        /**
         * A notification indicating the playback state has changed.
         */
        playbackStateDidChange: { oldState: PlaybackStates; state: PlaybackStates; nowPlayingItem: MediaItem };
        /**
         * A notification indicating the playback state is about to be changed.
         */
        playbackStateWillChange: { oldState: PlaybackStates; state: PlaybackStates; nowPlayingItem: MediaItem };
        /**
         * A notification indicating that a playback target's availability has changed.
         */
        playbackTargetAvailableDidChange: unknown;
        /**
         * TBD
         */
        playbackTargetIsWirelessDidChange: unknown;
        /**
         * A notification name indicating the current playback time has changed.
         */
        playbackTimeDidChange: {
            currentPlaybackDuration: number;
            currentPlaybackTime: number;
            currentPlaybackTimeRemaining: number;
        };
        /**
         * A notification name indicating the player volume has changed.
         */
        playbackVolumeDidChange: unknown;
        /**
         * A notification for indicating the type of player changed; e.g. from music to video.
         */
        playerTypeDidChange: { player: Record<string, any> };
        /**
         * TBD
         */
        presentationModeDidChange: unknown;
        /**
         * A notification name indicating the playback has started in another context
         * on your domain, and the current player has stopped playback.
         */
        primaryPlayerDidChange: unknown;
        /**
         * A notification indicating the queue data has been loaded and the queue is ready to play.
         */
        queueIsReady: MediaItem[];
        /**
         * A notification name indicating that the items in the current playback
         * queue have changed.
         */
        queueItemsDidChange: MediaItem[];
        /**
         * TBD
         */
        queueItemForStartPosition: unknown;
        /**
         * A notification name indicating that the current queue position has changed.
         */
        queuePositionDidChange: { oldPosition: number; position: number };
        /**
         * A notification indicating that the current controller shuffle mode has changed.
         */
        repeatModeDidChange: unknown;
        /**
         * A notification name indicating a change in the storefront country code.
         */
        shuffleModeDidChange: unknown;
        /**
         * A notification indicating that the current queue repeat mode has changed.
         */
        storefrontCountryCodeDidChange: unknown;
        /**
         * A notification name indicating that the device's inferred storefront
         * identifier changed.
         */
        storefrontIdentifierDidChange: unknown;
        /**
         * A notification indicating a text track has been added to the media element.
         */
        textTrackAdded: unknown;
        /**
         * A notification indicating the playing text track changed.
         */
        textTrackChanged: unknown;
        /**
         * A notification indicating a text track has been removed from the media element.
         */
        textTrackRemoved: unknown;
        /**
         * A notification indicating the media element has reached a timed metadata event.
         */
        timedMetadataDidChange: unknown;
        /**
         * A notification name indicating the user token changed.
         */
        userTokenDidChange: unknown;
    }
}
