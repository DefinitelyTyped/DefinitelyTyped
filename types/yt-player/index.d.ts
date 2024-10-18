import { EventEmitter } from "events";

interface YouTubePlayerOptions {
    /**  This parameter indicates the width of the player. */
    width?: number | undefined;
    /** This parameter indicates the height of the player. */
    height?: number | undefined;
    /**
     * This parameter indicates whether the initial video will automatically
     * start to play when the player loads. The default value is false.
     */
    autoplay?: boolean | undefined;
    /**
     * This parameter causes the player to begin playing the video at the given number
     * of seconds from the start of the video. The parameter value is a positive integer.
     * Note that the player will look for the closest keyframe to the time you specify.
     * This means that sometimes the play head may seek to just before the requested time,
     * usually no more than around two seconds. Default is 0.
     */
    start?: number | undefined;
    /**
     * This parameter indicates whether closed captions should be shown, even if
     * the user has turned captions off. The default behavior is based on user
     * preference.
     */
    captions?: false | string | undefined;
    /**
     * This parameter indicates whether the video player controls are displayed.
     * The default value is true.
     */
    controls?: boolean | undefined;
    /**
     * This parameter indicates whether the player will respond to keyboard
     * shortcuts. The default value is true.
     */
    keyboard?: boolean | undefined;
    /**
     * This parameter indicates whether the player will show a fullscreen
     * button. The default value is true.
     */
    fullscreen?: boolean | undefined;
    /**
     * This parameter indicates whether the player will show video annotations.
     * The default value is true.
     */
    annotations?: boolean | undefined;
    /**
     * This parameter lets you use a YouTube player that does not show a
     * YouTube logo. Even when this option is enabled, a small YouTube text
     * label will still display in the upper-right corner of a paused video
     * when the user's mouse pointer hovers over the player.
     */
    modestBranding?: boolean | undefined;
    /**
     * This parameter indicates whether the player should show related videos
     * from other channels
     */
    related?: boolean | undefined;
    /**
     * The time between onTimeupdate callbacks, in milliseconds. Default is
     * 1000.
     */
    timeupdateFrequency?: number | undefined;
    /**
     * This parameter controls whether videos play inline or fullscreen in an
     * HTML5 player on iOS. The default is true.
     */
    playsInline?: boolean | undefined;
    /**
     * This parameter controls the hostname that videos are loaded from.
     * Set to `https://www.youtube-nocookie.com` for enhanced privacy.
     * The default value is `https://www.youtube.com`.
     */
    host?: string | undefined;
}

type YouTubePlayerState = "unstarted" | "ended" | "playing" | "paused" | "buffering" | "cued";

type YouTubePlayerQuality = "small" | "medium" | "large" | "hd720" | "hd1080" | "highres" | "default";

/**
 * Simple, robust, blazing-fast YouTube Player API
 *
 * @see https://github.com/feross/yt-player
 */
