/**
 * Audio tracks encapsulate and provide a consistent interface to an audio resource.
 */
export interface AudioTrack {
    /**
     * Returns a new independent copy of the track.
     * @since 2.28.0
     */
    clone(): AudioTrack;

    /**
     * Returns the track's total playtime in seconds, Infinity for a stream, or NaN if no metadata exists.
     * @since 2.28.0
     */
    duration(): number;

    /**
     * Starts playback of the track and fades it between the specified starting and destination volume levels over
     * the specified number of seconds.
     * @param duration The number of seconds over which the track should be faded.
     * @param toVol The destination volume level.
     * @param fromVol The starting volume level. If omitted, defaults to the track's current volume level.
     * @since 2.28.0
     * @example
     * // Fade the track from volume 0 to 1 over 6 seconds.
     * aTrack.fade(6, 1, 0);
     */
    fade(duration: number, toVol: number, fromVol?: number): Promise<void>;

    /**
     * Starts playback of the track and fades it from the specified volume level to 1 (loudest) over the specified
     * number of seconds.
     * @param duration The number of seconds over which the track should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the track's current volume level.
     * @since 2.29.0
     * @example
     * // Fade the track in from volume 0 over 5 seconds.
     * aTrack.fadeIn(5, 0);
     */
    fadeIn(duration: number, fromVol?: number): Promise<void>;

    /**
     * Starts playback of the track and fades it from the specified volume level to 0 (silent) over the specified number
     * of seconds.
     * @param duration The number of seconds over which the track should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the track's current volume level.
     * @since 2.29.0
     */
    fadeOut(duration: number, fromVol?: number): Promise<void>;

    /**
     * Interrupts an in-progress fade of the track, or does nothing if no fade is progressing.
     * NOTE: This does not alter the volume level.
     * @since 2.28.0
     */
    fadeStop(): void;

    /**
     * Returns whether enough data has been loaded to play the track through to the end without interruption.
     * NOTE: This is an estimate calculated by the browser based upon the currently downloaded data and the download rate.
     * @since 2.28.0
     */
    hasData(): boolean;

    /**
     * Returns whether, at least, the track's metadata has been loaded.
     * @since 2.28.0
     */
    hasMetadata(): boolean;

    /**
     * Returns whether none of the track's data has been loaded.
     * @since 2.28.0
     */
    hasNoData(): boolean;

    /**
     * Returns whether, at least, some of the track's data has been loaded.
     * TIP: The <AudioTrack>.hasData() method is generally more useful.
     * @since 2.28.0
     */
    hasSomeData(): boolean;

    /**
     * Returns whether any valid sources were registered.
     * @since 2.28.0
     */
    hasSource(): boolean;

    /**
     * Returns whether playback of the track has ended.
     * @since 2.28.0
     */
    isEnded(): boolean;

    /**
     * Returns whether a fade is in-progress on the track.
     * @since 2.28.0
     */
    isFading(): boolean;

    /**
     * Returns whether an error has occurred.
     * @since 2.28.0
     */
    isFailed(): boolean;

    /**
     * Returns whether the track is loading data.
     * @since 2.28.0
     */
    isLoading(): boolean;

    /**
     * Returns whether playback of the track has been paused.
     * @since 2.28.0
     */
    isPaused(): boolean;

    /**
     * Returns whether the track is playing.
     * @since 2.28.0
     */
    isPlaying(): boolean;

    /**
     * Returns whether the track is seeking.
     * @since 2.28.0
     */
    isSeeking(): boolean;

    /**
     * Returns whether playback of the track has been stopped.
     * @since 2.29.0
     */
    isStopped(): boolean;

    /**
     * Returns whether the track is currently unavailable for playback. Possible reasons include: no valid sources are
     * registered, no sources are currently loaded, an error has occurred.
     * @since 2.28.0
     */
    isUnavailable(): boolean;

    /**
     * Returns whether the track's sources are currently unloaded.
     * @since 2.28.0
     */
    isUnloaded(): boolean;

    /**
     * Pauses playback of the track and, if it's not already in the process of loading, forces it to drop any existing
     * data and begin loading.
     * WARNING: This should not be done lightly if your audio sources are on the network, as it forces players to begin downloading them.
     * @since 2.28.0
     */
    load(): void;

