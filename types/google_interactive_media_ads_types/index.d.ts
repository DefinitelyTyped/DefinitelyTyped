/**
 * @file TypeScript declarations for the publicly documented APIs of the
 * IMA HTML5 client-side SDK.
 * @see https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side/reference
 */

/**
 * The google.ima namespace provides access to the SDK's classes, interfaces,
 * enumerations, and properties.
 */
declare namespace google.ima {
    /**
     * An ad class that's extended by classes representing different ad types.
     */
    interface Ad {
        /**
         * Ad ID is used to synchronize main ad and companion ads.
         * @return The ID of the ad, or the empty string if this information is
         *     unavailable.
         */
        getAdId(): string;

        /**
         * Returns the ad's pod information.
         * @return The ad's pod information.
         */
        getAdPodInfo(): AdPodInfo;

        /**
         * The source ad server information included in the ad response.
         * @return The source ad server of the ad, or the empty string if this
         *     information is unavailable.
         */
        getAdSystem(): string;

        /**
         * The advertiser name as defined by the serving party.
         * @return The advertiser name, or the empty string if this information is
         *     unavailable.
         */
        getAdvertiserName(): string;

        /**
         * Identifies the API needed to execute the ad. This corresponds with the
         * apiFramework specified in vast.
         * @return The API framework need to execute the ad, or null if this
         *     information is unavailable.
         */
        getApiFramework(): string | null;

        /**
         * Gets the companion ads for this ad based on companion ad slot size.
         * Optionally, advanced selection settings are accepted.
         * Note that this method will only return non-empty array for ad instances
         * acquired on or after STARTED event. Specifically, ads from the LOADED
         * event will return an empty array.
         * @param adSlotWidth Width of the companion ad slot.
         * @param adSlotHeight Height of the companion ad slot.
         * @param settings The selection settings for companion ads.
         * @return Array of companion ads that matches the settings and the slot
         *     size.
         */
        getCompanionAds(
            adSlotWidth: number,
            adSlotHeight: number,
            settings?: CompanionAdSelectionSettings,
        ): CompanionAd[];

        /**
         * Returns the content type of the currently selected creative,
         * or empty string if no creative is selected or the content type is unavailable.
         * For linear ads, the content type is only going to be available after the START event,
         * when the media file is selected.
         * @return the content type of the currently selected creative
         */
        getContentType(): string;
        /**
         * Returns the ISCI (Industry Standard Commercial Identifier) code for an
         * ad, or empty string if the code is unavailable. This is the Ad-ID of the
         * creative in the VAST response.
         * @return The ad ID of the creative.
         */
        getCreativeAdId(): string;

        /**
         * Retrieves the ID of the selected creative for the ad.
         * @return The ID of the selected creative for the ad, or the empty string
         *     if this information is unavailable.
         */
        getCreativeId(): string;

        /**
         * Returns the first deal ID present in the wrapper chain for the current
         * ad, starting from the top. Returns the empty string if unavailable.
         * @return The deal ID.
         */
        getDealId(): string;

        /**
         * Returns the description of this ad from the VAST response.
         * @return The description, empty if not specified.
         */
        getDescription(): string;

        /**
         * Returns the duration of the selected creative, or -1 for non-linear
         * creatives.
         * @return The selected creative duration in seconds, -1 if non-linear.
         */
        getDuration(): number;

        /**
         * Returns the height of the selected non-linear creative.
         * @return The height of the selected non-linear creative or 0 for a linear
         *     creative.
         */
        getHeight(): number;

        /**
         * Returns the URL of the media file chosen from the ad based on the media
         * selection settings currently in use. Returns null if this information is
         * unavailable. Available on STARTED event.
         * @return The media URL.
         */
        getMediaUrl(): string | null;

        /**
         * Returns the minimum suggested duration in seconds that the nonlinear
         * creative should be displayed. Returns -2 if the minimum suggested
         * duration is unknown. For linear creative it returns the entire duration
         * of the ad.
         * @return The minimum suggested duration in seconds that a creative should
         *     be displayed.
         */
        getMinSuggestedDuration(): number;

        /**
         * The number of seconds of playback before the ad becomes skippable. -1 is
         * returned for non skippable ads or if this is unavailable.
         * @return The offset in seconds, or -1.
         */
        getSkipTimeOffset(): number;

        /**
         * Returns the URL associated with the survey for the given ad. Returns null
         * if unavailable.
         * @return The survey URL.
         */
        getSurveyUrl(): string | null;

        /**
         * Returns the title of this ad from the VAST response.
         * @return The title, empty if not specified.
         */
        getTitle(): string;

        /**
         * Gets custom parameters associated with the ad at the time of ad
         * trafficking.
         * @return A mapping of trafficking keys to their values, or the empty
         *     Object if this information is not available.
         */
        getTraffickingParameters(): { [key: string]: string };

        /**
         * Gets custom parameters associated with the ad at the time of ad
         * trafficking. Returns a raw string version of the parsed parameters from
         * getTraffickingParameters.
         * @return Trafficking parameters, or the empty string if this information
         *     is not available.
         */
        getTraffickingParametersString(): string;

        /**
         * Returns the UI elements that are being displayed when this ad is played.
         * Refer to <code>google.ima.UiElements</code> for possible elements of the
         * array returned.
         * @return The UI elements being displayed.
         */
        getUiElements(): string[];

        /**
         * The registry associated with cataloging the UniversalAdId of the selected
         * creative for the ad.
         * @return Returns the registry value, or "unknown" if unavailable.
         * @deprecated Use ad.getUniversalAdIds() instead
         */
        getUniversalAdIdRegistry(): string;

        /**
         * The UniversalAdId of the selected creative for the ad.
         * @return Returns the id value or "unknown" if unavailable.
         * @deprecated Use ad.getUniversalAdIds() instead
         */
        getUniversalAdIdValue(): string;

        /**
         * The list of UniversalAdIds of the selected creative for the ad.
         * @return Returns the list of universal ad ID information that applies for
         *     this ad.
         */
        getUniversalAdIds(): UniversalAdIdInfo[];

        /**
         * When both the creative and the media file have been selected by the SDK,
         * this will return the bitrate for the media file as listed in the vast
         * response.
         * @return The bitrate for the selected media file or 0.
         */
        getVastMediaBitrate(): number;

        /**
         * Returns the VAST media height of the selected creative.
         * @return The VAST media height of the selected creative or 0 if none is
         *     selected.
         */
        getVastMediaHeight(): number;

        /**
         * Returns the VAST media width of the selected creative.
         * @return The VAST media width of the selected creative or 0 if none is
         *     selected.
         */
        getVastMediaWidth(): number;

        /**
         * Returns the width of the selected creative.
         * @return The width of the selected non-linear creative or 0 for a linear
         *     creative.
         */
        getWidth(): number;

        /**
         * Ad IDs used for wrapper ads. The IDs returned starts at the inline ad
         * (innermost) and traverses to the outermost wrapper ad. An empty array is
         * returned if there are no wrapper ads.
         * @return The IDs of the ads, starting at the inline ad, or an empty array
         *     if there are no wrapper ads.
         */
        getWrapperAdIds(): string[];

        /**
         * Ad systems used for wrapper ads. The ad systems returned starts at the
         * inline ad and traverses to the outermost wrapper ad. An empty array is
         * returned if there are no wrapper ads.
         * @return The ad systems of the ads, starting at the inline ad, or an empty
         *     array if there are no wrapper ads.
         */
        getWrapperAdSystems(): string[];

        /**
         * Selected creative IDs used for wrapper ads. The creative IDs returned
         * starts at the inline ad and traverses to the outermost wrapper ad. An
         * empty array is returned if there are no wrapper ads.
         * @return The IDs of the ads' creatives, starting at the inline ad, or an
         *     empty array if there are no wrapper ads.
         */
        getWrapperCreativeIds(): string[];

