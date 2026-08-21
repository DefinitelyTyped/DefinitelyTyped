export interface KeenAutoTrackingConfig {
    recordPageViews?: boolean | undefined;
    recordPageViewsOnExit?: boolean | undefined;
    recordScrollState?: boolean | undefined;
    recordClicks?: boolean | undefined;
    recordClicksPositionPointer?: boolean | undefined;
    recordFormSubmits?: boolean | undefined;
    ignoreDisabledFormFields?: boolean | undefined;
    ignoreFormFieldTypes?: string[] | undefined;
    collectIpAddress?: boolean | undefined;
    collectUuid?: boolean | undefined;
    shareUuidAcrossDomains?: boolean | undefined;
    recordElementViews?: boolean | undefined;
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
    constructor(options: { projectId: string; writeKey: string; requestType?: string | undefined });
    recordEvent(collectionName: string, event: object): Promise<{ created: boolean }>;
    recordEvents(events: {
        [collectionName: string]: object[];
    }): Promise<{
        [collectionName: string]: boolean[];
    }>;
    extendEvents(payload: unknown): KeenClient;
    initAutoTracking(config: KeenAutoTrackingConfig): KeenClient;
}