    /**
     * Gets the track's repeating playback state (default: false).
     */
    loop(): boolean;
    /**
     * Sets the track's repeating playback state (default: false).
     * @param state The loop state.
     * @returns a reference to the current AudioTrack instance for chaining.
     * @since 2.28.0
     */
    loop(state: boolean): this;

    /**
     * Gets the track's volume mute state (default: false).
     * @since 2.28.0
     */
    mute(): boolean;
    /**
     * Sets the track's volume mute state
     * @param state The mute state.
     * @returns a reference to the current AudioTrack instance for chaining.
     * @since 2.28.0
     *
     */
    mute(state: boolean): this;

    /**
     * Removes event handlers from the track. Returns a reference to the current AudioTrack instance for chaining.
     * NOTE: Shorthand for jQuery's .off() method applied to each of the audio elements.
     * WARNING: The SimpleAudio APIs use events internally for various pieces of functionality. To prevent
     * conflicts, it is strongly suggested that you specify a custom user namespace—e.g., .myEvents—when attaching
     * your own handlers. It is further strongly suggested that you provide that same custom user namespace when
     * removing them.
     * @see jQuery.off()
     * @param events One or more space-separated event types and optional namespaces, or just namespaces,
     * such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @example
     * // Remove any handlers for the ended event.
     * someTracks.off('ended.myEvents');
     * @since 2.28.0
     */
    off(events: string | object | JQuery.Event, selector?: string, handler?: (event: JQuery.Event) => void): AudioTrack;

    /**
     * Attaches event handlers to the track. Returns a reference to the current AudioTrack instance for chaining.
     * @param events
     * @param selector
     * @param data
     * @param handler
     * @since 2.28.0
     */
    on(events: string | object | JQuery.Event, selector?: string, data?: any, handler?: (event: JQuery.Event) => void): AudioTrack;

    /**
     * Attaches single-use event handlers to the track. Returns a reference to the current AudioTrack
     * instance for chaining.
     * @param events
     * @param selector
     * @param data
     * @param handler
     * @since 2.28.0
     */
    one(events: string | object | JQuery.Event, selector?: string, data?: any, handler?: (event: JQuery.Event) => void): AudioTrack;

    /**
     * Pauses playback of the track.
     * @since 2.28.0
     */
    pause(): void;

    /**
     * Begins playback of the track.
     * @since 2.28.0
     */
    play(): Promise<void>;

    /**
     * Begins playback of the track or, failing that, sets the track to begin playback as soon as the player has interacted
     * with the document.
     * @since 2.28.0
     */
    playWhenAllowed(): void;

    /**
     * Returns how much remains of the track's total playtime in seconds, Infinity for a stream, or NaN if no metadata exists.
     * @since 2.28.0
     */
    remaining(): number;

    /**
     * Stops playback of the track.
     * @since 2.28.0
     */
    stop(): void;

    /**
     * Gets the track's current time in seconds.
     * @since 2.28.0
     */
    time(): number;
    /**
     * Sets the track's current time in seconds.
     * @param seconds The time to set. Valid values are floating-point numbers in the range 0 (start) to the maximum
     * duration—e.g., 60 is 60 is sixty seconds in, 90.5 is ninety-point-five seconds in.
     * @since 2.28.0
     */
    time(seconds: number): this;

    /**
     * Stops playback of the track and forces it to drop any existing data.
     * NOTE: Once unloaded, playback cannot occur until the track's data is loaded again.
     * @since 2.28.0
     */
    unload(): void;

    /**
     * Gets the track's volume level (default: 1).
     */
    volume(): number;

    /**
     * Sets the track's volume level (default: 1).
     * @param level The volume level to set. Valid values are floating-point numbers in the range 0 (silent) to 1 (loudest)
     * — e.g., 0 is 0%, 0.5 is 50%, 1 is 100%.
     * @returns a reference to the current AudioTrack instance for chaining.
     * @since 2.28.0
     */
    volume(level: number): this;
}

/**
 * Audio runners are useful for performing actions on multiple tracks at once.
 * @since 2.28.0
 */
export interface AudioRunner {
    /**
     * Starts playback of the selected tracks and fades them between the specified starting and destination volume levels
     * over the specified number of seconds.
     * @param duration The number of seconds over which the tracks should be faded.
     * @param toVol The destination volume level.
     * @param fromVol The starting volume level. If omitted, defaults to the tracks' current volume level.
     * @example
     * // Fade the selected tracks from volume 0 to 1 over 6 seconds.
     * someTracks.fade(6, 1, 0);
     * @since 2.28.0
     */
    fade(duration: number, toVol: number, fromVol?: number): void;