        /**
         * Indicates whether the ad’s current mode of operation is linear or
         * non-linear. If the value is true, it indicates that the ad is in linear
         * playback mode; if false, it indicates non-linear mode. The player checks
         * the linear property and updates its state according to the details of the
         * ad placement. While the ad is in linear mode, the player pauses the
         * content video. If linear is true initially, and the ad is a pre-roll
         * (defined externally), the player may choose to delay loading the content
         * video until near the end of the ad playback.
         * @return True if the ad is linear, false otherwise.
         */
        isLinear(): boolean;
    }

    namespace AdCuePoints {
        /**
         * Cue point value representing a postroll.
         */
        let POSTROLL: number;

        /**
         * Cue point value representing a preroll.
         */
        let PREROLL: number;
    }

    /**
     * The cue point list represents a time-schedule of ad breaks. Note that
     * individual ads in the ad break are not included in the schedule.
     */
    interface AdCuePoints {
        /**
         * List of time offsets from the beginning of the content at which ad breaks
         * are scheduled. Preroll and postroll ad break times have special values.
         * Preroll ad break offset value is represented by
         * <code>google.ima.AdCuePoints.PREROLL</code>, postroll break by
         * <code>google.ima.AdCuePoints.POSTROLL</code>.
         * @return List of time offsets at which the ads are scheduled to play.
         */
        getCuePoints(): number[];
    }

    /**
     * <p>This class represents a container for displaying ads. The SDK will
     * automatically create structures inside the containerElement parameter
     * to house video and overlay ads.</p>
     * <p>When an instance of this class is created, it creates an IFRAME in the
     * containerElement and loads the SDK core. This IFRAME must be preserved
     * in order for the SDK to function properly. Once all ads have been played
     * and the SDK is no longer needed, use the <code>destroy()</code> method
     * to unload the SDK.</p>
     * <p>The containerElement parameter must be an element that is part of the
     * DOM. It is necessary to correctly position the containerElement in order
     * for the ads to be displayed correctly. It is recommended to position it
     * above the content video player and size it to cover the whole video player.
     * Refer to the SDK documentation for details about recommended
     * implementations.</p>
     * <p class="note"><b>Note:</b> It is always necessary to call the
     * <code>initialize()</code> method in code that was directly invoked by a
     * user action (such as a click or tap).
     */
    class AdDisplayContainer {
        /**
         * Constructor.
         * @param containerElement The element to display the ads in.
         *     The element must be inserted into the DOM before creating
         * AdDisplayContainer.
         * @param videoElement Specifies the alternative video ad playback element.
         *     We recommend always passing in your content video player.
         * @param clickTrackingElement Specifies the alternative video ad click
         *     element. Leave this null to let the SDK handle clicks. Even if
         *     supplied, the SDK will only use the custom click tracking element
         * when non-AdSense/AdX creatives are displayed in environments that do not
         *     support UI elements overlaying a video player (for example, iPhone or
         *     pre-4.0 Android). <b>The custom click tracking element should never
         * be rendered over the video player</b> because it can intercept clicks to
         *     UI elements that the SDK renders. Also note that the SDK will not
         *     modify the visibility of the custom click tracking element. This
         * means that if a custom click tracking element is supplied, it must be
         *     properly displayed when the linear ad is played. You can check
         *     google.ima.AdsManager.isCustomClickTrackingUsed when the
         *     google.ima.AdEvent.Type.STARTED event is fired to determine whether
         * or not to display your custom click tracking element. If appropriate for
         * your UI, you should hide the click tracking element when the
         *     google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED event fires.
         */
        constructor(
            containerElement: Element,
            videoElement?: HTMLVideoElement,
            clickTrackingElement?: Element,
        );

        /**
         * Destroys internal state and previously created DOM elements.
         * The IMA SDK will be unloaded and no further calls to any APIs should be
         * made.
         */
        destroy(): void;

        /**
         * Initializes the internal video elements for playback. You must call this
         * method as a direct result of a user action, so that the browser can mark
         * the video element as user initiated.
         *
         * Some browsers will allow video playback without user interactions if the
         * video is muted. For this behavior, use
         * `AdsRequest.setAdWillPlayMuted(true)` and call this method before
         * `AdsManager.start()`.
         */
        initialize(): void;
    }

    /**
     * AdError surfaces information to the user about whether a failure
     * occurred during ad loading or playing. The errorType accessor provides
     * information about whether the error occurred during ad loading or ad
     * playing.
     */
    interface AdError extends Error {
        /**
         * Returns the error code.
         * @return The error code, as defined in AdError.ErrorCode.
         */
        getErrorCode(): number;

        /**
         * Returns the Error that caused this one.
         * @return Inner error that occurred during processing, or null if this
         *     information is unavailable. This error may either be a native error
         * or an AdError, a subclass of a native error. This may return null if the
         *     error that caused this one is not available.
         */
        getInnerError(): Error | null;

        /**
         * Returns the message for this error.
         * @return The message for this error.
         */
        getMessage(): string;

        /**
         * Returns the type of this error.
         * @return The type of this error, as defined in AdError.Type.
         */
        getType(): string;

        /**
         * Returns the VAST error code.
         * @return If VAST error code is available, returns it, otherwise
         *     returns AdError.ErrorCode.UNKNOWN_ERROR.
         */
        getVastErrorCode(): number;
    }