declare class YouTubePlayer extends EventEmitter {
    /** Returns the currently loaded video ID, i.e.what was passed to load(). */
    videoId: string;
    /** Returns true if destroy() has been called on the player. */
    destroyed: boolean;
    /**
     * Create a new YouTube player. The player will take the place of the HTML
     * element element. Alternatively, element can be a selector string, which
     * will be passed to document.querySelector().
     *
     * Examples: `#player`, `.youtube-player`, or a DOM node.
     *
     * Optionally, provide an options object opts to customize the player.
     */
    constructor(element: HTMLElement | string, options?: YouTubePlayerOptions);
    /**
     * This function loads the specified videoId. An example of a videoId is
     * 'GKSRyLdjsPA'.
     *
     * Optionally, specify an autoplay parameter to indicate whether the video
     * should begin playing immediately, or wait for a call to player.play().
     * Default is false.
     *
     * This should be the first function called on a new Player instance.
     */
    load(videoId: string, autoplay?: boolean, start?: number): void;
    /** Plays the currently loaded video. */
    play(): void;
    /** Pauses the currently loaded video. */
    pause(): void;
    /**
     * Stops and cancels loading of the current video.This function should be
     * reserved for rare situations when you know that the user will not be
     * watching additional video in the player.If your intent is to pause the
     * video, you should just call pause().If you want to change the video that
     * the player is playing, you can call load() without calling stop() first.
     */
    stop(): void;
    /**
     * Seeks to a specified time in the video.If the player is paused when the
     * function is called, it will remain paused.If the function is called from
     * another state(playing, video cued, etc.), the player will play the
     * video.The player will advance to the closest keyframe before that time
     * unless the player has already downloaded the portion of the video to
     * which the user is seeking.
     */
    seek(seconds: number): void;
    /** Sets the volume.Accepts an integer between 0 and 100. */
    setVolume(volume: number): void;
    /** Returns the player's current volume, an integer between 0 and 100. Note that getVolume() will return the volume even if the player is muted. */
    getVolume(): number;
    /** Mutes the player. */
    mute(): void;
    /** Unmutes the player. */
    unMute(): void;
    /** Returns true if the player is muted, false if not. */
    isMuted(): boolean;
    /** Sets the size in pixels of the <iframe> that contains the player. */
    setSize(width: number, height: number): void;
    /**
     * This function sets the suggested playback rate for the current video.If
     * the playback rate changes, it will only change for the video that is
     * already being played.Calling load() will reset the playback rate to 1.
     */
    setPlaybackRate(rate: number): void;
    /**
     * This function retrieves the playback rate of the currently playing
     * video.The default playback rate is 1, which indicates that the video is
     * playing at normal speed.Playback rates may include values like 0.25, 0.5,
     * 1, 1.5, and 2.
     */
    getPlaybackRate(): number;
    /**
     * The function returns an array of numbers ordered from slowest to fastest
     * playback speed.Even if the player does not support variable playback
     * speeds, the array should always contain at least one value(1).
     */
    getAvailablePlaybackRates(): number[];
    /**
     * This function sets the suggested video quality for the current video.
     * The function causes the video to reload at its current position in the
     * new quality. If the playback quality does change, it will only change
     * for the video being played. Calling this function does not guarantee
     * that the playback quality will actually change. However, if the playback
     * quality does change, the 'playbackqualitychange' event will fire, and
     * your code should respond to the event rather than the fact that it
     * called the setPlaybackQuality function.
     *
     * The suggestedQuality parameter value can be 'small', 'medium', 'large',
     * 'hd720', 'hd1080', 'highres' or 'default'. We recommend that you set the
     * parameter value to 'default', which instructs YouTube to select the most
     * appropriate playback quality, which will vary for different users,
     * videos, systems and other playback conditions.
     *
     * If you call the setPlaybackQuality function with a suggestedQuality
     * level that is not available for the video, then the quality will be set
     * to the next lowest level that is available. In addition, setting
     * suggestedQuality to a value that is not a recognized quality level is
     * equivalent to setting suggestedQuality to 'default'.
     */
    setPlaybackQuality(suggestedQuality: YouTubePlayerQuality): void;
    /**
     * Returns the duration in seconds of the currently playing video.Note that
     * getDuration() will return 0 until the video's metadata is loaded, which
     * normally happens just before the video starts playing.
     */
    getDuration(): number;
    /**
     * Returns a number between 0 and 1 that specifies the percentage of the
     * video that the player shows as buffered.
     */
    getProgress(): number;
    /**
     * Returns the state of the player.Possible values are: 'unstarted',
     * 'ended', 'playing', 'paused', 'buffering', or 'cued'.
     */
    getState(): YouTubePlayerState;
    /** Returns the elapsed time in seconds since the video started playing. */
    getCurrentTime(): number;
    /**
     * Removes the <iframe> containing the player and cleans up all resources.
     */
    destroy(): void;
    /**
     * This event fires when the time indicated by the getCurrentTime() method
     * has been updated.
     */
    on(event: "timeupdate", callback: (seconds: number) => void): this;
    /**
     * This event fires whenever the video playback quality changes. Possible
     * values are: 'small', 'medium', 'large', 'hd720', 'hd1080', 'highres'.
     */
    on(event: "playbackQualityChange", callback: (quality: YouTubePlayerQuality) => void): this;
    /** This event fires whenever the video playback rate changes. */
    on(event: "playbackRateChange", callback: (playbackRate: number) => void): this;
    /**
     * These events fire when the player enters the respective state. These
     * event names are the same as the possible return values from
     * player.getState().
     *
     * When the player first loads a video, it will broadcast an unstarted
     * event. When a video is cued and ready to play, the player will broadcast
     * a cued event.
     */
    on(event: YouTubePlayerState, callback: () => void): this;
    /**
     * This event fires if a fatal error occurs in the player. This does not
     * include videos that fail to play, for whatever reason.
     */
    on(event: "error", callback: (err: Error) => void): this;
    /**
     * This event fires if the YouTube player cannot play the given video. This
     * is not a fatal error. This event is reported separately from the 'error'
     * event so there is an opportunity to play another video gracefully.
     * Possible reasons for this error:
     *
     * - The video requested was not found. This error occurs when a video has
     *   been removed (for any reason) or has been marked as private.
     * - The owner of the requested video does not allow it to be played in
     *   embedded players.
     * - The request contains an invalid parameter value. For example, this
     *   error occurs if you specify a videoId that does not have 11 characters,
     *   or if the videoId contains invalid characters, such as exclamation
     *   points or asterisks.
     */
    on(event: "unplayable", callback: (videoId: string) => void): this;
}

export = YouTubePlayer;