    /**
     * Starts playback of the selected tracks and fades them from the specified volume level to 1 (loudest) over the
     * specified number of seconds.
     * @param duration The number of seconds over which the tracks should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the tracks' current volume level.
     *
     * @example
     * // Fade the selected tracks in from volume 0 over 5 seconds.
     * someTracks.fadeIn(5, 0);
     * @since 2.28.0
     */
    fadeIn(duration: number, fromVol?: number): void;

    /**
     * Starts playback of the selected tracks and fades them from the specified volume level to 0 (silent) over the
     * specified number of seconds.
     * @param duration The number of seconds over which the tracks should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the tracks' current volume level.
     * @example
     * // Fade the selected tracks out from volume 1 over 8 seconds.
     * someTracks.fadeOut(8, 1);
     * @since 2.28.0
     */
    fadeOut(duration: number, fromVol?: number): void;

    /**
     * Interrupts an in-progress fade of the selected tracks, or does nothing if no fade is progressing.
     *
     * NOTE: This does not alter the volume level.
     * @example
     * someTracks.fadeStop();
     * @since 2.28.0
     */
    fadeStop(): void;

    /**
     * Pauses playback of the selected tracks and, if they're not already in the process of loading, forces them to
     * drop any existing data and begin loading.
     * WARNING: This should not be done lightly if your audio sources are on the network, as it forces players to
     * begin downloading them.
     * @example
     * someTracks.load();
     * @since 2.28.0
     */
    load(): void;

    /**
     * Sets the selected tracks' repeating playback state (default: false). Returns a reference to the current
     * AudioRunner instance for chaining.
     * @param state The loop state (false by default).
     * @since 2.28.0
     * @example
     * // Loop the selected tracks.
     * someTracks.loop(true);
     *
     * // Unloop the selected tracks.
     * someTracks.loop(false);
     */
    loop(state?: boolean): this;

    /**
     * Sets the selected tracks' volume mute state (default: false). Returns a reference to the current
     * AudioRunner instance for chaining.
     * @param state The mute state (false by default).
     * @example
     * // Mute the selected tracks' volume.
     * someTracks.mute(true);
     *
     * // Unmute the selected tracks' volume.
     * someTracks.mute(false);
     * @since 2.28.0
     */
    mute(state?: boolean): this;

    /**
     * Removes event handlers from the selected tracks. Returns a reference to the current AudioRunner
     * instance for chaining.
     * NOTE: Shorthand for jQuery's .off() method applied to each of the audio elements.
     * WARNING: The SimpleAudio APIs use events internally for various pieces of functionality. To prevent
     * conflicts, it is strongly suggested that you specify a custom user namespace—e.g., .myEvents—when attaching
     * your own handlers. It is further strongly suggested that you provide that same custom user namespace when
     * removing them.
     * @see jQuery.off()
     * @param events One or more space-separated event types and optional namespaces, or just namespaces,
     * such as "click", "keydown.myPlugin", or ".myPlugin".
     * @param selector A selector which should match the one originally passed to .on() when attaching event handlers.
     * @param handler A handler function previously attached for the event(s), or the special value false.
     * @example
     * // Remove any handlers for the ended event.
     * someTracks.off('ended.myEvents');
     * @since 2.28.0
     */
    off(events: string | object | JQuery.Event, selector?: string, handler?: (event: JQuery.Event) => void): this;

    /**
     * Attaches event handlers to the selected tracks. Returns a reference to the current AudioRunner instance for chaining.
     * @param events
     * @param selector
     * @param data
     * @param handler
     * @since 2.28.0
     */
    on(events: string | object | JQuery.Event, selector?: string, data?: any, handler?: (event: JQuery.Event) => void): this;

    /**
     * Attaches single-use event handlers to the selected tracks. Returns a reference to the current AudioRunner
     * instance for chaining.
     * @param events
     * @param selector
     * @param data
     * @param handler
     * @since 2.28.0
     */
    one(events: string | object | JQuery.Event, selector?: string, data?: any, handler?: (event: JQuery.Event) => void): this;

    /**
     * Pauses playback of the selected tracks.
     * @since 2.28.0
     * @example
     * someTracks.pause();
     */
    pause(): void;