    namespace AdError {
        /**
         * The possible error codes raised while loading or playing ads.
         * The ErrorCodes are numeric values and can be in one of the following
         * ranges:
         * - Standard VAST 3 compliant ad error codes use blocks below 1000.
         * - SDK specific error codes:
         *   - 1000-1099 for high level generic errors
         *   - 1100-1199 for low level generic errors
         *   - 1200-1299 for video playback specific errors
         */
        enum ErrorCode {
            /**
             * The ad response was not recognized as a valid VAST ad.
             * VAST error code 100
             */
            VAST_MALFORMED_RESPONSE = 100,
            /**
             * VAST schema validation error.
             * VAST error code 101
             */
            VAST_SCHEMA_VALIDATION_ERROR = 101,
            /**
             * The ad response contained an unsupported VAST version.
             * VAST error code 102
             */
            VAST_UNSUPPORTED_VERSION = 102,
            /**
             * Trafficking error. Video player received an ad type that it was not
             * expecting and/or cannot display.
             * VAST error code 200
             */
            VAST_TRAFFICKING_ERROR = 200,
            /**
             * Ad linearity is different from what the video player is expecting.
             * VAST error code 201
             */
            VAST_UNEXPECTED_LINEARITY = 201,
            /**
             * VAST duration is different from the actual media file duration.
             * VAST error code 202
             */
            VAST_UNEXPECTED_DURATION_ERROR = 202,
            /**
             * General VAST wrapper error.
             * VAST error code 300
             */
            VAST_WRAPPER_ERROR = 300,
            /**
             * The VAST URI provided, or a VAST URI provided in a subsequent wrapper
             * element, was either unavailable or reached a timeout, as defined by the
             * video player. The timeout is 5 seconds for initial VAST requests and
             * each subsequent wrapper.
             * VAST error code 301
             */
            VAST_LOAD_TIMEOUT = 301,
            /**
             * The maximum number of VAST wrapper redirects has been reached.
             * VAST error code 302
             */
            VAST_TOO_MANY_REDIRECTS = 302,
            /**
             * No Ads VAST response after one or more wrappers.
             * VAST error code 303
             */
            VAST_NO_ADS_AFTER_WRAPPER = 303,
            /**
             * There was an error playing the video ad.
             * VAST error code 400
             */
            VIDEO_PLAY_ERROR = 400,
            /**
             * Failed to load media assets from a VAST response.
             * The default timeout for media loading is 8 seconds.
             * VAST error code 402
             */
            VAST_MEDIA_LOAD_TIMEOUT = 402,
            /**
             * Assets were found in the VAST ad response for linear ad, but none of
             * them matched the video player's capabilities.
             * VAST error code 403
             */
            VAST_LINEAR_ASSET_MISMATCH = 403,
            /**
             * Problem displaying MediaFile. Currently used if video playback is
             * stopped due to poor playback quality.
             * VAST error code 405
             */
            VAST_PROBLEM_DISPLAYING_MEDIA_FILE = 405,
            /**
             * An overlay ad failed to render.
             * VAST error code 500
             */
            OVERLAY_AD_PLAYING_FAILED = 500,
            /**
             * Unable to display NonLinear ad because creative dimensions do not align
             * with creative display area (for example, creative dimension too large).
             * VAST error code 501
             */
            NONLINEAR_DIMENSIONS_ERROR = 501,
            /**
             * An overlay ad failed to load.
             * VAST error code 502
             * @deprecated
             */
            OVERLAY_AD_LOADING_FAILED = 502,
            /**
             * Assets were found in the VAST ad response for nonlinear ad, but none
             * of them matched the video player's capabilities.
             * VAST error code 503
             */
            VAST_NONLINEAR_ASSET_MISMATCH = 503,
            /**
             * Unable to display one or more required companions. The main ad is
             * discarded since the required companions could not be displayed.
             * VAST error code 602
             */
            COMPANION_REQUIRED_ERROR = 602,
            /**
             * A companion ad failed to load or render.
             * VAST error code 603
             * @deprecated
             */
            COMPANION_AD_LOADING_FAILED = 603,
            /**
             * An unexpected error occurred and the cause is not known. Refer to the
             * inner error for more information.
             * VAST error code 900
             */
            UNKNOWN_ERROR = 900,
            /**
             * A VPAID error occurred. Refer to the inner error for more information.
             * VAST error code 901
             */
            VPAID_ERROR = 901,
            /**
             * There was a problem requesting ads from the server.
             * IMA Error code 1005
             */
            FAILED_TO_REQUEST_ADS = 1005,
            /**
             * No assets were found in the VAST ad response.
             * IMA Error code 1007
             */
            VAST_ASSET_NOT_FOUND = 1007,
            /**
             * A VAST response containing a single <code>&lt;VAST&gt;</code> tag with
             * no child tags.
             * IMA Error code 1009
             */
            VAST_EMPTY_RESPONSE = 1009,
            /**
             * The ad response was not understood and cannot be parsed.
             * IMA Error code 1010
             */
            UNKNOWN_AD_RESPONSE = 1010,
            /**
             * There was a problem requesting ads from the server.
             * IMA Error code 1012
             */
            ADS_REQUEST_NETWORK_ERROR = 1012,
            /**
             * The ad tag url specified was invalid. It needs to be properly encoded.
             * IMA Error code 1013
             */
            INVALID_AD_TAG = 1013,
            /**
             * A protected audience api error occurred. Refer to the inner error for
             * more information. VAST error code 1014
             */
            PROTECTED_AUDIENCE_API_ERROR = 1014,
            /**
             * There was an error with stream initialization during server side ad
             * insertion.
             * IMA Error code 1020
             */
            STREAM_INITIALIZATION_FAILED = 1020,
            /**
             * There was an error with asset fallback.
             * IMA Error code 1021
             */
            ASSET_FALLBACK_FAILED = 1021,
            /**
             * The URL is invalid or is not supported by the current browser.
             * IMA Error code 1022
             */
            UNSUPPORTED_URL = 1022,
            /**
             * Invalid arguments were provided to SDK methods.
             * IMA Error code 1101
             */
            INVALID_ARGUMENTS = 1101,
            /**
             * There was an error with a message received from a native SDK.
             * IMA Error code 1204
             * @ignore
             */
            NATIVE_MESSAGE_ERROR = 1204,
            /**
             * The browser prevented playback initiated without user interaction.
             * IMA Error code 1205
             */
            AUTOPLAY_DISALLOWED = 1205,
            /**
             * A Consent Management Provider was detected on the page, and it has
             * indicated that consent is not yet known.
             * IMA Error code 1300
             * @deprecated
             */
            CONSENT_MANAGEMENT_PROVIDER_NOT_READY = 1300,
        }

        /**
         * The possible error types for ad loading and playing.
         */
        enum Type {
            /**
             * Indicates that the error was encountered when the ad was being loaded.
             * Possible causes: there was no response from the ad server, malformed ad
             * response was returned, or ad request parameters failed to pass
             * validation.
             */
            AD_LOAD = "adLoadError",
            /**
             * Indicates that the error was encountered after the ad loaded, during ad
             * play.
             * Possible causes: ad assets could not be loaded, and more.
             */
            AD_PLAY = "adPlayError",
        }
    }

    /**
     * This event is raised when an error occurs when loading an ad from the
     * Google or DoubleClick servers. The types on which you can register for
     * the event are AdsLoader and AdsManager.
     */
    interface AdErrorEvent extends ImaEvent {
        /**
         * Returns the AdError that caused this event.
         * @return The AdError that caused this event.
         */
        getError(): AdError | null;

        /**
         * During ads load request it is possible to provide an object that is
         * available once the ads load is complete or fails. One possible use
         * case: relate ads response to a specific request and use user request
         * content object as the key for identifying the response. If an error
         * occurred during ads load, you can find out which request caused this
         * failure.
         * @return Object that was provided during ads request.
         */
        getUserRequestContext(): object | null;
    }

    /**
     * Types of AdErrorEvents
     */
    namespace AdErrorEvent {
        enum Type {
            /**
             * Fired when an error occurred while the ad was loading or playing.
             */
            AD_ERROR = "adError",
        }
    }

    /**
     * This event type is raised by the ad as a notification when the ad
     * state changes and when users interact with the ad. For example, when
     * the ad starts playing, is clicked on, and more. You can register for the
     * various state changed events on AdsManager.
     */
    interface AdEvent extends ImaEvent {
        /**
         * Get the current ad that is playing or just played.
         * @return The ad associated with the event, or null if there is no relevant
         *     ad.
         */
        getAd(): Ad | null;

        /**
         * Allows extra data to be passed from the ad.
         *
         * Example:
         * <pre class="prettyprint">
         * <code>
         * if (event.type == google.ima.AdEvent.Type.LOG) {
         *   let adData = event.getAdData();
         *   if (adData['adError']) {
         *     console.log('Non-fatal error occurred: ' +
         *         adData['adError'].getMessage());
         *   }
         * }
         * </code></pre>
         * @return Extra data for the event. Log events raised for error
         *     carry object of type 'google.ima.AdError' which can be accessed using
         *     'adError' key.
         */
        getAdData(): object | null;
    }

    namespace AdEvent {
        /**
         * Types of AdEvents
         */
        enum Type {
            /**
             * Fires when an ad break will not play back any ads.
             */
            AD_BREAK_FETCH_ERROR = "adBreakFetchError",
            /**
             * Fires when an ad rule or a VMAP ad break would have played if
             * autoPlayAdBreaks is false.
             */
            AD_BREAK_READY = "adBreakReady",
            /**
             * Fires when the ad has stalled playback to buffer.
             */
            AD_BUFFERING = "adBuffering",
            /**
             * Fires when the ad is ready to play without buffering, either at the
             * beginning of the ad or after buffering completes.
             */
            AD_CAN_PLAY = "adCanPlay",
            /**
             * Fires when an ads list is loaded.
             */
            AD_METADATA = "adMetadata",
            /**
             * Fires when the ad's current time value changes. Calling getAdData() on
             * this event will return an AdProgressData object.
             */
            AD_PROGRESS = "adProgress",
            /**
             * Fires when the ads manager is done playing all the valid ads in the ads
             * response, or when the response doesn't return any valid ads.
             */
            ALL_ADS_COMPLETED = "allAdsCompleted",
            /**
             * Fires when the ad is clicked.
             */
            CLICK = "click",
            /**
             * Fires when the ad completes playing.
             */
            COMPLETE = "complete",
            /**
             * Fires when content should be paused. This usually happens right before
             * an ad is about to cover the content.
             */
            CONTENT_PAUSE_REQUESTED = "contentPauseRequested",
            /**
             * Fires when content should be resumed. This usually happens when an ad
             * finishes or collapses.
             */
            CONTENT_RESUME_REQUESTED = "contentResumeRequested",
            /**
             * Fires when the ad's duration changes.
             */
            DURATION_CHANGE = "durationChange",
            /**
             * Fires when the ad playhead crosses first quartile.
             */
            FIRST_QUARTILE = "firstquartile",
            /**
             * Fires when the impression URL has been pinged.
             */
            IMPRESSION = "impression",
            /**
             * Fires when an ad triggers the interaction callback.
             * Ad interactions contain an interaction ID string in the ad data.
             */
            INTERACTION = "interaction",
            /**
             * Fires when the displayed ad changes from linear to nonlinear,
             * or the reverse.
             */
            LINEAR_CHANGED = "linearChanged",
            /**
             * Fires when ad data is available.
             */
            LOADED = "loaded",
            /**
             * Fires when a non-fatal error is encountered. The user need not take any
             * action since the SDK will continue with the same or next ad playback
             * depending on the error situation.
             */
            LOG = "log",
            /**
             * Fires when the ad playhead crosses midpoint.
             */
            MIDPOINT = "midpoint",
            /**
             * Fires when the ad is paused.
             */
            PAUSED = "pause",
            /**
             * Fires when the ad is resumed.
             */
            RESUMED = "resume",
            /**
             * Fires when the displayed ads skippable state is changed.
             */
            SKIPPABLE_STATE_CHANGED = "skippableStateChanged",
            /**
             * Fires when the ad is skipped by the user.
             */
            SKIPPED = "skip",
            /**
             * Fires when the ad starts playing.
             */
            STARTED = "start",
            /**
             * Fires when the ad playhead crosses third quartile.
             */
            THIRD_QUARTILE = "thirdquartile",
            /**
             * Fires when the ad is closed by the user.
             */
            USER_CLOSE = "userClose",
            /**
             * Fires when the non-clickthrough portion of a video ad is clicked.
             */
            VIDEO_CLICKED = "videoClicked",
            /**
             * Fires when a user clicks a video icon.
             */
            VIDEO_ICON_CLICKED = "videoIconClicked",
            /**
             * Fires when the ad volume has changed.
             */
            VOLUME_CHANGED = "volumeChanged",
            /**
             * Fires when the ad volume has been muted.
             */
            VOLUME_MUTED = "volumeMuted",
        }
    }

