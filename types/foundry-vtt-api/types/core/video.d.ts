/**
 * A helper class to provide common functionality for working with HTML5 video objects
 * A singleton instance of this class is available as ``game.video``
 */
declare class VideoHelper {
    /** A collectinon of HTML5 video objects which are currently active within the FVTT page */
    videos: any[];

    /**
     * A user gesture must be registered before video playback can begin.
     * This Set records the video elements which await such a gesture.
     */
    pending: Set<any>;

    /** A flag for whether video playback is currently locked by awaiting a user gesture */
    locked: boolean;

    constructor();

    static hasVideoExtension(src: string): boolean;

    /**
     * Play a single video source
     * If playback is not yet enabled, add the video to the pending queue
     * @param video	The VIDEO element to play
     */
    play(video: HTMLElement): void;

    /**
     * Register an event listener to await the first mousemove gesture and begin playback once observed
     * A user interaction must involve a mouse click or keypress.
     * Listen for any of these events, and handle the first observed gesture.
     */
    awaitFirstGesture(): void;
}