    /**
     * Begins playback of the selected tracks.
     * @since 2.28.0
     */
    play(): void;

    /**
     * Begins playback of the selected tracks or, failing that, sets the tracks to begin playback as soon as
     * the player has interacted with the document.
     * @since 2.28.0
     */
    playWhenAllowed(): void;

    /**
     * Stops playback of the selected tracks.
     * @since 2.28.0
     */
    stop(): void;

    /**
     * Sets the selected tracks' current time in seconds. Returns a reference to the current AudioRunner
     * instance for chaining.
     * @param seconds The time to set. Valid values are floating-point numbers in the range 0 (start) to
     * the maximum duration—e.g., 60 is 60 is sixty seconds in, 90.5 is ninety-point-five seconds in.
     * @since 2.28.0
     * @example
     * // Set the selected tracks' current time to 30 seconds from their beginning.
     * someTracks.time(30);
     */
    time(seconds: number): this;

    /**
     * Stops playback of the selected tracks and forces them to drop any existing data.
     *
     * NOTE: Once unloaded, playback cannot occur until the selected tracks' data is loaded again.
     * @since 2.28.0
     */
    unload(): void;

    /**
     * Sets the selected tracks' volume level (default: 1). Returns a reference to the current AudioRunner
     * instance for chaining.
     * @param level The volume level to set. Valid values are floating-point numbers in the range 0 (silent)
     * to 1 (loudest)—e.g., 0 is 0%, 0.5 is 50%, 1 is 100%.
     * @since 2.28.0
     * @example
     * // Set the selected tracks' volume level to 75%.
     * someTracks.volume(0.75);
     */
    volume(level: number): this;
}

/**
 * Audio lists (playlists) are useful for playing tracks in a sequence—i.e., one after another.
 */
export interface AudioList {
    /**
     * Returns the playlist's total playtime in seconds, Infinity if it contains any streams, or NaN if no metadata exists.
     * @since 2.28.0
     */
    duration(): number;

    /**
     * Starts playback of the playlist and fades the currently playing track between the specified starting and destination
     * volume levels over the specified number of seconds.
     * @param duration The number of seconds over which the currently playing track should be faded.
     * @param toVol The destination volume level.
     * @param fromVol The starting volume level. If omitted, defaults to the currently playing track's current volume level.
     * @since 2.29.0
     * @example
     * // Fade the playlist from volume 0 to 1 over 6 seconds.
     * aList.fade(6, 1, 0);
     */
    fade(duration: number, toVol: number, fromVol?: number): Promise<void>;

    /**
     * Starts playback of the playlist and fades the currently playing track from the specified volume level to 1 (loudest)
     * over the specified number of seconds.
     * @param duration The number of seconds over which the currently playing track should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the currently playing track's current volume level.
     * @since 2.29.0
     * @example
     * // Fade the playlist in from volume 0 over 5 seconds.
     * aList.fadeIn(5, 0);
     */
    fadeIn(duration: number, fromVol?: number): Promise<void>;

    /**
     * Starts playback of the playlist and fades the currently playing track from the specified volume level to 0 (silent)
     * over the specified number of seconds.
     * @param duration The number of seconds over which the currently playing track should be faded.
     * @param fromVol The starting volume level. If omitted, defaults to the currently playing track's current volume level.
     * @since 2.29.0
     * @example
     * // Fade the playlist out from volume 1 over 8 seconds.
     * aList.fadeOut(8, 1);
     */
    fadeOut(duration: number, fromVol?: number): Promise<void>;

    /**
     * Interrupts an in-progress fade of the currently playing track, or does nothing if no fade is progressing.
     * NOTE: This does not alter the volume level.
     * @since 2.29.0
     */
    fadeStop(): void;

    /**
     * Returns whether playback of the playlist has ended.
     * @since 2.28.0
     */
    isEnded(): boolean;

    /**
     * Returns whether a fade is in-progress on the currently playing track.
     * @since 2.29.0
     */
    isFading(): boolean;

    /**
     * Returns whether playback of the playlist has been paused.
     * @since 2.28.0
     */
    isPaused(): boolean;

    /**
     * Returns whether the playlist is playing.
     * @since 2.28.0
     */
    isPlaying(): boolean;

    /**
     * Returns whether playback of the playlist has been stopped.
     * @since 2.29.0
     */
    isStopped(): boolean;