    /**
     * An ad may be part of a pod of ads. This object exposes metadata related to
     * that pod, such as the number of ads in the pod and ad position within the
     * pod.
     * <p>
     * The <code>getTotalAds</code> API contained within this object is often
     * correct, but in certain scenarios, it represents the SDK's best guess. See
     * that method's documentation for more information.
     * </p>
     */
    interface AdPodInfo {
        /**
         * Returns the position of the ad.
         * @return The position of the ad within the pod. The value returned is
         *     one-based, for example, 1 of 2, 2 of 2, and more.
         */
        getAdPosition(): number;

        /**
         * Returns true if the ad is a bumper ad. Bumper ads are short linear ads
         * that can indicate to a user when the user is entering into or exiting
         * from an ad break.
         * @return Whether the ad is a bumper ad.
         */
        getIsBumper(): boolean;

        /**
         * The maximum duration of the pod in seconds. For unknown duration, -1 is
         * returned.
         * @return The maximum duration of the ads in this pod in seconds.
         */
        getMaxDuration(): number;

        /**
         * Client side and DAI VOD: Returns the index of the ad pod. For a preroll
         * pod, returns 0. For midrolls, returns 1, 2,..., N. For a postroll pod,
         * returns -1. Defaults to 0 if this ad is not part of a pod, or this pod is
         * not part of a playlist.
         * <p>
         * DAI live stream: Returns the index of the ad pod. For a preroll pod,
         * returns 0. For midrolls, returns the break ID. Returns -2 if pod index
         * cannot be determined (internal error).
         * </p>
         * @return The index of the pod in the ad playlist.
         */
        getPodIndex(): number;

        /**
         * Returns the content time offset at which the current ad pod was
         * scheduled. For pods in VOD streams with dynamically inserted ads, stream
         * time is returned. <p>For preroll pod, 0 is returned. For midrolls, the
         * scheduled time is returned. For postroll, -1 is returned.</p> <p>Defaults
         * to 0 if this ad is not part of a pod, or the pod is not part of an ad
         * playlist.</p>
         * @return The time offset for the current ad pod.
         */
        getTimeOffset(): number;

        /**
         * The total number of ads contained within this pod, including bumpers.
         * Bumper ads are short linear ads that can indicate to a user when the user
         * is entering into or exiting from an ad break.
         * <p>
         * Defaults to 1 if this ad is not part of a pod.
         * </p>
         * <p>
         * In certain scenarios, the SDK does not know for sure how many ads are
         * contained within this ad pod. These scenarios include ad pods, which are
         * multiple ads within a single ad tag. In these scenarios, the first few
         * AdEvents fired (AD_METADATA, LOADED, and more.) may have just the total
         * number of ad tags from the playlist response. We recommend using the
         * FIRST_QUARTILE event as the event in which publishers pull information
         * from this object and update the visual elements of the player, if any.
         * </p>
         * @return Total number of ads in the pod.
         */
        getTotalAds(): number;
    }

    /**
     * This object exposes information about the current progress as an ad is
     * playing.
     */
    interface AdProgressData {
        /**
         * The maximum duration of the current ad break.
         */
        adBreakDuration: number;

        /**
         * The position in the ad break of the current ad.
         */
        adPosition: number;

        /**
         * The current time of the currently playing ad.
         */
        currentTime: number;

        /**
         * The duration of the currently playing ad.
         */
        duration: number;

        /**
         * The total number of ads in the current ad break.
         */
        totalAds: number;
    }

    /**
     * AdsLoader allows clients to request ads from ad servers. To do so, users
     * must register for the AdsManagerLoadedEvent event and then request ads.
     */
    class AdsLoader {
        /**
         * Constructor.
         * @param container The display container for ads.
         */
        constructor(container: AdDisplayContainer);

        /**
         * Adds a listener for ads manager loaded events.
         * @param type The type of event to listen for.
         * @param listener A function called each time an event of this type occurs.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        addEventListener(
            type: AdsManagerLoadedEvent.Type,
            listener: (event: AdsManagerLoadedEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Adds a listener for ad events.
         * @param type The type of event to listen for.
         * @param listener A function called each time an event of this type occurs.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        addEventListener(
            type: AdEvent.Type,
            listener: (event: AdEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Adds a listener for ad error events.
         * @param type The type of event to listen for.
         * @param listener A function called each time an event of this type occurs.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        addEventListener(
            type: AdErrorEvent.Type,
            listener: (event: AdErrorEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Signals to the SDK that the content is finished. This will allow the SDK
         * to play post-roll ads, if any are loaded through ad rules.
         */
        contentComplete(): void;

        /**
         * Cleans up the internal state.
         */
        destroy(): void;

        /**
         * Returns the IMA SDK settings instance. To change the settings, just call
         * the methods on the instance. The changes will apply for all the ad
         * requests made with this ads loader.
         * @return The settings instance.
         */
        getSettings(): ImaSdkSettings;

        /**
         * Returns the version of the current SDK.
         */
        getVersion(): string;

        /**
         * Removes a listener for ads manager loaded events. The listener must be
         * equal by reference to the one previously passed to `addEventListener`.
         * @param type The type of event for which to remove the listener.
         * @param listener The function to remove as a listener.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        removeEventListener(
            type: AdsManagerLoadedEvent.Type,
            listener: (event: AdsManagerLoadedEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Removes a listener for ad events. The listener must be equal by reference
         * to the one previously passed to `addEventListener`.
         * @param type The type of event for which to remove the listener.
         * @param listener The function to remove as a listener.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        removeEventListener(
            type: AdEvent.Type,
            listener: (event: AdEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Removes a listener for ad error events. The listener function must be
         * equal by reference to the one previously passed to `addEventListener`.
         * @param type The type of event for which to remove the listener.
         * @param listener The function to remove as a listener.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        removeEventListener(
            type: AdErrorEvent.Type,
            listener: (event: AdErrorEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Request ads from a server.
         * @param adsRequest AdsRequest instance containing data for the ads
         *     request.
         * @param userRequestContext User-provided object that is associated with
         *     the ads request. It can be retrieved when the ads are loaded.
         */
        requestAds(
            adsRequest: AdsRequest,
            userRequestContext?: object | null,
        ): void;
    }

