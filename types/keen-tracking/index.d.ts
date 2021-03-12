// Type definitions for keen-tracking 4.5
// Project: https://github.com/keen/keen-tracking.js#readme, https://keen.io
// Definitions by: Rui Ferreira <https://github.com/rui-ferreira>
//                 Tudor Tacal <https://github.com/TudorTacal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface KeenAutoTrackingConfig {
    recordPageViews?: boolean;
    recordPageViewsOnExit?: boolean;
    recordScrollState?: boolean;
    recordClicks?: boolean;
    recordClicksPositionPointer?: boolean;
    recordFormSubmits?: boolean;
    ignoreDisabledFormFields?: boolean;
    ignoreFormFieldTypes?: string[];
    collectIpAddress?: boolean;
    collectUuid?: boolean;
    shareUuidAcrossDomains?: boolean;
    recordElementViews?: boolean;
}

export interface KeenClient {
    config: {
        projectId: string;
        writeKey: string;
        host: string;
        protocol: string;
        requestType: string;
        resources: {
            base: string;
            version: string;
            projects: string;
            projectId: string;
            events: string;
            queries: string;
        };
    };
    _callbacks: {};
    extensions: {
        events: Array<{}>;
        collections: {};
    };
    queue: {
        capacity: number;
        config: {
            capacity: number;
            interval: number;
        };
        events: {};
        interval: number;
        timer: unknown;
    };
}

export default class KeenTracking {
    constructor(options: { projectId: string; writeKey: string; requestType?: string });
    recordEvent(collectionName: string, event: object): Promise<{ created: boolean }>;
    recordEvents(events: {
        [collectionName: string]: object[];
    }): Promise<{
        [collectionName: string]: boolean[];
    }>;
    extendEvents(payload: unknown): KeenClient;
    initAutoTracking(config: KeenAutoTrackingConfig): KeenClient;
}