    /**
     * Pauses playback of the playlist and, if they're not already in the process of loading, forces its tracks to drop
     * any existing data and begin loading.
     *
     * WARNING: This should not be done lightly if your audio sources are on the network, as it forces players to begin
     * downloading them.
     * @since 2.28.0
     *
     */
    load(): void;

    /**
     * Gets the playlist's repeating playback state (default: false).
     * @since 2.28.0
     */
    loop(): boolean;
    /**
     * Sets the playlist's repeating playback state (default: false).
     * @param state The loop state.
     * @returns a reference to the current AudioList instance for chaining.
     * @since 2.28.0
     */
    loop(state: boolean): this;

    /**
     * Gets the playlist's volume mute state (default: false).
     * @since 2.28.0
     */
    mute(): boolean;
    /**
     * Gets or sets the playlist's volume mute state (default: false).
     * @param state The mute state.
     * @returns a reference to the current AudioList instance for chaining.
     * @since 2.28.0
     */
    mute(state: boolean): this;

    /**
     * Pauses playback of the playlist.
     * @since 2.28.0
     */
    pause(): void;

    /**
     * Begins playback of the playlist.
     * @since 2.29.0
     */
    play(): Promise<void>;

    /**
     * Begins playback of the playlist or, failing that, sets the playlist to begin playback as soon as the player has
     * interacted with the document.
     * @since 2.29.0
     */
    playWhenAllowed(): void;

    /**
     * Returns how much remains of the playlist's total playtime in seconds, Infinity if it contains any streams,
     * or NaN if no metadata exists.
     * @since 2.28.0
     */
    remaining(): number;

    /**
     * Gets the playlist's randomly shuffled playback state (default: false).
     * @since 2.28.0
     */
    shuffle(): boolean;
    /**
     * Sets the playlist's randomly shuffled playback state (default: false).
     * @param state The shuffle state.
     * @returns a reference to the current AudioList instance for chaining.
     * @since 2.28.0
     */
    shuffle(state: boolean): this;

    /**
     * Skips ahead to the next track in the playlist, if any.
     * @since 2.28.0
     */
    skip(): void;

    /**
     * Stops playback of the playlist.
     * @since 2.28.0
     */
    stop(): void;

    /**
     * Returns the playlist's current time in seconds, or NaN if no metadata exists.
     * @since 2.28.0
     */
    time(): number;

    /**
     * Stops playback of the playlist and forces its tracks to drop any existing data.
     * NOTE: Once unloaded, playback cannot occur until the track's data is loaded again.
     * @since 2.28.0
     */
    unload(): void;

    /**
     * Gets the playlist's volume level (default: 1).
     */
    volume(): number;

    /**
     * Sets the playlist's volume level (default: 1).
     * @param level The volume level to set. Valid values are floating-point numbers in the range 0 (silent) to 1
     * (loudest)—e.g., 0 is 0%, 0.5 is 50%, 1 is 100%.
     * @returns a reference to the current AudioList instance for chaining.
     */
    volume(level: number): this;
}

/**
 * The core audio subsystem and backend for the audio macros.
 *
 * The audio subsystem is based upon the HTML Media Elements APIs and comes with some built-in limitations:
 *
 * 1. True gapless transitions between tracks is not supported.
 * 2. In mobile browsers, playback volume is controlled by the device hardware. Thus, all volume adjustments are ignored by the
 * device, though muting should work normally.
 * 3. In mobile browsers and, more recently, most desktop browsers, playback must be initiated by the player—generally via
 * click/touch. In these cases, audio will not automatically play on the starting passage, nor is it likely to play if initiated
 * from within asynchronous code—e.g., via <<timed>>—though this ultimately depends on various factors. A simple solution for the
 * former is to use some kind of click/touch-through screen—e.g., a splash screen, which the player goes through to the real starting
 * passage. The latter is harder to resolve, so is best avoided.
 * 4. The load and playback states of tracks are not currently recorded within the active play session or saves. Thus, if you need
 * either to be recoverable, then you'll have to handle that yourself.
 */
export interface SimpleAudioAPI {
    /**
     * Pauses playback of all currently registered tracks and, if they're not already in the process of loading, force them to drop any
     * existing data and begin loading.
     * WARNING: This should not be done lightly if your audio sources are on the network, as it forces players to begin downloading them.
     * @since 2.28.0
     */
    load(): void;