    /**
     * Provides the outer public API to the publisher and communicates with the
     * inner instance of ads manager.
     */
    interface AdsManager {
        /**
         * Adds a listener for ad events.
         * @param type The type of event to listen for.
         * @param listener A function called each time an event of this type occurs.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        addEventListener(
            type: AdEvent.Type,
            listener: (event: AdEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Adds a listener for ad error events.
         * @param type The type of event to listen for.
         * @param listener A function called each time an event of this type occurs.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        addEventListener(
            type: AdErrorEvent.Type,
            listener: (event: AdErrorEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Collapse the current ad. For a non-linear ad, this hides the ad. For
         * a VPAID ad, this sets the view mode to normal. For all other ad
         * types, this is a no-op.
         */
        collapse(): void;

        /**
         * Sets required parameters for getting a reference to this AdManager
         * from the AdsManagerLoaded event.
         * @param content Object that plays back publisher's content.
         * @param adsRenderingSettings Optional settings to control the rendering of
         *     ads.
         */
        configureAdsManager(
            content: object,
            adsRenderingSettings?: AdsRenderingSettings | null,
        ): void;

        /**
         * Removes ad assets loaded at runtime that need to be properly removed at
         * the time of ad completion and stops the ad and all tracking.
         */
        destroy(): void;

        /**
         * If an ad break is currently playing, discard it and resume content.
         * Otherwise, ignore the next scheduled ad break. For example, this can be
         * called immediately after the ads manager loads to ignore a preroll
         * without losing future midrolls or postrolls. This is a no-op unless the
         * ad request returned a playlist or VMAP response.
         */
        discardAdBreak(): void;

        /**
         * Expand the current ad. For a non-linear ad, this shows the ad. For a
         * VPAID ad, this sets the view mode to fullscreen. For all other ad
         * types, this is a no-op.
         */
        expand(): void;

        /**
         * Puts the focus on the skip button, if present. If not present, focus is
         * put on interactive elements, including icons or interactive creatives.
         */
        focus(): void;

        /**
         * Returns true if the ad can currently be skipped. When this value changes,
         * the <code>AdsManager</code> fires an
         * <code>AdEvent.SKIPPABLE_STATE_CHANGED</code> event.
         * @return True if the ad can currently be skipped, false otherwise.
         */
        getAdSkippableState(): boolean;

        /**
         * Returns an array of offsets in seconds indicating when a scheduled ad
         * break will play. A preroll is represented by 0, and a postroll is
         * represented by -1. An empty array indicates the ad or ad pod has no
         * schedule and can be played at any time.
         * @return List of time offsets in seconds.
         */
        getCuePoints(): number[];

        /**
         * Get the remaining time of the current ad that is playing. If the ad is
         * not loaded yet or has finished playing, the API would return -1.
         * @return Returns the time remaining for current ad. If the remaining time
         *     is undefined for the current ad (for example custom ads), the value
         *     returns -1.
         */
        getRemainingTime(): number;

        /**
         * Get the volume for the current ad.
         * @return The volume of the current ad, from 0 (muted) to 1 (loudest).
         */
        getVolume(): number;

        /**
         * Call init to initialize the ad experience on the ads manager.
         * @param width The chosen width of the ad.
         * @param height The chosen height of the ad.
         * @param viewMode This value is ignored and can be omitted. Pass
         *     `undefined` if further arguments are passed.
         * @param videoElement The video element for custom playback. This video
         *     element overrides the one provided in the AdDisplayContainer
         *     constructor. Only use this property if absolutely necessary -
         *     otherwise we recommend specifying this video element while creating
         *     the AdDisplayContainer.
         */
        init(
            width: number,
            height: number,
            viewMode?: unknown,
            videoElement?: HTMLVideoElement | null,
        ): void;

        /**
         * Returns true if a custom click tracking element is being used for click
         * tracking on the current ad. Custom click tracking is only used when an
         * optional click tracking element is provided to the
         * <code>AdDisplayContainer</code>, custom playback is used, and the current
         * ad is not an AdSense/AdX ad.
         * @return Whether custom click tracking is used.
         */
        isCustomClickTrackingUsed(): boolean;

        /**
         * Returns true if a custom video element is being used to play the current
         * ad. Custom playback occurs when an optional video element is provided to
         * the <code>AdDisplayContainer</code> on platforms where a custom video
         * element would provide a more seamless ad viewing experience.
         * @return Whether custom playback is used.
         */
        isCustomPlaybackUsed(): boolean;

        /**
         * Pauses the current ad that is playing. This function will be no-op when
         * a static overlay is being shown or if the ad is not loaded yet or is done
         * playing.
         */
        pause(): void;

        /**
         * Removes a listener for ad events. The listener must be equal by reference
         * to the one previously passed to `addEventListener`.
         * @param type The type of event for which to remove the listener.
         * @param listener The function to remove as a listener.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        removeEventListener(
            type: AdEvent.Type,
            listener: (event: AdEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Removes a listener for ad error events. The listener function must be
         * equal by reference to the one previously passed to `addEventListener`.
         * @param type The type of event for which to remove the listener.
         * @param listener The function to remove as a listener.
         * @param optCapture Deprecated and a no-op; retained for backward
         * compatibility.
         * @param optHandlerScope Deprecated: Listener scope object. Use arrow
         * functions or bind listener instead.
         */
        removeEventListener(
            type: AdErrorEvent.Type,
            listener: (event: AdErrorEvent) => void,
            optCapture?: boolean,
            optHandlerScope?: object,
        ): void;

        /**
         * Resizes the current ad.
         * @param width New ad slot width.
         * @param height New ad slot height.
         * @param viewMode This value is ignored and should be omitted.
         */
        resize(width: number, height: number, viewMode?: unknown): void;

        /**
         * Resumes the current ad that is loaded and paused. This function will be
         * no-op when a static overlay is being shown or if the ad is not loaded yet
         * or is done playing.
         */
        resume(): void;

        /**
         * Set the volume for the current ad.
         * @param volume The volume to set, from 0 (muted) to 1 (loudest).
         */
        setVolume(volume: number): void;

        /**
         * Skips the current ad when <code>AdsManager.getAdSkippableState()</code>
         * is true. When called under other circumstances, skip has no effect. After
         * the skip is completed the <code>AdsManager</code> fires an
         * <code>AdEvent.SKIPPED</code> event. <code>AdsManager.skip()</code> only
         * skips ads if IMA does not render the 'Skip ad' button.
         */
        skip(): void;

        /**
         * Start playing the ads.
         *
         * Developers must call `AdDisplayContainer.initialize()` first.
         */
        start(): void;

        /**
         * Stop playing the ads. Calling this will get publisher back to the
         * content.
         */
        stop(): void;

        /**
         * Updates the ads rendering settings. This should be used specifically for
         * VMAP use cases between ad breaks when ads rendering settings such as
         * bitrate need to be updated.
         * @param adsRenderingSettings The updated ads rendering settings.
         */
        updateAdsRenderingSettings(
            adsRenderingSettings: AdsRenderingSettings,
        ): void;
    }

    /**
     * This event is raised when ads are successfully loaded from the Google or
     *     DoubleClick ad servers through an AdsLoader. You can register for this
     *     event on AdsLoader.
     */
    interface AdsManagerLoadedEvent extends ImaEvent {
        /**
         * After ads are loaded from the Google or DoubleClick ad servers,
         * the publisher needs to play these ads either in their own video
         * player or in the Google-provided video player. This method returns
         * an AdsManager object. The AdsManager supports playing ads and allows
         * the publisher to subscribe to various events during ad playback.
         * @param contentPlayback Player that plays back publisher's content. This
         *     must be an object that contains the property
         *     <code>currentTime</code>, which allows the SDK to query playhead
         *     position to properly display midrolls in case ad server responds with
         *     an ad rule. The HMTL5 video element fulfills these requirements. You
         *     may optionally implement your own playhead tracker, as long as it
         *     fulfills the above requirements.
         * @param adsRenderingSettings Optional settings to control the rendering of
         *     ads.
         * @throws {!google.ima.AdError} if ads manager could not be created.
         * @return AdsManager that manages and plays ads.
         */
        getAdsManager(
            contentPlayback: object,
            adsRenderingSettings?: AdsRenderingSettings,
        ): AdsManager;

