declare namespace VMAP {
    /**
     * Provides information about an ad break
     */
    interface VMAPAdBreak {
        /**
         * Represents the timing of the ad break
         */
        timeOffset: string;
        /**
         * Identifies whether the ad break allows "linear", "nonlinear" or "display" ads
         */
        breakType: "linear" | "nonlinear" | "display";
        /**
         * An optional string identifier for the ad break
         */
        breakId?: string | undefined;
        /**
         * An option used to distribute ad breaks equally spaced apart from one another along a linear timeline
         */
        repeatAfter: string;
        /**
         * An array of VMAPTrackingEvent objects with tracking URLs
         */
        trackingEvents: VMAPTrackingEvent[];
        /**
         * An array of VMAPExtension objects
         */
        extensions: VMAPExtension[];
        /**
         * A VMAPAdSource object
         */
        adSource: VMAPAdSource;
        /**
         * Call the trackers for the given event with an option error code parameter for error events
         */
        track: (event: string, errorCode?: string) => void;
    }

    /**
     * Provides information about a VMAP tracking event
     */
    interface VMAPTrackingEvent {
        /**
         * The name of the event to track for the element. Can be one of breakStart, breakEnd or error
         */
        event: "breakStart" | "breakEnd" | "error";
        /**
         * The URI of the tracker
         */
        uri: string;
    }

    /**
     * Provides the player with either an inline ad response or a reference to an ad response
     */
    interface VMAPAdSource {
        /**
         * Ad identifier for the ad source
         */
        id: string;
        /**
         * Indicates whether a VAST ad pod or multple buffet of ads can be served into an ad break
         */
        allowMultipleAds: boolean;
        /**
         * Indicates whether the video player should honor the redirects within an ad response
         */
        followRedirects: boolean;
        /**
         * Contains a URI to the VAST
         */
        adTagURI: string;
        /**
         * Contains custom ad data
         */
        customData: any;
        /**
         * Contains an embedded VAST response
         */
        vastAdData: Element;
    }

    /**
     * Provides information about VMAP extension
     */
    interface VMAPExtension {
        /**
         * Object containing all this extension children and their name as the key
         */
        children: any;
        /**
         * Object containing all this extension attributes and their name as the key
         */
        attribute: any;
        /**
         * Object parsed from CDATA or as a fallback all of the text nodes of this extension concatenated
         */
        value: any;
    }
}

/**
 * VMAP parser
 */
declare class VMAP {
    /**
     * The VMAP version (should be 1.0)
     */
    version: string;
    /**
     * An array of VMAPAdBreak objects
     */
    adBreaks: VMAP.VMAPAdBreak[];
    /**
     * An array of VMAPExtension objects
     */
    extensions: VMAP.VMAPExtension[];

    constructor(xml: Document);
}

export = VMAP;
