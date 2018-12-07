// Type definitions for vast-client 1.7
// Project: https://github.com/dailymotion/vast-client-js#readme
// Definitions by: John G. Gainfort, Jr. <https://github.com/jgainfort>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const client: VastClient;
export const parser: VastParser;

export class tracker {
    /**
     * The VAST tracker constructor will process the tracking URLs of the selected ad/creative and returns an instance of VASTTracker.
     * You can create an instance with new DMVAST.tracker( ad , creative ).
     *
     * Object ad – Reference to the <Ad> element of the selected mediaFile
     * Object creative – Reference to the <Creative> element of the selected mediaFile
     * Object variationd -  An optional reference to the selected <NonLinear>/<Companion> element for non-linear ads
     */
    constructor(ad: VastAd, creative: VastCreativeLinear, companion?: VastCreativeCompanion);
    /**
     * Add a listener function for the specified event.
     *
     * eventName – Name of the event to attach the listener to. See events below for all details.
     * listener – Method to be called when the event is emitted.
     */
    on(eventName: string, listener: (data?: any) => void): void;
    /**
     * Remove a listener function for the specified event.
     *
     * eventName – Name of the event.
     * listener – Method to remove. Will remove all listeners for the given event if no specific callback is passed.
     */
    off(eventName: string, listener?: () => void): void;
    /**
     * Remove all listener functions for the specified event.
     *
     * eventName – Name of the event.
     */
    removeAllListeners(eventName: string): void;
    /**
     * Update the current time value. This is required for tracking time related events such as start, firstQuartile, midpoint, thirdQuartile or rewind.
     *
     * progess – Current playback time in seconds.
     */
    setProgress(progress: number): void;
    /**
     * Update the mute state and call the mute/unmute tracking URLs. Emit a mute or unmute event.
     *
     * muted – Indicate if the video is muted or not.
     */
    setMuted(muted: boolean): void;
    /**
     * Update the pause state and call the resume/pause tracking URLs. Emit a resume or pause event.
     *
     * paused – Indicate if the video is paused or not.
     */
    setPaused(paused: boolean): void;
    /**
     * Update the fullscreen state and call the fullscreen tracking URLs. Emit a fullscreen or exitFullscreen event.
     *
     * fullscreen – Indicate the fullscreen mode.
     */
    setFullscreen(fullscreen: boolean): void;
    /**
     * Update the expand state and call the expand/collapse tracking URLs. Emit a expand or collapse event
     *
     * Boolean expanded – Indicate if the video is expanded or no
     */
    setExpand(expanded: boolean): void;
    /**
     * Must be called if you want to overwrite the <Linear> Skipoffset value. This will init the skip countdown duration.
     * Then, every time you call setProgress(), it will decrease the countdown and emit a skip-countdown event with the remaining time.
     * Do not call this method if you want to keep the original Skipoffset value.
     *
     * duration – The time in seconds until the skip button is displayed.
     */
    setSkipDelay(duration: number): void;
    /**
     * Report the impression URI. Can only be called once. Will report the following URI:
     *
     * - All <Impression> URI from the <InLine> and <Wrapper> tracking elements.
     * - The creativeView URI from the <Tracking> events
     *
     * Once done, a creativeView event is emitted.
     */
    load(): void;
    /**
     * Send a request to the URI provided by the VAST <Error> element. If an [ERRORCODE] macro is included, it will be substitute with code.
     *
     * code – Replaces [ERRORCODE] macro. [ERRORCODE] values are liste in the VAST specification.
     */
    errorWithCode(code: string): void;
    /**
     * Must be called when the user watched the linear creative until its end. Call the complete tracking URLs. Emit a complete events when done.
     */
    complete(): void;
    /**
     * Must be called when the player or the window is closed during the ad. Call the closeLinear (in VAST 3.0) and close tracking URLs. Emit a closeLinear or a close event when done.
     */
    close(): void;
    /**
     * Must be called when the skip button is clicked. Call the skip tracking URLs. Emit a skip event when done.
     */
    skip(): void;
    /**
     * Must be called when the user clicks on the creative. Call the tracking URLs. Emit a clickthrough event with the resolved clickThrough URL when done.
     */
    click(): void;
}