    /**
     * Displays the loading screen until all currently registered audio tracks have either loaded to a playable state or aborted loading
     * due to errors. The loading process is as described in @see SimpleAudio.load().
     * WARNING: This should not be done lightly if your audio sources are on the network, as it forces players to begin downloading them.
     * @since 2.28.0
     */
    loadWithScreen(): void;

    /**
     * Gets or sets the mute state for the master volume (default: false).
     * @since 2.28.0
     */
    mute(): boolean;
    mute(state: boolean): void;

    /**
     * Gets or sets the mute-on-hidden state for the master volume (default: false). The mute-on-hidden state controls whether the
     * master volume is automatically muted/unmuted when the story's browser tab loses/gains visibility. Loss of visibility is defined
     * as when the browser window is either switched to another tab or minimized.
     * @since 2.28.0
     */
    muteOnHidden(): boolean;
    muteOnHidden(state: boolean): void;

    /**
     * Returns an AudioRunner instance for the tracks matching the given selector.
     * @param selector The list of audio track(s) and/or group ID(s), separated by spaces. There are several predefined group
     * IDs (:all, :looped, :muted, :paused, :playing). The :not() group modifier syntax (groupId:not(selector)) allows a group
     * to have some of its tracks excluded from selection.
     * @since 2.28.0
     * @example
     * // Basic usage
     * SimpleAudio.select(":ui"); // Returns the AudioRunner instance for the tracks matching ":ui"
     * @example
     * // Typical usage
     * // Return the AudioTrack instance matching "swamped" and do something with it
     * SimpleAudio.select("swamped").volume(1).play();
     *
     * // Start playback of paused audio tracks
     * SimpleAudio.select(":paused").play();
     *
     * // Pause playback of playing audio tracks
     * SimpleAudio.select(":playing").pause();
     *
     * // Stop playback of playing audio tracks
     * SimpleAudio.select(":playing").stop();
     *
     * // Stop playback of all audio tracks (not uniquely part of a playlist)
     * SimpleAudio.select(":all").stop();
     *
     * // Stop playback of playing audio tracks except those in the ":ui" group
     * SimpleAudio.select(":playing:not(:ui)").stop();
     *
     * // Change the volume of all audio tracks except those in the ":ui" group
     * // to 40%, without changing the current playback state
     * SimpleAudio.select(":all:not(:ui)").volume(0.40);
     */
    select(selector: string): AudioRunner | null;

    /**
     * Stops playback of all currently registered tracks.
     * @since 2.28.0
     */
    stop(): void;

    /**
     * Stops playback of all currently registered tracks and force them to drop any existing data.
     * NOTE: Once a track has been unloaded, playback cannot occur until it is reloaded.
     * @since 2.28.0
     */
    unload(): void;

    /**
     * Gets the master volume level (default: 1).
     */
    volume(): number;
    /**
     * Sets the master volume level (default: 1).
     * @param level The volume level to set. Valid values are floating-point numbers in the range 0 (silent) to 1
     * (loudest)—e.g., 0 is 0%, 0.5 is 50%, 1 is 100%.
     * @since 2.28.0
     * @example
     * // Get the current master volume level.
     * var currentMasterVolume = SimpleAudio.volume();
     *
     * // Set the master volume level to 75%.
     * SimpleAudio.volume(0.75);
     */
    volume(level: number): void;

