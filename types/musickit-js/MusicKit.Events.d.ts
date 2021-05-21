// Type definitions for MusicKit JS 1.2.3
// Project: https://developer.apple.com/documentation/musickitjs
// Definitions by: Waseem Dahman <https://github.com/wsmd>

declare namespace MusicKit {
  /**
   * A dictionary containing events for a MusicKit instance.
   */
  const Events: {
    /**
     * A notification name indicating a change in the authorization status.
     */
    authorizationStatusDidChange: string;
    /**
     * A notification name indicating an upcoming change in the authorization status.
     */
    authorizationStatusWillChange: string;
    /**
     * A notification name indicating a user is eligible for a subscribe view.
     */
    eligibleForSubscribeView: string;
    /**
     * A notification name indicating MusicKit JS is loaded.
     */
    loaded: string;
    /**
     * A notification name indicating the player has obtained enough data for
     * playback to start.
     */
    mediaCanPlay: string;
    /**
     * A notification name indicating that the currently-playing media item has
     * changed.
     */
    mediaItemDidChange: string;
    /**
     * A notification name indicating the currently-playing media item is about
     * to change.
     */
    mediaItemWillChange: string;
    /**
     * A notification name indicating that the player has thrown an error during
     * playback.
     */
    mediaPlaybackError: string;
    /**
     * A notification name indicating the media item's metadata has finished
     * loading.
     */
    metadataDidChange: string;
    /**
     * A notification indicating the playback bit rate has changed.
     */
    playbackBitrateDidChange: string;
    /**
     * A notification name indicating the current playback duration changed.
     */
    playbackDurationDidChange: string;
    /**
     * A notification name indicating the current playback progress changed.
     */
    playbackProgressDidChange: string;
    /**
     * A notification indicating the playback state has changed.
     */
    playbackStateDidChange: string;
    /**
     * A notification indicating the playback state is about to be changed.
     */
    playbackStateWillChange: string;
    /**
     * A notification indicating that a playback target's availability has changed.
     */
    playbackTargetAvailableDidChange: string;
    /**
     * A notification name indicating the current playback time has changed.
     */
    playbackTimeDidChange: string;
    /**
     * A notification name indicating the player volume has changed.
     */
    playbackVolumeDidChange: string;
    /**
     * A notification name indicating the playback has started in another context
     * on your domain, and the current player has stopped playback.
     */
    primaryPlayerDidChange: string;
    /**
     * A notification name indicating that the items in the current playback
     * queue have changed.
     */
    queueItemsDidChange: string;
    /**
     * A notification name indicating that the current queue position has changed.
     */
    queuePositionDidChange: string;
    /**
     * A notification name indicating a change in the storefront country code.
     */
    storefrontCountryCodeDidChange: string;
    /**
     * A notification name indicating that the device's inferred storefront
     * identifier changed.
     */
    storefrontIdentifierDidChange: string;
    /**
     * A notification name indicating the user token changed.
     */
    userTokenDidChange: string;
  };
}
