declare namespace HubSpotTrackingCode {
    /** Internal event name, in the form `pe{HubID}_{name}`. */
    type CustomBehavioralEventName = `pe${bigint}_${string}`;

    interface IdentifyProperties {
        email?: string | undefined;
        firstname?: string | undefined;
        lastname?: string | undefined;
        [property: string]: unknown;
    }

    interface CustomBehavioralEvent {
        name: CustomBehavioralEventName;
        properties?: Record<string, unknown> | undefined;
    }

    interface PrivacyConsent {
        allowed: boolean;
        /** Further properties depend on the consent banner configuration. */
        [property: string]: unknown;
    }

    /** Called once with the current consent, then again whenever it changes. */
    type PrivacyConsentListener = (consent: PrivacyConsent) => void;

    interface DoNotTrackOptions {
        /** Pass `true` to remove the do not track cookie and re-enable tracking. */
        track?: boolean | undefined;
    }

    interface HsqCommands {
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        identify: [properties: IdentifyProperties];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        trackCustomBehavioralEvent: [event: CustomBehavioralEvent];
        trackPageView: [];
        /** Overrides the path recorded by the next `trackPageView`. */
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        setPath: [path: string];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        addPrivacyConsentListener: [listener: PrivacyConsentListener];
        revokeCookieConsent: [];
        // eslint-disable-next-line @definitelytyped/no-single-element-tuple-type
        doNotTrack: [options?: DoNotTrackOptions];
    }

    type HsqCommand = { [Command in keyof HsqCommands]: [Command, ...HsqCommands[Command]] }[
        keyof HsqCommands
    ];

    /** Commands pushed before the tracking code loads are processed once it does. */
    interface Hsq extends Array<unknown> {
        push(...commands: HsqCommand[]): number;
    }
}

/** Undefined until the HubSpot tracking code snippet has run. */
declare var _hsq: HubSpotTrackingCode.Hsq | undefined;
