// Type definitions for ackee-tracker 5.0
// Project: https://github.com/electerious/ackee-tracker
// Definitions by: Pablo Sáez <https://github.com/PabloSzx>
//                 Spencer Elliott <https://github.com/elliottsj>
//                 Sebastian Krüger <https://github.com/mathe42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface TrackingOptions {
    /**
     * Defaults to `true`
     */
    ignoreLocalhost?: boolean | undefined;
    /**
     * Defaults to `false`
     */
    detailed?: boolean | undefined;
    /**
     * Defaults to `true`
     */
    ignoreOwnVisits?: boolean | undefined;
}

export interface AckeeTrackingReturn {
    stop: () => void;
}

export interface ActionAttributes {
    /**
     * Key that will be used to group similar actions in the Ackee UI.
     */
    key: string;
    /**
     * Positive float value that is added to all other numerical values of the key.
     */
    value?: number | undefined;
}

export interface AckeeInstance {
    record: (domainId: string, attrs?: ReturnType<typeof attributes>) => AckeeTrackingReturn;
    updateRecord: (recordId: string) => AckeeTrackingReturn;
    action: (eventId: string, attributes: ActionAttributes, callback?: (actionId: string) => void) => void;
    updateAction: (actionId: string, attributes: ActionAttributes) => void;
}

export interface DefaultData {
    siteLocation: string;
    siteReferrer: string;
}

// Based on https://github.com/bestiejs/platform.js/blob/master/platform.js
export interface DetailedData {
    siteLanguage: string;
    screenWidth: number;
    screenHeight: number;
    screenColorDepth: number;
    deviceName: string | null;
    deviceManufacturer: string | null;
    osName: string | null;
    osVersion: string | null;
    browserName: string | null;
    browserVersion: string | null;
    browserWidth: number;
    browserHeight: number;
}

export function create(server: string, options?: TrackingOptions): AckeeInstance;

export function attributes(detailed?: false): DefaultData;
export function attributes(detailed: true): DefaultData & DetailedData;
export function attributes(detailed?: boolean): DefaultData | (DefaultData & DetailedData);

export function detect(): void;
