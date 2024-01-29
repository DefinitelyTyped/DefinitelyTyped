import { Break, BreakClip } from "./cast.framework.messages";

export as namespace breaks;

/**
 * Provide seek information, including list of breaks that are seeked over.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.breaks.BreakSeekData
 */
export class BreakSeekData {
    constructor(seekFrom: number, seekTo: number, breaks: Break[]);

    /**
     * List of breaks
     */
    breaks: Break[];

    /**
     * Current playback time
     */
    seekFrom: number;

    /**
     * The time to seek to
     */
    seekTo: number;
}

/**
 * Provide context information for break clip load interceptor.
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.breaks.BreakClipLoadInterceptorContext
 */
export class BreakClipLoadInterceptorContext {
    constructor(brk: Break);

    /**
     * The container break for the break clip
     */
    break: Break;
}

/**
 * Interface to manage breaks
 * @see https://developers.google.com/cast/docs/reference/web_receiver/cast.framework.breaks.BreakManager
 */
export interface BreakManager {
    /**
     * Get current media break by id.
     */
    getBreakById(id: string): Break;

    /**
     * Get current media break clip by id
     */
    getBreakClipById(id: string): BreakClip;

    /**
     * @returns current time in sec inside current break clip. Null, if player is
     *     not playing break clip.
     */
    getBreakClipCurrentTimeSec(): number | null;

    /**
     * @returns duration of current break clip. Null, if player is not playing
     *     break clip.
     */
    getBreakClipDurationSec(): number | null;

    /** Get current media break clips. */
    getBreakClips(): BreakClip[];

    /** Get current media breaks. */
    getBreaks(): Break[];

    /** Returns true if watched breaks should be played. */
    getPlayWatchedBreak(): boolean;

    /**
     * Provide an interceptor to allow developer to insert more break clips or
     * modify current break clip before a break is started.
     * If interceptor is null it will reset the interceptor to default one.
     * By default VAST fetching and parsing logic in default interceptor.
     * So if customized interceptor is set by developer, the VAST logic will be
     * overridden and developers should implement their own VAST fetching and
     * parsing logic in the provided interceptor.
     */
    setBreakClipLoadInterceptor(
        interceptor: ((breakClip: BreakClip, breakClipLoaderContext?: BreakClipLoadInterceptorContext) => void) | null,
    ): void;

    /**
     * Provide an interceptor for developer to specify what breaks they want to play after seek.
     * @param seekInterceptor Interceptor or null if developer wants to reset it
     *     to default one. The default break seek interceptor will
     *     return the closest break from the seekTo value.
     */
    setBreakSeekInterceptor(seekInterceptor: ((breakSeekData: BreakSeekData) => void) | null): void;

    /**
     * Set a flag to control if the watched client stitching break should be played.
     */
    setPlayWatchedBreak(playWatchedBreak: boolean): void;

    /**
     * Provide an interceptor to modify VAST tracking URL before it is being sent
     * to server.
     * The input of the interceptor is a string of the tracking URL.
     * The interceptor can either return a modified string of URL or a Promise
     * of modified string of URL.
     * The interceptor can also return null if you want to send the tracking URL
     * by your own code instead of by CAF.
     */
    setVastTrackingInterceptor(
        interceptor?: (trackingUrl: string) => string | URL | Promise<string | URL> | null,
    ): void;
}