        /**
         * During ads load request it is possible to provide an object that is
         *     available once the ads load is complete. One possible use case:
         *     relate ads response to a specific request and use user request
         *     content object as a key for identifying the response.
         * @return The user request content object.
         */
        getUserRequestContext(): object | null;
    }

    namespace AdsManagerLoadedEvent {
        /**
         * Types of AdsManagerLoadedEvents.
         */
        enum Type {
            /**
             * Fired when the ads have been loaded and an AdsManager is available.
             */
            ADS_MANAGER_LOADED = "adsManagerLoaded",
        }
    }

    // Use class + interface declaration merging to avoid redeclaring properties.
    // https://github.com/microsoft/TypeScript/issues/3332
    /**
     * Defines parameters that control the rendering of ads.
     */
    class AdsRenderingSettings implements AdsRenderingSettingsInterface {
        /** Constructor. */
        constructor();
    }
    interface AdsRenderingSettings extends AdsRenderingSettingsInterface {}

    interface AdsRenderingSettingsInterface {
        /**
         * Set to false if you want to have fine grained control over the
         * positioning of all non-linear ads. If this value is true, the ad is
         * positioned in the bottom center. If this value is false, the ad is
         * positioned in the top left corner. The default value is true.
         */
        autoAlign: boolean;

        /**
         * Maximum recommended bitrate. The value is in kbit/s.
         * The SDK will pick media with bitrate below the specified max, or the
         * closest bitrate if there is no media with lower bitrate found. Default
         * value, <code>-1</code>, means the SDK selects the maximum bitrate.
         */
        bitrate: number;

        /**
         * Enables preloading of video assets. For more info see
         * <a href="/interactive-media-ads/docs/sdks/html5/preload">our guide to
         * preloading media</a>.
         */
        enablePreloading: boolean;

        /**
         * Timeout (in milliseconds) when loading a video ad media file. If loading
         * takes longer than this timeout, the ad playback is canceled and the next
         * ad in the pod plays, if available. Use -1 for the default of 8 seconds.
         */
        loadVideoTimeout: number;

        /**
         * Only supported for linear video mime types. If specified, the SDK will
         * include media that matches the MIME type(s) specified in the list and
         * exclude media that does not match the specified MIME type(s).
         * The format is a list of strings, for example, [ 'video/mp4',
         * 'video/webm', ... ] If not specified, the SDK will pick the media based
         * on player capabilities.
         */
        mimeTypes: string[] | null;

        /**
         * For VMAP and ad rules playlists, only play ad breaks scheduled after this
         * time (in seconds). This setting is <em>strictly</em> after - for example,
         * setting playAdsAfterTime to 15 will cause IMA to ignore an ad break
         * scheduled to play at 15s.
         */
        playAdsAfterTime: number;

        /**
         * Specifies whether the SDK should record the state of the provided video
         * element before it is used for ads, and restore the state after the ads
         * have completed. This is only relevant for custom playback, when the same
         * video element is used for both ads and content. The default value is
         * false.
         */
        restoreCustomPlaybackStateOnAdBreakComplete: boolean;

        /**
         * Specifies whether to display specific IMA UI elements. For more details,
         * see
         * <a
         * href="/interactive-media-ads/docs/sdks/html5/client-side/reference/js/google.ima#.UiElements">UiElements</a>.
         * AdSense and AdX ads render their own ad UI regardless of this setting.
         */
        uiElements: string[] | null;

        /**
         * Render linear ads with full UI styling.
         * This setting does not apply to AdSense/AdX ads or ads played in a mobile
         * context that already use full UI styling by default.
         */
        useStyledLinearAds: boolean;

        /**
         * Render non-linear ads with a close and recall button.
         */
        useStyledNonLinearAds: boolean;
    }

    // Use class + interface declaration merging to avoid redeclaring properties.
    // https://github.com/microsoft/TypeScript/issues/3332
    /**
     * A class for specifying properties of the ad request.
     */
    class AdsRequest implements AdsRequestInterface {
        /** Constructor. */
        constructor();
    }
    interface AdsRequest extends AdsRequestInterface {}

    interface AdsRequestInterface {
        /**
         * Specifies the ad tag url that is requested from the ad server.
         * For details on constructing the ad tag url, see
         * <a href="https://support.google.com/dfp_premium/answer/1068325">
         * Create a main ad video tag manually</a>.
         * <p>
         * This parameter is required.
         * </p>
         */
        adTagUrl: string;

        /**
         * Specifies a VAST 2.0 document to be used as the ads response instead of
         * making a request through an ad tag url. This can be useful for debugging
         * and other situations where a VAST response is already available. <p> This
         * parameter is optional.
         * </p>
         */
        adsResponse: string | Document | null;

        /**
         * Specifies the duration of the content in seconds to be shown. It is used
         * in 2 cases: 1) AdX ad targeting and 2) deciding when to preload VMAP
         * postroll.
         * <p>
         * This parameter is optional.
         * </p>
         */
        contentDuration: number | null;

        /**
         * Specifies the keywords used to describe the content to be shown. Used in
         * AdX requests. <p> This parameter is optional.
         * </p>
         */
        contentKeywords: string[] | null;

        /**
         * Specifies the title of the content to be shown. Used in AdX requests.
         * <p>
         * This parameter is optional.
         * </p>
         */
        contentTitle: string | null;

        /**
         * Forces non-linear AdSense ads to render as linear fullslot. If set,
         * the content video will be paused and the non-linear text or image ad will
         * be rendered as fullslot. The content video will resume once the ad has
         * been skipped or closed.
         */
        forceNonLinearFullSlot: boolean;

        /**
         * Specifies the height of the rectangular area within which a linear ad is
         * displayed. This value is used as one of the criteria for ads selection.
         * This value does not need to match actual ad's height. <p> This parameter
         * is required for linear ads.
         * </p>
         */
        linearAdSlotHeight: number;

        /**
         * Specifies the width of the rectangular area within which a linear ad is
         * displayed. This value is used as one of the criteria for ads selection.
         * This value does not need to match actual ad's width. <p> This parameter
         * is required for linear ads.
         * </p>
         */
        linearAdSlotWidth: number;

        /**
         * Specifies the maximum amount of time to wait in seconds, after calling
         * requestAds, before requesting the ad tag URL. This can be used to stagger
         * requests during a live-stream event, in order to mitigate spikes in the
         * number of requests.
         */
        liveStreamPrefetchSeconds: number;

        /**
         * Specifies the height of the rectangular area within which a non linear ad
         * is displayed. This value is used as one of the criteria for ads
         * selection. This value does not need to match actual ad's height. <p> This
         * parameter is required for non-linear ads.
         * </p>
         */
        nonLinearAdSlotHeight: number;

        /**
         * Specifies the width of the rectangular area within which a non linear ad
         * is displayed. This value is used as one of the criteria for ads
         * selection. This value does not need to match actual ad's width. <p> This
         * parameter is required for non-linear ads.
         * </p>
         */
        nonLinearAdSlotWidth: number;

        /**
         * Settings object for mapping verification vendors to OMID Access Modes.
         * The keys must be values in google.ima.OmidVerificationVendor, and the
         * values must be values in google.ima.OmidAccessMode.
         *
         * Verification script URLs are internally matched against vendor provided
         * regular expressions to resolve to an OmidVerificationVendor key. IMA then
         * looks up the access mode for the given vendor using this object.
         *
         * For script URLs that don't resolve to a known vendor, or if the resolved
         * OmidVerificationVendor is not provided in this object, IMA will use the
         * access mode provided for OmidVerificationVendor.OTHER. If
         * OmidVerificationVendor.OTHER is not provided, then the LIMITED access
         * mode will be used.
         */
        omidAccessModeRules: { [key: string]: string };

        /**
         * Specifies the full url of the page that will be included in the Google ad
         * request for targeting purposes. The url needs to be a valid url. If
         * specified, this value will be used for the [PAGEURL] VAST macro.
         * <p>
         * This parameter is optional.
         * </p>
         */
        pageUrl: string | null;