export interface VastClient {
    /**
     * Used for ignoring the first n calls. Automatically reset 1 hour after the 1st ignored call. Free Lunch capping is disable if sets to 0.
     * Default: 0
     */
    cappingFreeLunch: number;
    /**
     * Used for ignoring calls that happen n ms after the previous call. Minimum time interval is disabled if sets to 0.
     * Default: 0
     */
    cappingMinimumTimeInterval: number;
    /**
     * Fetch a URL and parse the response into a valid VAST object.
     *
     * String url – Contains the URL for fetching the VAST XML document.
     * Object options – An optional set of key/value to configure the Ajax request:
     *      String response – A VAST XML document. When response is provided, no Ajax request is made and thus the url parameter is ignored
     *      Object urlhandler – A URL handler module, used to fetch the VAST document instead of the default ones.
     *      Boolean withCredentials – A boolean to enable the withCredentials options for the XHR and FLASH URLHandlers.
     *      Number wrapperLimit – A number of available Wrapper responses that can be received with no InLine response.
     * Function done – Method to be called once the VAST document is parsed. The VAST JS object is passed as the 1st parameter. If null, an error is provided as a 2nd parameter.
     */
    get(url: string, done: (response: VastResponse, error: Error) => void): void;
    get(url: string, options: VastRequestOptions, done: (response: VastResponse, error: Error) => void): void;
}

export interface VastParser {
    /**
     * Add the replace function at the end of the URLTemplateFilters array.
     * All functions in URLTemplateFilters will be called with the VAST URL as parameter before fetching the VAST URL document.
     */
    addURLTemplateFilter(cb: (vastUrl: string) => string): void;
    /**
     * Reset URLTemplateFilters to empty, previous replace function set with addURLTemplateFilter() are no longer called.
     */
    clearUrlTemplateFilters(): void;
    /**
     * Returns how many replace function are set (ie: URLTemplateFilters length)
     */
    countURLTemplateFilters(): number;
    /**
     * Parse an VAST xml, resolve any wrappers and execute callback function done
     *
     * String XMLDocument – A VAST XML document.
     * Object options – An optional set of key/value to configure the Ajax request:
     *      Object urlhandler – A URL handler module, used to fetch VASTAdTagURI URL. If defined, will be used instead of the default ones.
     *      Boolean withCredentials – A boolean to enable the withCredentials options for the XHR and FLASH URLHandlers.
     *      Number wrapperLimit – A number of available Wrapper responses that can be received with no InLine response.
     * Function done – Method to be called once the VAST document is parsed. When at least 1 valid <inline> has been found, the 1st parameter will be an array of VASTAd instances.
     * Hoverwise, in case of no ads, it will be null, and an error as a 2nd parameter is provided.
     */
    load(xml: string, done: (response: VastResponse, error: Error) => void): void;
    load(xml: string, options: VastRequestOptions, done: (response: VastResponse, error: Error) => void): void;
    /**
     * Add the listener function for the event named eventName. eventName value can be :
     *
     * String VAST-error – emitted when the parser encountered a VAST error (ie: no ads, warapper timeout...).
     * The VAST error code is passed to the listener function as a parameter.
     */
    on(eventName: string, listener: (error: VastError) => void): void;
    /**
     * Add a one time listener function for the event named eventName.
     */
    once(eventName: string, listener: (data?: any) => void): void;
    /**
     * Fetch a URL and parse the response into a valid VAST object.
     *
     * String url – The VAST XML document URL to fetch.
     * Object options – An optional set of key/value to configure the Ajax request:
     *      Object urlhandler – A URL handler module, used to fetch the VAST document instead of the default ones.
     *      Boolean withCredentials – A boolean to enable the withCredentials options for the XHR and FLASH URLHandlers.
     *      Number wrapperLimit – A number of available Wrapper responses that can be received with no InLine response.
     * Function done – Method to be called once the VAST document is parsed. When at least 1 valid <inline> has been found, the 1st parameter will be an array of VASTAd instances.
     * Hoverwise, in case of no ads, it will be null, and an error as a 2nd parameter is provided.
     */
    parse(url: string, done: (response: VastResponse, error: Error) => void): void;
    parse(url: string, options: VastRequestOptions, done: (response: VastResponse, error: Error) => void): void;
    /**
     * Remove the specified listener for the event named eventName.
     */
    off(eventName: string, listener: (error: VastError) => void): void;
    /**
     * Remove replace function from URLTemplateFilters array.
     * Replace function won't be called on the next VAST URL encountred by the parser.
     */
    removeURLTemplateFilter(cb: (vastUrl: string) => string): void;
}