    readonly tracks: {
        /**
         * Adds an audio track with the given track ID.
         * @param trackId The ID of the track, which will be used to reference it.
         * @param sources The audio sources for the track, which may be a list of sources or an array. Only one is required,
         * though supplying additional sources in differing formats is recommended, as no single format is supported by all browsers.
         * A source must be either a URL (absolute or relative) to an audio resource, the name of an audio passage, or a data URI. In
         * rare cases where the audio format cannot be automatically detected from the source (URLs are parsed for a file extension,
         * data URIs are parsed for the media type), a format specifier may be prepended to the front of each source to manually
         * specify the format (syntax: formatId|, where formatId is the audio format—generally, whatever the file extension would
         * normally be; e.g., mp3, mp4, ogg, weba, wav).
         * @example
         * // Cache a track with the ID "boom" and one source via relative URL
         * SimpleAudio.tracks.add("boom", "media/audio/explosion.mp3");
         *
         * // Cache a track with the ID "boom" and one source via audio passage
         * SimpleAudio.tracks.add("boom", "explosion");
         *
         * // Cache a track with the ID "bgm_space" and two sources via relative URLs
         * SimpleAudio.tracks.add("bgm_space", "media/audio/space_quest.mp3", "media/audio/space_quest.ogg");
         *
         * // Cache a track with the ID "what" and one source via URL with a format specifier
         * SimpleAudio.tracks.add("what", "mp3|http://an-audio-service.com/a-user/a-track-id");
         *
         * @since 2.28.0
         */
        add(trackId: string, ...sources: ReadonlyArray<string>): void;
        /**
         * Deletes all audio tracks.
         * NOTE: Cannot delete tracks solely under the control of a playlist.
         * @since 2.28.0
         */
        clear(): void;

        /**
         * Deletes the audio track with the given track ID.
         *
         * NOTE: Cannot delete tracks solely under the control of a playlist.
         * WARNING: Does not currently remove the track from either groups or playlists. Thus, any groups or playlists
         * containing the deleted track should be rebuilt.
         * @param trackId The ID of the track.
         * @since 2.28.0
         * @example
         * SimpleAudio.tracks.delete("bgm_space");
         */
        delete(trackId: string): void;

        /**
         * Returns the AudioTrack instance with the given track ID, or null on failure.
         * NOTE: To affect multiple tracks and/or groups at once, see the SimpleAudio.select() method.
         * Returns the AudioTrack instance with the given track ID, or null on failure.
         * @param trackId The ID of the track.
         * @since 2.28.0
         * @example
         * SimpleAudio.tracks.get("swamped")  → Returns the AudioTrack instance matching "swamped"
         * @example
         * // Return the AudioTrack instance matching "swamped" and do something with it
         * SimpleAudio.tracks.get("swamped").volume(1).play();
         */
        get(trackId: string): AudioTrack | null;

        /**
         * Returns whether an audio track with the given track ID exists.
         * @param trackId The ID of the track.
         */
        has(trackId: string): boolean;
    };
    readonly groups: {
        /**
         * Adds an audio group with the given group ID. Groups are useful for applying actions to multiple tracks
         * simultaneously and/or excluding the included tracks from a larger set when applying actions.
         * @param groupId The ID of the group, which will be used to reference it and must begin with a colon.
         * NOTE: There are several predefined group IDs (:all, :looped, :muted, :paused, :playing) and the :not group
         * modifier that cannot be reused/overwritten.
         * @param trackIds The IDs of the tracks to make part of the group, which may be a list of track IDs or an array.
         * @since 2.28.0
         * @example
         * // Set up a group ":ui" with the tracks: "ui_beep", "ui_boop", and "ui_swish"
         * SimpleAudio.groups.add(":ui", "ui_beep", "ui_boop", "ui_swish");
         */
        add(groupId: string, ...trackIds: ReadonlyArray<string>): void;

        /**
         * Deletes all audio groups.
         * NOTE: Only deletes the groups themselves, does not affect their component tracks.
         * @since 2.28.0
         */
        clear(): void;

        /**
         * Deletes the audio group with the given group ID.
         * NOTE: Only deletes the group itself, does not affect its component tracks.
         * @param groupId The ID of the group.
         * @since 2.28.0
         * @example
         * SimpleAudio.groups.delete(":ui");
         */
        delete(groupId: string): void;

        /**
         * Returns the array of track IDs with the given group ID, or null on failure.
         * NOTE: To actually affect multiple tracks and/or groups, see the SimpleAudio.select() method.
         * @param groupId The ID of the group.
         * @since 2.28.0
         * @example
         * SimpleAudio.groups.get(":ui")  → Returns the array of track IDs matching ":ui"
         */
        get(groupId: string): string[];

        /**
         * Returns whether an audio group with the given group ID exists.
         * @param groupId The ID of the group.
         * @since 2.28.0
         */
        has(groupId: string): boolean;
    };
    readonly lists: {
        /**
         * Adds a playlist with the given list ID. Playlists are useful for playing tracks in a sequence—i.e., one after another.
         * @param listId The ID of the list, which will be used to reference it
         * @param sources The track IDs or descriptors of the tracks to make part of the list, which may be specified as a list or an array.
         * Descriptor objects:
         * * **Existing track form: `{ id, [own], [volume] }`**
         *   * **`id`:** (*string*) The ID of an existing track.
         *   * **`own`:** (optional, *boolean*) When `true`, signifies that the playlist should create its own independent copy
         *     of the track, rather than simply referencing the existing instance.  Owned copies are solely under the control of their
         *     playlist and cannot be selected with either the [`SimpleAudio.tracks.get()` method](#simpleaudio-api-method-tracks-get)
         *     or the [`SimpleAudio.select()` method](#simpleaudio-api-method-select).
         *   * **`volume`:** (optional, *number*) The base volume level of the track within the playlist.  If omitted, defaults to
         *     the track's current volume.  Valid values are floating-point numbers in the range `0` (silent) to `1` (loudest)—e.g.,
         *     `0` is 0%, `0.5` is 50%, `1` is 100%.
         * * **New track form: `{ sources, [volume] }`**
         *   * **`sources`:** (*string array*) The audio sources for the track.  Only one is required, though supplying additional
         *     sources in differing formats is recommended, as no single format is supported by all browsers.  A source must be either
         *     a URL (absolute or relative) to an audio resource, the name of an audio passage, or a data URI.  In rare cases where the
         *     audio format cannot be automatically detected from the source (URLs are parsed for a file extension, data URIs are parsed
         *     for the media type), a format specifier may be prepended to the front of each source to manually specify the format
         *     (syntax: `formatId|`, where `formatId` is the audio format—generally, whatever the file extension would normally be; e.g.,
         *     `mp3`, `mp4`, `ogg`, `weba`, `wav`).
         *   * **`volume`:** (optional, *number*) The base volume level of the track within the playlist.  If omitted, defaults to `1`
         *     (loudest).  Valid values are floating-point numbers in the range `0` (silent) to `1` (loudest)—e.g., `0` is 0%, `0.5`
         *     is 50%, `1` is 100%.
         *
         * @example
         * // Basic usage with track IDs
         * // Add existing tracks at their current volumes
         * SimpleAudio.lists.add("bgm_lacuna", "swamped", "heavens_a_lie", "closer", "to_the_edge");
         *
         * @example
         * // Using a mix of track IDs and descriptors
         * SimpleAudio.lists.add("bgm_lacuna",
         *         // Add existing track "swamped" at its current volume
         *         "swamped",
         *         // Add existing track "heavens_a_lie" at 50% volume
         *         {
         *             id     : "heavens_a_lie",
         *             volume : 0.5
         *         },
         *         // Add an owned copy of existing track "closer" at its current volume
         *         {
         *             id  : "closer",
         *             own : true
         *         },
         *         // Add an owned copy of existing track "to_the_edge" at 100% volume
         *         {
         *             id     : "to_the_edge",
         *             own    : true,
         *             volume : 1
         *         }
         * );
         *
         * @example
         * // Using descriptors with sources
         * SimpleAudio.lists.add("bgm_lacuna",
         *         // Add a track from the given sources at the default volume (100%)
         *         {
         *             sources : ["media/audio/Swamped.mp3"]
         *         },
         *         // Add a track from the given sources at 50% volume
         *         {
         *             sources : ["media/audio/Heaven's_A_Lie.mp3"],
         *             volume  : 0.5
         *         },
         *         // Add a track from the given sources at the default volume (100%)
         *         {
         *             sources : ["media/audio/Closer.mp3"]
         *         },
         *         // Add a track from the given sources at 100% volume
         *         {
         *             sources : ["media/audio/To_The_Edge.mp3"],
         *             volume  : 1
         *         }
         * );
         */
        add(listId: string, ...sources: ReadonlyArray<string | {id?: string, sources?: string[], own?: boolean, volume?: number}>): void;

        /**
         * Deletes all playlists.
         * @since 2.28.0
         */
        clear(): void;

        /**
         * Deletes the playlist with the given list ID
         * @param listId The ID of the playlist.
         * @since 2.28.0
         */
        delete(listId: string): void;

        /**
         * Returns the AudioList instance with the given list ID, or null on failure.
         * @param listId The ID of the playlist.
         * @returns AudioList instance with the given list ID, or null on failure.
         */
        get(listId: string): AudioList | null;

        /**
         * Returns whether a playlist with the given list ID exists.
         * @param listId The ID of the playlist.
         */
        has(listId: string): boolean;
    };
}

export {};