        /**
         * Notifies the SDK whether the player intends to start the content and ad
         * in response to a user action or whether it will be automatically played.
         * Changing this setting will have no impact on ad playback.
         * @param autoPlay Whether the content and the ad will be autoplayed or
         *     whether it will be started by a user action.
         */
        setAdWillAutoPlay(autoPlay: boolean): void;

        /**
         * Notifies the SDK whether the player intends to start ad while muted.
         * Changing this setting will have no impact on ad playback, but will send
         * the appropriate signal in the ad request to allow buyers to bid on muted
         * inventory.
         * @param muted Whether the ad will be played while muted.
         */
        setAdWillPlayMuted(muted: boolean): void;

        /**
         * Notifies the SDK whether the player intends to continuously play the
         * content videos one after another similar to TV broadcast. Changing this
         * setting will have no impact on the ad playback, but will send the
         * appropriate signal in this ad request to allow buyers to bid on the type
         * of ad inventory.
         * @param continuousPlayback Whether the content video is played one after
         *     another continuously.
         */
        setContinuousPlayback(continuousPlayback: boolean): void;

        /**
         * Override for default VAST load timeout in milliseconds for a single
         * wrapper. The default timeout is 5000ms. <p> This parameter is optional.
         * </p>
         */
        vastLoadTimeout: number;
    }

    /**
     * Represents a companion ad.
     */
    interface CompanionAd {
        /**
         * Returns the ad slot id for this companion.
         * @return The ad slot id for this companion.
         */
        getAdSlotId(): string | null;

        /**
         * Returns the HTML content for the companion ad that can be added to the
         * publisher page.
         * @return The HTML content.
         */
        getContent(): string;

        /**
         * Returns the content type of the Companion Ad.
         * @return The content type of the Companion Ad. This may return
         *     null if the content type is not known (such as in the case of a VAST
         *     HTMLResource or IFrameResource).
         */
        getContentType(): string | null;

        /**
         * Returns the height of the companion in pixels.
         * @return The height of the companion in pixels.
         */
        getHeight(): number;

        /**
         * Returns the width of the companion in pixels.
         * @return The width of the companion in pixels.
         */
        getWidth(): number;
    }

    // Use class + interface declaration merging to avoid redeclaring properties.
    // https://github.com/microsoft/TypeScript/issues/3332
    /**
     * CompanionAdSelectionSettings object is used to define the selection
     * criteria when calling the <code>google.ima.Ad.getCompanionAds</code>
     * function.
     */
    class CompanionAdSelectionSettings implements CompanionAdSelectionSettingsInterface {
        /** Constructor. */
        constructor();
    }
    interface CompanionAdSelectionSettings extends CompanionAdSelectionSettingsInterface {}

    namespace CompanionAdSelectionSettings {
        /**
         * Available choices for creative type of a companion ad. The user can
         * specify any of these choices as a criterion for selecting companion ads.
         */
        enum CreativeType {
            /**
             * Specifies all creative types.
             */
            ALL = "All",
            /**
             * Specifies Flash creatives.
             */
            FLASH = "Flash",
            /**
             * Specifies image creatives (such as JPEG, PNG, GIF, etc).
             */
            IMAGE = "Image",
        }

        /**
         * Available choices for resource type of a companion ad. The user can
         * specify any of these choices as a criterion for selecting companion ads.
         */
        enum ResourceType {
            /**
             * Specifies that the resource can be any type of resource.
             */
            ALL = "All",
            /**
             * Specifies that the resource should be an HTML snippet.
             */
            HTML = "Html",
            /**
             * Specifies that the resource should be a URL that should be used as the
             * source of an <code>iframe</code>.
             */
            IFRAME = "IFrame",
            /**
             * Specifies that the resource should be a static file (usually the URL of
             * an image of SWF).
             */
            STATIC = "Static",
        }

        /**
         * Available choices for size selection criteria. The user can specify any
         * of these choices for selecting companion ads.
         */
        enum SizeCriteria {
            /**
             * Specifies that size should be ignored when choosing companions.
             */
            IGNORE = "IgnoreSize",
            /**
             * Specifies that only companions that match the size of the companion ad
             * slot exactly should be chosen.
             */
            SELECT_EXACT_MATCH = "SelectExactMatch",
            /**
             * Specifies that only special size, 'fluid', companions should be chosen.
             */
            SELECT_FLUID = "SelectFluid",
            /**
             * Specifies that any companion close to the size of the companion ad slot
             * should be chosen.
             */
            SELECT_NEAR_MATCH = "SelectNearMatch",
        }
    }

    interface CompanionAdSelectionSettingsInterface {
        /**
         * The companion ad slot ids to be used for matching set by the user.
         */
        adSlotIds: string[];

        /**
         * Creative type setting set by the user.
         */
        creativeType: string;

        /**
         * The near fit percent set by the user.
         */
        nearMatchPercent: number;

        /**
         * Resource type setting set by the user.
         */
        resourceType: string;

        /**
         * Size criteria setting set by the user.
         */
        sizeCriteria: string;
    }

    /**
     * An event raised by the IMA SDK.
     */
    interface ImaEvent {
        /**
         * @deprecated
         * Use `target` instead.
         */
        currentTarget?: object | null;
        /**
         * @deprecated
         * No-op. IMA events do not have a default action.
         */
        preventDefault(): void;
        /**
         * The object on which the event was raised (and to which a listener was
         * added).
         */
        target?: object | null;
        type: string;
    }

    /**
     * This class contains SDK-wide settings.
     */
    interface ImaSdkSettings {
        /**
         * Returns the current companion backfill mode.
         * @return The current value.
         */
        getCompanionBackfill(): ImaSdkSettings.CompanionBackfillMode;

        /**
         * Returns whether to disable custom playback on iOS 10+ browsers.
         * The default value is false.
         * @return Whether to disable custom playback.
         */
        getDisableCustomPlaybackForIOS10Plus(): boolean;

        /**
         * Returns an object with keys as feature flags and values as their current
         * state.
         * @return The feature flags.
         */
        getFeatureFlags(): Record<string, unknown>;

        /**
         * Returns the publisher provided locale.
         * @return Publisher provided locale.
         */
        getLocale(): string;

        /**
         * Returns the maximum number of redirects for subsequent redirects will be
         * denied.
         * @return the maximum number of redirects.
         */
        getNumRedirects(): number;

        /**
         * Returns the partner provided player type.
         * @return Partner player type.
         */
        getPlayerType(): string;

        /**
         * Returns the partner provided player version.
         * @return Partner player version.
         */
        getPlayerVersion(): string;

        /**
         * Returns the publisher provided id.
         * @return The publisher provided id.
         */
        getPpid(): string | null;

        /**
         * Returns whether the publisher allows cookies to be used.
         * @return Whether the publisher allows cookies to be used.
         */
        isCookiesEnabled(): boolean;

        /**
         * Sets whether VMAP and ad rules ad breaks are automatically played
         * @param autoPlayAdBreaks Whether to autoPlay the ad breaks.
         */
        setAutoPlayAdBreaks(autoPlayAdBreaks: boolean): void;

        /**
         * Sets the companion backfill mode. See the various modes
         * available in ImaSdkSettings.CompanionBackfillMode.
         * <p>
         * The default mode is ImaSdkSettings.CompanionBackfillMode.ALWAYS.
         * </p>
         * @param mode The chosen companion backfill mode.
         */
        setCompanionBackfill(mode: ImaSdkSettings.CompanionBackfillMode): void;

        /**
         * Sets whether the SDK should store a Google Ad Manager cookie (GFP Cookie)
         * on the publisher's domain, as a first-party cookie. This enables
         * persistence across multiple visits to the same domain without using
         * third-party cookies. Defaults to true.
         *
         * <p>This setting will not affect other cookies which may be set by other
         * parties or for other purposes. User consent and opt-outs may also disable
         * usage of first-party cookies. These will be picked up by publisher's
         * usage of an IAB compliant Consent Management Provider, if in the same
         * frame.</p>
         * @param cookiesEnabled Whether to enable the first party cookie.
         */
        setCookiesEnabled(cookiesEnabled: boolean): void;