export interface VastRequestOptions {
    /**
     * A VAST XML document. When response is provided, no Ajax request is made and thus the url parameter is ignored.
     */
    response?: string;
    /**
     * A URL handler module, used to fetch the VAST document instead of the default ones.
     */
    urlhandler?: any;
    /**
     * A boolean to enable the withCredentials options for the XHR and FLASH URLHandlers.
     */
    withCredentials?: boolean;
    /**
     * A number of available Wrapper responses that can be received with no InLine response.
     */
    wrapperLimit?: number;
}

export interface VastResponse {
    ads: VastAd[];
    errorURLTemplates: string[];
}

export interface VastError {
    /**
     * Whenever an error occurs during the VAST parsing, the parser will call on his own all related tracking error URLs. Reported errors are:
     *      no_ad: The VAST document is empty
     *      VAST error 101: VAST schema validation error.
     *      VAST error 301: Timeout of VAST URI provided in Wrapper element.
     *      VAST error 302: Wrapper limit reached.
     *      VAST error 303: No VAST response after one or more Wrappers.
     */
    ERRORCODE: string;
}

export interface VastCreative {
    id: string;
    adId: string;
    trackingEvents: VastTrackingEvents;
    apiFramework: any;
    sequence: any;
    type: string;
}

export interface VastCreativeLinear extends VastCreative {
    adParameters: any;
    duration: number;
    icons: string[];
    mediaFiles: VastMediaFile[];
    skipDelay: boolean;
    videoClickThroughURLTemplate: string;
    videoClickTrackingURLTemplates: string[];
    videoCustomClickURLTempaltes: string[];
}

export interface VastCreativeNonLinear extends VastCreative {
    variations: VastNonLinearAd[];
}

export interface VastCreativeCompanion extends VastCreative {
    variations: VastCompanionAd[];
}

export interface VastAd {
    advertiser: any;
    creatives: VastCreative[];
    description: string;
    errorURLTemplates: string[];
    extensions: VastAdExtension[];
    id: string;
    impressionURLTemplates: string[];
    pricing: any;
    sequence: string;
    survey: any;
    system: VastSystem;
    title: string;
    hasHLS: boolean;
}

export interface VastAdExtension {
    attributes: VastAdAttributes;
    children: VastAdExtensionChild[];
}

export interface VastAdAttributes {
    type: string;
}

export interface VastAdExtensionChild {
    attributes: VastAdChildAttributes;
    name: string;
    value: string;
}

export interface VastAdChildAttributes {
    name: string;
}

export interface VastNonLinearAd {
    nonLinearClickTrackingURLTemplates: string[];
    nonLinearClickThroughURLTemplate: string;
    adParameters: string;
    type: string;
    iframeResource: string;
    htmlResource: string;
    id: string;
    width: string;
    height: string;
    expandedWidth: string;
    expandedHeight: string;
    scalablle: boolean;
    maintainAspectRatio: boolean;
    minSuggestedDuration: number;
    apiFramework: any;
}

export interface VastCompanionAd {
    companionClickThroughURLTemplate: string;
    companionClickTrackingURLTemplate: string;
    companionClickTrackingURLTemplates: string[];
    height: string;
    htmlResource: string;
    id: string;
    iframeResource: string;
    staticResource: string;
    trackingEvents: VastCompanionTrackingEvents;
    type: string;
    width: string;
}

export interface VastCompanionTrackingEvents {
    creativeView: string[];
}

export interface VastMediaFile {
    apiFramework: any;
    bitrate: number;
    codec: string;
    deliveryType: string;
    fileURL: string;
    height: number;
    id: string;
    maintainAspectRatio: boolean;
    maxBitrate: number;
    mimeType: string;
    minBitrate: number;
    scalable: any;
    width: number;
}

export interface VastTrackingEvents {
    complete: string[];
    firstQuartile: string[];
    midpoint: string[];
    thirdQuartile: string[];
}

export interface VastSystem {
    value: string;
    version: string;
}
