export as namespace stats;

/**
 * Represents playback statistics. Statistics attributes are aggregated over
 * the entire receiver session (including multiple items in a queue) where
 * indicated.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.stats.Stats
 */
export interface Stats {
    /**
     * The total time spent in a buffering state, in seconds. This is
     * aggregated over all media items in the current receiver session.
     */
    bufferingTime?: number | undefined;

    /**
     * The total number of frames decoded. This is aggregated over all media
     * items in the current receiver session.
     */
    decodedFrames?: number | undefined;

    /**
     * The total number of frames dropped. This is aggregated over all media
     * items in the current receiver session.
     */
    droppedFrames?: number | undefined;

    /**
     * The height of the current video track. Undefined if no video is playing.
     */
    height?: number | undefined;

    /**
     * The total time spent in a non-buffering state, in seconds. This is
     * aggregated over all media items in the current receiver session.
     */
    playTime?: number | undefined;

    /**
     * The total time spent in a playing state only, in seconds. Unlike
     * 'playTime', *absolute* play time does NOT include time spent in a paused
     * state. This is currently only supported while using Shaka.
     */
    absolutePlayTime?: number | undefined;

    /**
     * The estimated bandwidth. This is currently only supported while using
     * Shaka.
     */
    estimatedBandwidth?: number | undefined;

    /**
     * The bandwidth required for the current streams (total, in bit/sec).
     * Undefined if no streams are currently active.
     */
    streamBandwidth?: number | undefined;

    /**
     * The width of the current video track. Undefined if no video is playing.
     */
    width?: number | undefined;

    /**
     * The total number of corrupted frames. This is aggregated over all media
     * items in the current receiver session. This is currently only supported
     * while using Shaka.
     */
    corruptedFrames?: number | undefined;

    /**
     * The total number of playback gaps jumped by the player. This is
     * currently only supported while using Shaka v4.1.0+.
     */
    gapsJumped?: number | undefined;

    /**
     * The total number of playback stalls detected. This is currently only
     * supported while using Shaka v4.1.0+.
     */
    stallsDetected?: number | undefined;

    /**
     * The greatest completion percent that the user has experienced in
     * playback. Also known as the "high water mark". Is NaN when there is no
     * known duration, such as for livestreams. This is currently only
     * supported while using Shaka.
     */
    completionPercent?: number | undefined;

    /**
     * The number of seconds it took for the video element to have enough data
     * to begin playback. This is measured from the time the player's load()
     * function is called to the time the 'loadeddata' event is fired by the
     * media element. This is currently only supported while using Shaka.
     */
    loadLatency?: number | undefined;

    /**
     * The amount of time it took to download and parse the manifest. This is
     * currently only supported while using Shaka.
     */
    manifestTimeSeconds?: number | undefined;

    /**
     * The amount of time it took to download the first drm key, and load that
     * key into the drm system. This is currently only supported while using
     * Shaka.
     */
    drmTimeSeconds?: number | undefined;

    /**
     * The total time spent in a paused state in seconds. This is currently
     * only supported while using Shaka.
     */
    pauseTime?: number | undefined;

    /**
     * The time spent on license requests during this session in seconds, or
     * NaN. This is currently only supported while using Shaka.
     */
    licenseTime?: number | undefined;

    /**
     * The time between the capturing of a frame and the end user having it
     * displayed on their screen. This is currently only supported while using
     * Shaka.
     */
    liveLatency?: number | undefined;

    /**
     * The presentation's max segment duration in seconds, or NaN. This is
     * currently only supported while using Shaka.
     */
    maxSegmentDuration?: number | undefined;

    /**
     * A history of the stream changes. This includes both changes from ABR and
     * manual track selections.
     */
    switchHistory?: TrackChoice[] | undefined;

    /**
     * A history of the state changes the player has entered. This can be
     * 'buffering', 'playing', 'paused', or 'ended'.
     */
    stateHistory?: StateChange[] | undefined;
}

/**
 * Represents a player track selection.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.stats.TrackChoice
 */
export interface TrackChoice {
    /**
     * The timestamp the state was entered, in seconds since 1970 (i.e.
     * Date.now() / 1000).
     */
    timestamp: number;

    /**
     * The type of track chosen ('variant' or 'text'). A 'variant' describes a
     * combination of an audio and video stream which could be played together.
     * It's possible to have a video/audio only variant.
     */
    type: string;

    /**
     * 'true' if this track choice was made by the player's ABR algorithm for
     * adaptation; 'false' if the choice was made by the application.
     */
    fromAdaptation: boolean;

    /**
     * The bandwidth of the chosen track (null when 'type' is 'text').
     */
    bandwidth: number;
}

/**
 * Represents a player state change.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.stats.StateChange
 */
export interface StateChange {
    /**
     * The timestamp the state was entered, in seconds since 1970 (i.e.
     * Date.now() / 1000).
     */
    timestamp: number;

    /**
     * The state the player entered. This could be 'buffering', 'playing',
     * 'paused', or 'ended'.
     */
    state: string;

    /**
     * The number of seconds the player was in this state. If this is the last
     * entry in the list, the player is still in this state, so the duration
     * will continue to increase.
     */
    duration: number;
}