        /**
         * Sets whether to disable custom playback on iOS 10+ browsers. If true, ads
         * will play inline if the content video is inline. This enables TrueView
         * skippable ads. However, the ad will stay inline and not support iOS's
         * native fullscreen. When false, ads will play in the same player as your
         * content. The value set here when an AdDisplayContainer is created is used
         * for the lifetime of the container. The default value is false.
         * @param disable Whether or not to disable custom playback.
         */
        setDisableCustomPlaybackForIOS10Plus(disable: boolean): void;

        /**
         * Set the value for any feature flags. This should be set as early as
         * possible, before requesting ads. Settings will remain constant until the
         * next ad request. Calling this method again will reset any feature flags
         * for the next ad request.
         * @param featureFlags The feature flags object.
         */
        setFeatureFlags(featureFlags: Record<string, unknown>): void;

        /**
         * Sets the publisher provided locale. Must be called before creating
         * AdsLoader or AdDisplayContainer. The locale specifies the language
         * in which to display UI elements. The supported codes can be found in
         * <a href="/interactive-media-ads/docs/sdks/html5/localization">Localizing
         * for Language and Locale</a>.
         * @param locale Publisher-provided locale.
         */
        setLocale(locale: string): void;

        /**
         * Specifies the maximum number of redirects before the subsequent redirects
         * will be denied, and the ad load aborted. The number of redirects directly
         * affects latency and thus user experience. This applies to all VAST
         * wrapper ads.
         * @param numRedirects The maximum number of redirects.
         */
        setNumRedirects(numRedirects: number): void;

        /**
         * Sets the partner provided player type. This setting should be used to
         * specify the name of the player being integrated with the SDK. Player type
         * greater than 20 characters will be truncated. The player type specified
         * should be short and unique. This is an optional setting used to improve
         * SDK usability by tracking player types.
         *
         * Example:
         * <pre class="prettyprint">
         * <code>
         * settings.setPlayerType('google/gmf-player');
         * </code></pre>
         * @param playerType The type of the partner player.
         */
        setPlayerType(playerType: string): void;

        /**
         * Sets the partner provided player version. This setting should be used to
         * specify the version of the partner player being integrated with the SDK.
         * Player versions greater than 20 characters will be truncated. This is an
         * optional setting used to improve SDK usability by tracking player
         * version.
         *
         * Example:
         * <pre class="prettyprint">
         * <code>
         * settings.setPlayerVersion('1.0.0');
         * </code></pre>
         * @param playerVersion The version of the partner player.
         */
        setPlayerVersion(playerVersion: string): void;

        /**
         * Sets the publisher provided id.
         * @param ppid publisher provided id.
         */
        setPpid(ppid: string): void;

        /**
         * Session ID is a temporary random ID. It is used exclusively for
         * frequency capping. A session ID must be a UUID.
         * @param sessionId A temporary UUID used for frequency capping.
         */
        setSessionId(sessionId: string): void;

        /**
         * Sets whether VPAID creatives are allowed.
         * @param allowVpaid Whether to allow VPAID creatives.
         * @deprecated Use setVpaidMode.
         */
        setVpaidAllowed(allowVpaid: boolean): void;

        /**
         * Sets VPAID playback mode.
         * @param vpaidMode Sets how VPAID ads will be played. Default is secure
         *     mode.
         */
        setVpaidMode(vpaidMode: ImaSdkSettings.VpaidMode): void;
    }

    namespace ImaSdkSettings {
        /**
         * Defines a set of constants for the companion backfill setting.
         * This setting indicates whether companions should be backfilled in various
         * scenarios.
         * <p>
         * If the value is <code>ALWAYS</code>, companion
         * backfill will be attempted in all situations, even when there is no
         * main ad returned.
         * </p>
         * <p>
         * If the value is <code>ON_MASTER_AD</code>, companion
         * backfill will be attempted if there is a main ad with fewer companions
         * than there are companion slots. The missing companions will be
         * backfilled.
         * </p>
         * <p>
         * The default value is <code>ALWAYS</code>.
         * </p>
         * Note that client-side companion backfill requires tagging your companions
         * properly with a Google Publisher Tag (GPT).
         * To enable backfill, the following changes to standard GPT setup are
         * necessary:
         * <pre>
         * ...
         * let slot1 = googletag.defineSlot('/1234/adunit', [300, 250], 'slot-div');
         * slot1.addService(googletag.companionAds()).addService(googletag.pubads());
         * ...
         * googletag.companionAds().setRefreshUnfilledSlots(true);
         * ...
         * googletag.enableServices();
         * </pre>
         * For autoplay videos, the following additional change is recommended to
         * prevent companion slots from being preloaded and then immediately
         * replaced with companions.
         * <pre>
         * googletag.pubads().disableInitialLoad();
         * ...
         * googletag.enableServices();
         * </pre>
         */
        enum CompanionBackfillMode {
            ALWAYS = "always",
            ON_MASTER_AD = "on_master_ad",
        }

        /**
         * A set of constants for enabling VPAID functionality.
         */
        enum VpaidMode {
            /**
             * VPAID ads will not play and an error will be returned.
             */
            DISABLED = 0,
            /**
             * VPAID ads are enabled using a cross domain iframe. The VPAID ad cannot
             * access the site. VPAID ads that depend on friendly iframe access may
             * error. This is the default.
             */
            ENABLED = 1,
            /**
             * VPAID ads are enabled using a friendly iframe. This allows the ad
             * access to the site through JavaScript.
             */
            INSECURE = 2,
        }
    }

    /**
     * Available access modes for OMID for Web, which control how much the
     * verification script can access.
     */
    enum OmidAccessMode {
        /**
         * No longer supported. Access mode rules selecting DOMAIN are ignored
         * and default to LIMITED.
         * @deprecated Use a different access mode.
         */
        DOMAIN = "domain",

        /**
         * The verification script has direct access to the creative and the
         * publisher page.
         */
        FULL = "full",

        /**
         * The verification script is sandboxed and cannot access the creative
         * or publisher page, and cannot directly confirm what publisher domain it
         * is on.
         */
        LIMITED = "limited",
    }

    /**
     * Identifies an OMID verification vendor. Vendors are listed in alphabetical
     * order.
     */
    enum OmidVerificationVendor {
        /**
         * The default vendor to use when the script URL doesn't match any other
         * vendor.
         */
        OTHER = 1,
        MOAT = 2,
        DOUBLEVERIFY = 3,
        INTEGRAL_AD_SCIENCE = 4,
        PIXELATE = 5,
        NIELSEN = 6,
        COMSCORE = 7,
        MEETRICS = 8,
        GOOGLE = 9,
    }

    /**
     * Enum specifying different UI elements that can be configured to be
     * displayed or hidden. These settings may be ignored for AdSense and ADX ads.
     */
    enum UiElements {
        /**
         * Displays the "Ad" text in the ad UI. Must be present to show the
         * countdown timer.
         */
        AD_ATTRIBUTION = "adAttribution",
        /**
         * Ad attribution is required for a countdown timer to be displayed. Both
         * <code>google.ima.UiElements.COUNTDOWN</code> and
         * <code>google.ima.UiElements.AD_ATTRIBUTION</code> must be present in
         * <code>AdsRenderingSettings.uiElements</code>.
         */
        COUNTDOWN = "countdown",
    }

    /**
     * This object exposes information about the universal ad ID associated
     * with the creative, including the ad ID value and the ad ID registry.
     */
    interface UniversalAdIdInfo {
        /**
         * Returns the ad ID registry associated with the ad ID value.
         * @return The ad ID registry associated with the ad ID value.
         */
        getAdIdRegistry(): string;

        /**
         * Returns the universal ad ID value.
         * @return The universal ad ID value.
         */
        getAdIdValue(): string;
    }

    /** Utility functions for Secure Signals. */
    namespace secureSignals {
        /** Clears all cached Secure Signals from local storage. */
        function clearAllCache(): void;
    }

    /** Object holding the SDK-wide settings. */
    const settings: ImaSdkSettings;
}
